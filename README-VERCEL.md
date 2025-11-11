# Deploy Stormy Picks to Vercel

## ✅ Quick Deploy Steps

### 1. Push to GitHub (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Stormy Picks landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Vercel

**Option A: Via Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will detect the configuration automatically
5. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel
```

## 🛠 Configuration

The project uses a special Vercel-optimized config:

- **Build Config**: `vite.config.vercel.ts` (removes Replit-specific plugins)
- **Build Command**: `vite build --config vite.config.vercel.ts`
- **Output Directory**: `dist`
- **Routing**: SPA mode (all routes redirect to index.html)

## 🚫 What's Excluded

The `.vercelignore` file excludes:
- Backend server files (not needed)
- Replit configuration
- Development files

## 📝 No Environment Variables Needed

All subscription links are hardcoded:
- Weekly: Whop link embedded
- Monthly: Whop link embedded  
- Yearly: Whop link embedded

## 🎨 Features Included

✅ Responsive mobile-first design
✅ Auto-scrolling testimonials
✅ Performance metrics
✅ Pricing tiers
✅ Discord connection guide
✅ Glassmorphism effects
✅ Floating bubble animations

## 🔧 Troubleshooting

**Build fails?**
- Make sure all files are committed to Git
- Check that `vite.config.vercel.ts` exists
- Verify `vercel.json` is in the root directory

**404 on routes?**
- Vercel.json has rewrites configured for SPA routing
- `/discord-guide` should work automatically

**Assets not loading?**
- All assets are in `attached_assets/` and properly aliased
- Build process handles asset paths automatically
