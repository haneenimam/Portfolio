Style Guide — Haneen Imam Portfolio

Fonts
- Inter (Google Fonts) — used for headings and body. Imported in client/global.css.

Color Palette (CSS variables in client/global.css)
- --background: 210 40% 98% (light) / 220 14% 6% (dark)
- --foreground: 218 14% 12% (light) / 210 40% 98% (dark)
- --primary: 214 35% 34% (muted blue)
- --accent: 142 24% 85% (light sage)
- --card: background for cards (white / near-black)
- --border: subtle border color

Usage
- Primary buttons: bg-primary, text-primary-foreground
- Cards: bg-card, rounded corners (var(--radius)), soft shadow
- Muted text: text-muted-foreground

Spacing & Layout
- Container max-width: 6xl with 2rem padding
- Sections: vertical padding 4-6rem (py-16 / md:py-24)
- Navbar height: 4rem (h-16)

Animations
- fade-in-up: used on section headings and items for gentle entrance
- subtle hover scale on project images and elevated shadow on hover

Icons
- lucide-react used for UI icons
- SimpleIcons CDN used for tech brand images in Skills

Accessibility
- Theme toggle saves preference in localStorage and applies immediately
- Buttons and links include focus styles and accessible labels

How to customize
- Change primary/accent colors by editing client/global.css variables (use HSL format)
- Update spacing by editing Tailwind utility classes on components

Export
- The codebase is standard React + Vite + Tailwind. Build with `pnpm build` and deploy to Netlify/Vercel.
