# Xcelias Deployment

This repository should be pushed as a single root git repository, but the production app is the Next.js project in `xcelias-app`.

## 1. GitHub Remote

Repository URL:

```text
https://github.com/AmrGharibx/Xcelias.git
```

If the repo is not initialized yet:

```powershell
Set-Location 'J:\Excelias'
git init
git branch -M main
git remote add origin https://github.com/AmrGharibx/Xcelias.git
```

If the repo already exists locally:

```powershell
Set-Location 'J:\Excelias'
git remote set-url origin https://github.com/AmrGharibx/Xcelias.git
```

## 2. Production App Settings

When importing into Vercel:

- Framework preset: Next.js
- Root Directory: `xcelias-app`
- Install command: `npm install`
- Build command: `npm run build`

## 3. Required Environment Variables

Set these in the Vercel project:

- `DATABASE_URL`
  - For local development: `file:./dev.db`
  - For production: your remote `libsql://...` or `https://...` libSQL database URL
- `JWT_SECRET`
  - Use a long random secret for production
- `TURSO_AUTH_TOKEN`
  - Required when using a secured Turso/libSQL database

Optional import variables:

- `NOTION_EXPORT_DIR`
- `NOTION_SOURCE`

## 4. Database Recommendation

Do not use the local SQLite file for production hosting. The app is now wired to support:

- local SQLite with `better-sqlite3` during development
- remote libSQL/Turso in production

That gives you persistent data behind `xcelias.com` instead of an ephemeral file on the host.

## 5. Domain Connection For xcelias.com

After the first successful deployment:

1. Open the Vercel project.
2. Go to `Settings > Domains`.
3. Add `xcelias.com`.
4. Add `www.xcelias.com` if you want both root and `www`.
5. In your Google-managed domain DNS, add the records Vercel provides.
6. Set `xcelias.com` as the primary domain in Vercel.

## 6. Push Flow

Once the repo is initialized and reviewed:

```powershell
Set-Location 'J:\Excelias'
git add .
git commit -m "Prepare Xcelias unified platform for GitHub and deployment"
git push -u origin main
```

## 7. Verification

Before pushing, verify locally:

```powershell
Set-Location 'J:\Excelias\System Before Prompting V2\avaria'
npm run build
```