# AFAQYOMI Creative Studio — Deployment Guide

## Project contents
This is the complete AFAQYOMI website workspace. The deployable frontend is the Vite/React app at `artifacts/afaqyomi-studio`. Portfolio media is stored in `artifacts/afaqyomi-studio/public/media`.

The project includes the current catalog entries and supplied media for:
- Music mixing and mastering
- AI music videos
- Jewelry design and CAD modeling
- Google Knowledge Panel portfolio
- Website development
- Advertising videos
- Documentary videos

Contact details are configured as:
- Email: afaqyomi@afaqyomi.com
- Phone / WhatsApp: +18542062808

## Before deployment
A production build and browser QA have not been run in this environment. Install dependencies and verify the build before pointing the domain at the site.

## Recommended deployment: GitHub + Vercel

### 1. Extract the ZIP
Extract the entire `AFAQYOMI-FINAL-WEBSITE-PROJECT.zip` folder on your computer. Keep the folder structure intact.

### 2. Upload the project to GitHub
1. Sign in to GitHub and create a new private repository, e.g. `afaqyomi-website`.
2. Upload the *contents* of the extracted project folder (not the ZIP itself).
3. Commit the files to the repository's `main` branch.

If using Git locally, open a terminal in the extracted project folder and run:
```bash
git init
git add .
git commit -m "Prepare AFAQYOMI website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/afaqyomi-website.git
git push -u origin main
```

### 3. Import into Vercel
1. Sign in at https://vercel.com and choose **Add New → Project**.
2. Import the `afaqyomi-website` GitHub repository.
3. Keep the project root directory at the repository root (do not select `artifacts/afaqyomi-studio`).
4. Use these settings:
   - Framework preset: Vite
   - Install command: `pnpm install --no-frozen-lockfile`
   - Build command: `pnpm --filter @workspace/afaqyomi-studio build`
   - Output directory: `artifacts/afaqyomi-studio/dist/public`
5. Deploy. If the build fails, copy the complete Vercel build log and share it so the issue can be diagnosed.

The included `vercel.json` already records these build/output and SPA rewrite settings.

### 4. Connect afaqyomi.com in Vercel
1. In the Vercel project, open **Settings → Domains**.
2. Add `afaqyomi.com` and `www.afaqyomi.com`.
3. Vercel will show the DNS records required for your project. Use the exact values shown there if they differ from the examples below.

Typical Namecheap setup:
1. Sign in to Namecheap → **Domain List** → **Manage** next to `afaqyomi.com`.
2. Open **Advanced DNS**.
3. Under **Host Records**, add/update:
   - A Record — Host `@` — Value `76.76.21.21`
   - CNAME Record — Host `www` — Value `cname.vercel-dns.com`
4. Remove conflicting old website A/AAAA/CNAME or URL Redirect records for `@` and `www` only when they conflict with Vercel's instructions.
5. **Do not delete MX, SPF, DKIM, DMARC or other email-related TXT records**; they may be needed for your business email.
6. Return to Vercel and wait for domain verification and HTTPS certificate issuance.

DNS values can change; Vercel's domain screen is authoritative for your project. DNS propagation may take some time.

## Important notes
- The domain is not connected or deployed by this ZIP. You must authorize GitHub/Vercel and update Namecheap DNS.
- Do not publish private API keys or secrets in the repository.
- The current frontend is a static Vite site. Contact-form persistence, admin login, server-side uploads and email delivery should be separately implemented and tested before relying on them for production.
- Large video files are currently stored in the site’s public media folder. They increase deployment size and bandwidth usage; consider dedicated video hosting/CDN as traffic grows.
