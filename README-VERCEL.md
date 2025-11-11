# Deploy to Vercel

This Stormy Picks landing page is ready to deploy on Vercel!

## Quick Deploy

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push this code to your repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration from `vercel.json`
   - Click "Deploy"

## What's Configured

- ✅ Build command: `vite build`
- ✅ Output directory: `dist`
- ✅ SPA routing configured (all routes redirect to index.html)
- ✅ Server files excluded via `.vercelignore`

## Environment Variables

No environment variables are needed for this static site. All Whop subscription links are hardcoded.

## Custom Domain

After deploying, you can add a custom domain in your Vercel project settings.

## Notes

- This is a static frontend-only deployment
- The backend server files are ignored (not needed for this landing page)
- All data is static - no database required
