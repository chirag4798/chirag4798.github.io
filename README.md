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

The resume is available at `assets/files/Chirag_Shetty_Resume.pdf`. The local chat preview can provide this file when visitors ask for a resume or CV.

The chat is not yet connected to an LLM. [OmniRoute](https://github.com/ChrisCompton/omniroute) can route OpenAI-compatible requests to connected providers. A live public assistant needs a reachable OmniRoute deployment and a server-side proxy such as a Supabase Edge Function. Keep provider credentials and gateway keys out of browser code.
