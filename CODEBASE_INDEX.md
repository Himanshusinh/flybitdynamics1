# Codebase Index

A concise map of the repository: architecture, routing, components, server endpoints, and how to run.

## Overview
- Frontend: Vite + React + TypeScript + Tailwind + shadcn-ui
- Routing: `react-router-dom`
- Data/async: `@tanstack/react-query`
- Design system: Radix UI primitives + shadcn wrappers in `src/components/ui`
- Backend: Minimal Express server for contact form email delivery in `server/`

## Top-level layout
```
.
├─ src/
│  ├─ pages/                # Route components
│  ├─ components/
│  │  ├─ ui/               # Reusable UI primitives (shadcn-style)
│  │  └─ layout/           # App layout pieces (e.g., footer)
│  ├─ hooks/                # Custom hooks
│  ├─ lib/                  # Utilities and integrations
│  ├─ assets/               # Images and media
│  ├─ App.tsx               # Router and app providers
│  └─ main.tsx              # Entry point
├─ server/                  # Express email backend
├─ index.html               # Vite HTML entry
├─ tailwind.config.ts       # Tailwind config
├─ vite.config.ts           # Vite config (alias @ → ./src, dev port 8080)
└─ vercel.json              # SPA rewrites for deployment
```

## Routing
Defined in `src/App.tsx`.

| Path | Component |
|------|-----------|
| `/` | `Home` |
| `/about` | `About` |
| `/services` | `Services` |
| `/projects` | `Projects` |
| `/our-projects` | `OurProjects` |
| `/project/:id` | `ProjectDetail` |
| `/technology` | `Technology` |
| `/faqs` | `FAQs` |
| `/contact` | `Contact` |
| `/blog` | `Blog` |
| `/blog/:id` | `BlogPost` |
| `/privacy` | `PrivacyPolicy` |
| `/terms` | `TermsOfService` |
| `*` | `NotFound` |

Providers used:
- `QueryClientProvider` (React Query)
- `TooltipProvider`
- `Toaster` and `Sonner` for notifications
- `Navigation` top bar and `Footer` in layout

## UI components
Located in `src/components/ui/` (shadcn/Radix style). Highlights include: `button`, `card`, `dialog`, `dropdown-menu`, `form`, `input`, `label`, `popover`, `select`, `sheet`, `table`, `tabs`, `toast`, `toaster`, `tooltip`, `navigation`, `pagination`, `sidebar`, `carousel`, `chart`, etc. Use `@` alias imports, e.g. `@/components/ui/button`.

## Custom hooks
- `use-mobile.tsx` — responsive/mobile helpers
- `use-toast.ts` — toast helpers

## Libraries and utils
- `src/lib/utils.ts` — `cn` helper (clsx + tailwind-merge)
- `src/lib/googleSheets.ts` — optional Google Sheets append API integration (requires `SPREADSHEET_ID`, `SHEET_NAME`, `GOOGLE_SHEETS_API_KEY`)

## Assets
Images and banners in `src/assets/` including page-specific subfolders (`Home/`, `services/`, `technology/`, etc.). Update `index.html` social images if you relocate assets.

## Styling
- Tailwind configured in `tailwind.config.ts` with extended theme, colors, fonts, animations, and class-based dark mode.
- Content paths include `./src/**/*.{ts,tsx}` and others.

## Backend (server/)
Express server for email delivery via Nodemailer.

Endpoints:
- `POST /api/contact` — Validates form input, sends email to business and confirmation email to client
- `GET /api/health` — Health check JSON
- `GET /api/test` — Simple connectivity test

Environment (`server/env.example`):
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
TO_EMAIL=info@flybitdynamics.com
PORT=3001
NODE_ENV=development
```

## Scripts
Frontend (`package.json`):
- `dev` — Vite dev server (port 8080 per `vite.config.ts`)
- `build` — Vite build
- `build:dev` — Development-mode build
- `preview` — Preview build
- `lint` — ESLint

Backend (`server/package.json`):
- `dev` — `nodemon server.js`
- `start` — `node server.js`

## Running locally
Frontend:
```
npm i
npm run dev
# App served at http://localhost:8080
```

Backend:
```
cd server
npm i
cp env.example .env
npm run dev
# Server at http://localhost:3001
```

If the frontend calls the backend, ensure CORS and the correct base URL are set where requests are made (e.g., in the Contact form page).

## Build and deployment
- SPA rewrites via `vercel.json` route all paths to `index.html`.
- For other hosts, configure SPA fallback similarly.

## Notable conventions
- Path alias `@` → `./src` (see `vite.config.ts`).
- Global providers live in `src/App.tsx`.
- Keep UI primitives reusable in `src/components/ui/` and page composition in `src/pages/`.

---
This file is a quick map; explore individual files for page content and UI details.
