# Xcelias

Xcelias is the consolidated academy platform workspace. The production application now lives in `xcelias-app` for deployment purposes, while `System Before Prompting V2/avaria` remains the original source workspace that was audited and consolidated.

## Production App

- App directory: `xcelias-app`
- Framework: Next.js 16 + React 19 + TypeScript
- Public flagship route: `/`
- Protected operations route: `/command-center`
- Integrated module routes:
  - `/learning-hub`
  - `/market-intelligence`
  - `/report-studio`

## Repository Layout

- `xcelias-app` — main Xcelias app to deploy
- `System Before Prompting V2/avaria` — original implementation workspace retained for reference
- `Activites ( WorkSpace )` — legacy academy activity source
- `Content ( WorkSpace )` — legacy learning content source
- `Report Generation ( WorkSpace )` — legacy report-generation source
- `Website ( WorkSpace )` — legacy market-intelligence source
- `ULTIMATE_XCELIAS_MASTER_PROMPT.md` — original consolidation brief

## Local Development

```powershell
Set-Location 'xcelias-app'
npm install
npm run dev
```

The app uses a local SQLite file for development by default. For production deployment, use a remote libSQL-compatible database.

## Deployment

Deploy the app from the `xcelias-app` directory. For a full GitHub, Vercel, and domain connection flow, see `DEPLOYMENT.md`.