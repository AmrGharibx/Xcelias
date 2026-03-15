# Xcelias

Xcelias is the consolidated academy platform workspace. The production application lives in `System Before Prompting V2/avaria`, while the other top-level folders remain as source workspaces that were audited and mined during the consolidation process.

## Production App

- App directory: `System Before Prompting V2/avaria`
- Framework: Next.js 16 + React 19 + TypeScript
- Public flagship route: `/`
- Protected operations route: `/command-center`
- Integrated module routes:
  - `/learning-hub`
  - `/market-intelligence`
  - `/report-studio`

## Repository Layout

- `System Before Prompting V2/avaria` — main Xcelias app to deploy
- `Activites ( WorkSpace )` — legacy academy activity source
- `Content ( WorkSpace )` — legacy learning content source
- `Report Generation ( WorkSpace )` — legacy report-generation source
- `Website ( WorkSpace )` — legacy market-intelligence source
- `ULTIMATE_XCELIAS_MASTER_PROMPT.md` — original consolidation brief

## Local Development

```powershell
Set-Location 'System Before Prompting V2/avaria'
npm install
npm run dev
```

The app uses a local SQLite file for development by default. For production deployment, use a remote libSQL-compatible database.

## Deployment

Deploy the app from the `System Before Prompting V2/avaria` directory. For a full GitHub, Vercel, and domain connection flow, see `DEPLOYMENT.md`.