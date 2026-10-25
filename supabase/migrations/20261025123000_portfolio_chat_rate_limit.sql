create schema if not exists private;

create table private.portfolio_chat_rate_limits (
  utc_day date not null,
  bucket_type text not null check (bucket_type in ('global', 'ip')),
  bucket_key text not null,
  request_count smallint not null check (request_count > 0),
  updated_at timestamptz not null default now(),
  primary key (utc_day, bucket_type, bucket_key)
);

alter table private.portfolio_chat_rate_limits enable row level security;
revoke all on schema private from public, anon, authenticated;
revoke all on private.portfolio_chat_rate_limits from public, anon, authenticated;

create or replace function public.consume_portfolio_chat_rate_limit(p_ip_hash text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, private
as $$
declare
  v_utc_day date := (now() at time zone 'UTC')::date;
  v_count integer;
begin
  if p_ip_hash !~ '^[0-9a-f]{64}$' then
    return false;
  end if;

  delete from private.portfolio_chat_rate_limits
  where utc_day < v_utc_day - 1;

  insert into private.portfolio_chat_rate_limits as rate_limits
    (utc_day, bucket_type, bucket_key, request_count)
  values (v_utc_day, 'global', 'all', 1)
  on conflict (utc_day, bucket_type, bucket_key) do update
    set request_count = rate_limits.request_count + 1,
        updated_at = now()
    where rate_limits.request_count < 45
  returning request_count into v_count;

  if not found then
    return false;
  end if;

  insert into private.portfolio_chat_rate_limits as rate_limits
    (utc_day, bucket_type, bucket_key, request_count)
  values (v_utc_day, 'ip', p_ip_hash, 1)
  on conflict (utc_day, bucket_type, bucket_key) do update
    set request_count = rate_limits.request_count + 1,
        updated_at = now()
    where rate_limits.request_count < 12
  returning request_count into v_count;

  if not found then
    return false;
  end if;

  return true;
end;
$$;

revoke all on function public.consume_portfolio_chat_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_portfolio_chat_rate_limit(text) to service_role;
