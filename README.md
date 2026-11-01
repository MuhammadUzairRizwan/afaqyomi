# AFAQYOMI Creative Studio

Public website and API workspace for AFAQYOMI — *Create. Design. Promote.*

The studio's services covered on the site: advertising and documentary video,
AI music videos, website development, jewelry design and CAD modeling, music
mixing and mastering, and Google Knowledge Panel work.

## Repository layout

This is a pnpm workspace monorepo.

| Path | Description |
| --- | --- |
| `artifacts/afaqyomi-studio` | **The deployable site.** Vite + React + Wouter + Tailwind CSS. |
| `artifacts/api-server` | Express 5 API server (health routes only so far). |
| `artifacts/mockup-sandbox` | Internal component/mockup preview sandbox. |
| `lib/api-spec` | OpenAPI specification and Orval codegen config. |
| `lib/api-client-react` | Generated React API client. |
| `lib/api-zod` | Generated Zod schemas and types. |
| `lib/db` | Drizzle ORM schema and database client. |
| `scripts` | Workspace utility scripts. |

Portfolio media (video and audio masters) lives in
`artifacts/afaqyomi-studio/public/media`.

## Content source of truth

Site content is data-driven. Edit these rather than hard-coding values in
components:

- `src/data/pricing.ts` — pricing categories and packages
- `src/data/services.ts` — service descriptions
- `src/data/projects.ts` — portfolio projects
- `src/data/faq.ts` — FAQ content
- `src/data/teamData.ts` — team profiles
- `src/data/siteConfig.ts` — brand and contact configuration
- `src/data/socialLinks.ts` — social profile links

All paths are relative to `artifacts/afaqyomi-studio`.

## Routes

`/` · `/about` · `/services` · `/pricing` · `/work` · `/work/:slug` ·
`/advertising-videos` · `/documentary-videos` · `/team` · `/team/:slug` ·
`/contact`

## Development

Requires Node.js 24 and pnpm 10.8.1.

```bash
pnpm install

pnpm dev          # run the public website
pnpm typecheck    # typecheck the website
pnpm build        # build the website
```

Per-package commands use filters, e.g.:

```bash
pnpm --filter @workspace/api-server run dev
```

> **Note:** `pnpm-workspace.yaml` excludes the Windows and macOS native
> binaries for esbuild, rollup, lightningcss and `@tailwindcss/oxide`.
> Installs and builds are expected to run on linux-x64, which is what the
> Vercel builders use. Building on a local Windows or macOS machine will fail
> until those overrides are relaxed.

## Deployment

The site deploys to Vercel from the repository root. `vercel.json` already
records the settings:

- Framework preset: Vite
- Install command: `pnpm install --no-frozen-lockfile`
- Build command: `pnpm --filter @workspace/afaqyomi-studio build`
- Output directory: `artifacts/afaqyomi-studio/dist/public`

Do not set the Vercel project root to `artifacts/afaqyomi-studio` — keep it at
the repository root so the workspace resolves.

See [DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md) for the full walkthrough,
including connecting the `afaqyomi.com` domain and the required DNS records.

## Status

The frontend is a static Vite site. Contact-form persistence, admin
authentication, server-side uploads and email delivery are a later phase and
are not yet implemented.

Large video and audio masters are currently served from the site's `public`
folder. They increase deployment size and bandwidth; consider moving them to
dedicated video hosting or a CDN as traffic grows.
