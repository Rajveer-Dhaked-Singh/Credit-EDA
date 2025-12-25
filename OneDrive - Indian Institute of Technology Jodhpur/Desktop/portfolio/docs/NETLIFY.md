# Deploying this Next.js site on Netlify

This repo includes a `netlify.toml` and an optional GitHub Actions workflow to help enable preview builds on PRs.

## Quick manual setup (recommended)
1. Sign in at https://app.netlify.com and click **Add new site > Import from Git**.
2. Select the repository `Rajveer-Dhaked-Singh/Credit-EDA` and choose the branch `feature/website-tailwind-accessibility` or `main`.
3. Set the build command to: `npm run build` and the publish directory to: `.next` (the Netlify Next.js plugin will run during build).
4. Under **Site settings > Build & deploy > Environment**, add the following environment variable:
   - `NEXT_PUBLIC_FORM_ENDPOINT` — the endpoint your contact form posts to (e.g. Formspree or your chosen service)
5. Trigger a deploy and open the preview URL to verify everything works.

## Automated deploy (optional)
- If you want automated deployments from GitHub via Netlify CLI in Actions, add the following repository secrets:
  - `NETLIFY_AUTH_TOKEN` (your Netlify personal access token)
  - `NETLIFY_SITE_ID` (the Netlify site ID for the project)

After adding those secrets, the GitHub Action in `.github/workflows/netlify-deploy.yml` will be able to deploy previews and production builds.

## Notes
- The site uses `@netlify/plugin-nextjs` (configured in `netlify.toml`). Netlify handles most Next.js features, but if you rely on advanced features (image optimization on-edge, etc.) double-check plugin docs.
- If the contact form requires a server-side secret or verification, do not store those in client-exposed `NEXT_PUBLIC_*` variables. Instead, configure them in Netlify server-side functions or environment secrets.
