# Crevesha Website

Modern, minimalistic marketing site for **Crevesha** — general supplies and tender consultancy in Nairobi, Kenya.

Built with **Next.js 14** (App Router), **Tailwind CSS**, **Framer Motion**, **React Hook Form**, and **Zod**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | [Formspree](https://formspree.io) form ID for contact submissions |

Without Formspree, the form runs in demo mode (logs to console, shows success).

## Logo

Replace `public/logo.svg` with your official logo exported from [Canva](https://canva.link/dork5ogsnsohrni):

1. Download PNG or SVG from Canva
2. Save as `public/logo.png` (or `.svg`)
3. Update `src/components/Logo.tsx` if the filename changes

Recommended size: ~160×40px (header), transparent background.

## Project Structure

```
src/
├── app/              # Layout, page, globals, sitemap
├── components/
│   ├── sections/   # Hero, About, Goods, Contact, etc.
│   ├── ui/         # Button, Accordion, FadeIn, Carousel
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
└── lib/
    ├── content.ts  # All site copy (edit here)
    └── utils.ts
```

## Customization

- **Content**: Edit `src/lib/content.ts`
- **Brand colors**: `tailwind.config.ts` → `brand.primary`, `brand.secondary`
- **Phone number**: Update `siteConfig.phone` in `content.ts`

## Build & Deploy (Vercel)

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add `NEXT_PUBLIC_FORMSPREE_ID` in Project → Settings → Environment Variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Deploy to Netlify

```bash
npm run build
```

Publish directory: `.next` is handled by Netlify’s Next.js runtime — connect the repo and set build command to `npm run build`.

## Features

- Responsive, mobile-first layout
- Smooth scroll navigation
- Framer Motion fade-in and hover animations
- Contact form with Zod validation
- SEO metadata, Open Graph, sitemap, robots.txt
- WCAG-focused contrast, skip link, ARIA on interactive components
- Respects `prefers-reduced-motion`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | ESLint |

## License

Private — Crevesha © 2026. All Rights Reserved.
