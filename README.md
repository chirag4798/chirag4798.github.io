# Chirag Shetty — Portfolio Workspace

This portfolio uses a Codex-inspired chat workspace. Choose a section from the sidebar to see an overview or ask a question in the chat.

## Organizations

- `jio-fynd.md` — Impetus Fashion Design Platform and GenAI image delivery
- `adagrad-ai.md` — people analytics, real-time video, and edge ALPR
- `optisol.md` — power-pole inspection and ML workflows

## More

- `projects.md` — open-source work
- `articles.md` — technical articles
- `experience.md` — career timeline
- `toolkit.md` — tools and engineering strengths
- `resume.md` — downloadable PDF resume
- `contact.md` — ways to connect

The one-page resume is available at `assets/files/Chirag_Shetty_Resume_One_Page.pdf`. The chat provides this file when visitors ask for a resume or CV.

## Chat AI setup

Chat answers use a Supabase Edge Function that calls OpenRouter's `openrouter/free` model router. The OpenRouter key stays in Supabase secrets and is never sent to the browser. The function only requests the free-model router and does not accept model or provider choices from visitors. Its database-backed limiter allows at most 500 LLM requests per UTC day globally and 100 per IP per UTC day. Supabase Free includes 500,000 Edge Function invocations per month, and inactive free projects may be paused.

To connect accounts:

1. Create or use a Supabase project on the Free plan, link it with `supabase link --project-ref <project-ref>`, and apply the migrations with `supabase db push --linked`.
2. Add `OPENROUTER_API_KEY` and a random `PORTFOLIO_RATE_LIMIT_SALT` as Supabase Edge Function secrets. Never commit either secret. Requests are pinned to `openrouter/free`, whose listed prompt and completion prices are $0.
3. Deploy the function with `supabase functions deploy portfolio-chat --project-ref <project-ref>`.
4. Set the `portfolio-chat-endpoint` meta tag in `index.html` to `https://<project-ref>.supabase.co/functions/v1/portfolio-chat` and publish the site.

The endpoint accepts only the GitHub Pages origin and local preview origins on port 8123. If the site uses another custom domain or local port, add that exact origin to `allowedOrigins` in the Edge Function before deploying. The browser sends only the matched portfolio sections with each question; unrelated questions receive a standard portfolio-assistant response without an LLM request. CORS restricts browser access but is not authentication; the server-side daily request limits protect the provider quota. OpenRouter's Free plan does not include prompt caching, and `openrouter/free` can route to different providers, so the integration does not claim or rely on cache hits. If the endpoint is blank or unavailable, the site falls back to Gemini Nano where supported, then to the local portfolio guide.

See [OpenRouter free models and limits](https://openrouter.ai/collections/free-models) and [Supabase Edge Function pricing](https://supabase.com/docs/guides/platform/manage-your-usage/edge-function-invocations). Supabase Free projects are subject to [inactivity pauses](https://supabase.com/docs/guides/deployment/going-into-prod#availability).
