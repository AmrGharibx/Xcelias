# Xcelias — Unified Academy Platform

Xcelias is the consolidated academy platform that combines operations, learning, reporting, and market intelligence into one connected system. The production app keeps the academy command center while adding public brand, remediation surfaces, market-study flows, and report orchestration.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons
- Prisma
- SQLite for local development
- libSQL/Turso support for production deployment

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3005](http://localhost:3005).

For environment setup, copy `.env.example` into `.env` and adjust values as needed.

## Project Structure

- app/page.tsx — public Xcelias landing experience
- app/command-center/page.tsx — protected academy operations dashboard
- app/learning-hub/page.tsx — integrated learning and remediation surface
- app/market-intelligence/page.tsx — integrated market context surface
- app/report-studio/page.tsx — integrated reporting surface
- app/layout.tsx — metadata, providers, command palette, and global visuals
- lib/xcelias-data.ts — shared cross-module data and recommendation logic
- lib/db.ts — environment-aware Prisma adapter setup

## Deployment Notes

- Local development uses `DATABASE_URL=file:./dev.db`.
- Production should use a remote libSQL-compatible database and set `JWT_SECRET`.
- If deploying with Vercel from the repository root, set the project Root Directory to `System Before Prompting V2/avaria`.
