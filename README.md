# ByteCoach — React & Next.js Academy

Your personal AI-powered academy for becoming a job-ready React & Next.js developer.
Teacher, mentor, and study buddy — with a modern dark UI.

## What's inside

| Section | What it does |
| --- | --- |
| **Dashboard** | Progress ring, job-ready path, full curriculum roadmap |
| **Learn** | 12 modules · 57 lessons — web basics → React → hooks → advanced React → state → styling → Next.js → TypeScript → job readiness. Every lesson in plain language with code examples and key takeaways |
| **AI Tutor** | Chat mentor that answers in layman terms. Works offline from a built-in knowledge base; add your own OpenAI-compatible API key for full AI answers |
| **Quiz** | 48 questions across all modules with instant explanations; best scores saved |
| **Interview Prep** | 30 real interview questions with model answers (React, Next.js, JavaScript, behavioral) |
| **Resume Builder** | Live-preview resume editor with React/Next-tailored bullet formulas, skill bank, and Print / Save-as-PDF |

Progress, quiz scores, chat history, and resume content are stored locally in your browser — no account, no database.

## Run it on your machine (Windows)

Requirements: **Node.js 18.17+ (or 20+)** — install LTS from https://nodejs.org

1. Unzip this folder anywhere, e.g. `C:\apps\reactnext-academy`
2. Open **Terminal** (or VS Code's terminal) in that folder
3. Install dependencies (first run only — takes a minute):

   ```powershell
   npm install
   ```

4. Start the app:

   ```powershell
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser. That's it.

Other commands:

```powershell
npm run build   # production build
npm start       # serve the production build on http://localhost:3000
```

### Optional: enable full AI answers in the Tutor

The AI Tutor works immediately without any key (built-in knowledge base). To unlock
deeper, unlimited answers:

1. Open the **AI Tutor** page → **Settings**
2. Paste an API key from any OpenAI-compatible provider, e.g. OpenAI
   (default base URL `https://api.openai.com/v1`, model `gpt-4o-mini`), or a local
   model via Ollama (`http://localhost:11434/v1`)
3. The key is stored only in your browser's localStorage and calls go directly from
   your browser to the provider — the app never sees or proxies it

## Tech stack

- Next.js 14 (App Router, statically generated pages)
- React 18 + TypeScript
- Tailwind CSS
- No backend, no database — progress lives in localStorage
