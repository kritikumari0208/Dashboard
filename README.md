# Dashboard

An admin dashboard built with Next.js. It uses Material UI for components and styling, available in the project. The app demonstrates a small dashboard layout including charts, data tables, filters and settings.

**Repository:** `kritikumari0208/Dashboard`

**Tech stack**
- **Framework:** Next.js (App Router)
- **UI:** React, @mui/material (Material UI)
- **Language:** TypeScript
- **Other:** @mui/x-charts, @mui/x-data-grid

## Requirements
- Node.js >= 20.9.0

## Quick start

Install dependencies and run the dev server:
```bash
# with npm
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Available scripts
- `dev` - Start the Next.js dev server (`next dev`)
- `build` - Build for production (`next build`)
- `start` - Start the Next.js production server (`next start`)
- `lint` - Run ESLint

## Project structure (important files)
- `app/` – Next.js App Router entry. Contains `layout.tsx` and feature routes:
  - `app/reports/page.tsx` — Reports view
  - `app/users/page.tsx` — Users view
  - `app/settings/page.tsx` — Settings view
- `components/` – Reusable UI components: `Header.tsx`, `Sidebar.tsx`, `Charts.tsx`, `DataTable.tsx`, `Filters.tsx`, `SummaryCards.tsx`, `ThemeRegistry.tsx`.
- `context/` – `DashboardContext.tsx` for shared app state.
- `data/` – `mockData.ts` contains seed/mock data used in the UI.
- `public/` – Static assets.
- `package.json` – Scripts and dependencies.

## Node version
This repository requires Node >= 20.9.0. A `.nvmrc` file is provided so tools like `nvm` or `Volta` can pin the correct Node version. If you see an error like:

```
You are using Node.js 18.20.8. For Next.js, Node.js version ">=20.9.0" is required.
```

then install and switch to Node 20.9.0 as shown above.

## Troubleshooting
- If the dev server fails to start, confirm `node -v` matches the required version.
- If dependencies fail, try removing `node_modules` and reinstalling with `npm install`.

If you want, I can also:
- add a short `CONTRIBUTING.md` and a default `LICENSE` file,
- add CI instructions (GitHub Actions) to build and lint on push,
- or refine this README with screenshots and example data flows.
