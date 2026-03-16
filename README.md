# PortfolioNEXT

A personal developer portfolio built with Next.js 14, React 18, Tailwind CSS, and Framer Motion.

This project showcases profile information, projects, skills, education, experience, and achievements with smooth page transitions, responsive layouts, and light/dark theme support.

## Highlights

- Next.js App Router architecture
- Responsive layout across desktop, tablet, and mobile
- Animated page transitions and UI interactions with Framer Motion
- Light/Dark mode with persisted user preference
- Dedicated pages for Home, About, and Projects
- Optimized image handling with Next.js Image
- Vercel Speed Insights integration

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- Framer Motion
- React Icons
- Vercel Speed Insights

## Project Structure

- `src/app/layout.js`: Root layout, global navigation/footer, theme bootstrap script, global metadata
- `src/app/page.js`: Home page (hero section, intro, resume/contact CTA)
- `src/app/about/page.js`: About page (biography, stats, skills, experience, education, achievements)
- `src/app/projects/page.js`: Projects showcase (featured + grid items)
- `src/components`: Reusable UI components
- `src/components/hooks/useThemeSwitcher.js`: Theme toggle state and persistence
- `src/app/globals.css`: Global Tailwind imports
- `tailwind.config.js`: Theme extensions, custom colors, breakpoints, animation utilities
- `public/images`: Profile, project, article, and icon assets
- `public/pdfs`: Resume PDF

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev
    ```

3. Open your browser at `http://localhost:3000`.

## Available Scripts

- `npm run dev`: Run in development mode
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run lint checks

## Configuration Notes

- Path alias is configured in `jsconfig.json` using `@/*` for `src`
- Dark mode strategy is class-based in `tailwind.config.js`
- Default metadata is defined in `src/app/layout.js`
- Route-specific metadata is defined in:
    - `src/app/about/layout.js`
    - `src/app/projects/layout.js`

## Customization Guide

- Update hero content on Home: `src/app/page.js`
- Update biography and stats on About: `src/app/about/page.js`
- Update projects and links: `src/app/projects/page.js`
- Update social links and navigation: `src/components/NavBar.js`
- Update footer content/contact: `src/components/Footer.js`
- Update color palette and breakpoints: `tailwind.config.js`

## Deployment

This project is ready for Vercel deployment with default Next.js settings.

1. Push the repository to GitHub
2. Import the project in Vercel
3. Vercel will detect Next.js automatically
4. Build command: `npm run build`
5. Output is handled by the Next.js runtime

Optional local production test:

1. `npm run build`
2. `npm run start`

## Contact

- Portfolio Owner: Abhishek Kumar
- Email: abhishek.web.kr@gmail.com
- LinkedIn: https://www.linkedin.com/in/abhi-web-kr/
- GitHub: https://github.com/abhi-web-kr
