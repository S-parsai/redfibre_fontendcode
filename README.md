# Jadoo - Frontend Development Assignment

A responsive, animated travel website built from the provided Figma design.

**Live Preview:** _add your Vercel/Netlify link here_

## Tech Stack
- React 18 + Vite
- Tailwind CSS v4
- Framer Motion (page-load stagger, scroll reveals, hover/tap micro-interactions, SVG path drawing, carousel transitions)
- Fonts: Volkhov (headings) + Poppins (body)

## Setup
```bash
npm install
npm run dev       # start dev server
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Project Structure
```
public/images/        # images used by the site (swap with Figma exports)
src/
  data.js             # all text content + image paths in one place
  components/
    Navbar.jsx        # nav, login/sign up, language, animated mobile menu
    Hero.jsx          # staggered intro, drawn underline, floating planes
    Services.jsx      # "We Offer Best Services" cards
    Destinations.jsx  # top destination cards with image zoom on hover
    Steps.jsx         # "Book in 3 easy steps" + trip card with like button
    Testimonials.jsx  # carousel (dots + up/down arrows)
    Partners.jsx      # airline partner row
    Subscribe.jsx     # newsletter form with success state
    Footer.jsx
    Icons.jsx         # inline SVG icons
    Reveal.jsx        # reusable scroll-reveal wrapper
  index.css           # Tailwind import + theme colors/fonts
```

## Implementation Notes
- **Responsive:** mobile-first Tailwind breakpoints; grids collapse from 4 -> 2 -> 1 columns, hamburger menu on small screens. No horizontal scroll on mobile/tablet/desktop.
- **Animations:** Framer Motion, using transform/opacity only; scroll animations run once. `prefers-reduced-motion` is respected.
- **Accessibility:** semantic HTML (`header`, `nav`, `main`, `section`, `footer`), skip link, labelled form input, visible focus states, aria labels on icon buttons, keyboard-operable carousel and menu.
- **Performance:** lightweight SVG images, lazy-loaded below-the-fold images, fonts preconnected, ~91 kB gzipped JS.

## Incomplete / Future Improvements
- Hero, destination and Greece images are placeholders; replace with the final optimized photos (WebP/AVIF) exported from Figma.
- Partner logos are text wordmarks; swap with the logo assets.
- Newsletter form is front-end only (no backend yet).
- With more time: add page-level route transitions, autoplay for the testimonials, and unit/e2e tests.
