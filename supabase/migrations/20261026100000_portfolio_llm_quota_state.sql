create table private.portfolio_llm_quota_state (
  singleton boolean primary key default true check (singleton),
  exhausted_utc_day date,
  next_probe_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table private.portfolio_llm_quota_state enable row level security;
revoke all on private.portfolio_llm_quota_state from public, anon, authenticated;

create or replace function public.claim_portfolio_llm_quota_probe()
returns text
language plpgsql
security definer
set search_path = pg_catalog, private
as $$
declare
  v_utc_day date := (now() at time zone 'UTC')::date;
  v_state private.portfolio_llm_quota_state%rowtype;
begin
  insert into private.portfolio_llm_quota_state (singleton)
  values (true)
  on conflict (singleton) do nothing;

  select * into v_state
  from private.portfolio_llm_quota_state
  where singleton = true
  for update;

  if v_state.exhausted_utc_day is distinct from v_utc_day then
    update private.portfolio_llm_quota_state
    set exhausted_utc_day = null,
        next_probe_at = null,
        updated_at = now()
    where singleton = true;
    return 'allowed';
  end if;

  if v_state.next_probe_at is not null and v_state.next_probe_at > now() then
    return 'blocked';
  end if;

  update private.portfolio_llm_quota_state
  set next_probe_at = now() + interval '5 minutes',
      updated_at = now()
  where singleton = true;
  return 'probe';
end;
$$;

create or replace function public.mark_portfolio_llm_quota_exhausted()
returns void
language plpgsql
security definer
set search_path = pg_catalog, private
as $$
begin
  insert into private.portfolio_llm_quota_state
    (singleton, exhausted_utc_day, next_probe_at, updated_at)
  values
    (true, (now() at time zone 'UTC')::date, now() + interval '5 minutes', now())
  on conflict (singleton) do update
    set exhausted_utc_day = excluded.exhausted_utc_day,
        next_probe_at = excluded.next_probe_at,
        updated_at = excluded.updated_at;
end;
$$;

create or replace function public.clear_portfolio_llm_quota_exhausted()
returns void
language sql
security definer
set search_path = pg_catalog, private
as $$
  update private.portfolio_llm_quota_state
  set exhausted_utc_day = null,
      next_probe_at = null,
      updated_at = now()
  where singleton = true;
$$;

revoke all on function public.claim_portfolio_llm_quota_probe() from public, anon, authenticated;
revoke all on function public.mark_portfolio_llm_quota_exhausted() from public, anon, authenticated;
revoke all on function public.clear_portfolio_llm_quota_exhausted() from public, anon, authenticated;
grant execute on function public.claim_portfolio_llm_quota_probe() to service_role;
grant execute on function public.mark_portfolio_llm_quota_exhausted() to service_role;
grant execute on function public.clear_portfolio_llm_quota_exhausted() to service_role;
