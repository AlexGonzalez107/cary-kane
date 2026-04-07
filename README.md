# Cary Kane PLLC Website

Next.js App Router + TypeScript site scaffold for Cary Kane PLLC.

## Hosting on Vercel

This repo is now Vercel-ready.

### 1) Push this branch to GitHub

```bash
git push origin <your-branch>
```

### 2) Import the repository in Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Select your GitHub repo.
3. Keep framework preset as **Next.js**.
4. Build command: `next build`.
5. Output directory: leave empty (default for Next.js).
6. Click **Deploy**.

### 3) Production domain

After deployment:

1. Open project → **Settings** → **Domains**.
2. Add your firm domain.
3. Configure DNS records as shown by Vercel.

### 4) Redeploy flow

Every push to your production branch (commonly `main`) triggers a new deployment.
