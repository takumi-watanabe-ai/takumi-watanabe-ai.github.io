# Portfolio - Takumi Watanabe

Personal portfolio website showcasing software engineering consulting experience.

## Structure

- **`/`** - Main portfolio (consulting focus)
- **`/ml`** - ML/Data Engineering portfolio

## Tech Stack

- **Astro 5** - Static site framework
- **Tailwind CSS** - Styling
- **Vercel** - Deployment platform
- **TypeScript** - Type safety

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Deployment

This project is configured for GitHub Pages deployment with:
- Static site generation
- Automated deployment via GitHub Actions
- Deployed to: https://takumi-watanabe-ai.github.io

The site automatically deploys when you push to the `main` branch.

### First-time setup:
1. Create a repository named `takumi-watanabe-ai.github.io` on GitHub
2. Push this code to the repository
3. Go to repository Settings → Pages
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The site will deploy automatically on the next push

## Content Management

Edit portfolio data in:
- `/src/data/portfolio-consulting.ts` - Main portfolio content
- `/src/data/portfolio-ml.ts` - ML portfolio content

Both files share the same template structure defined in `/src/components/PortfolioTemplate.astro`.
