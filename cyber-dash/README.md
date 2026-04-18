# Cybersecurity Dashboard: Dark UI Template

Welcome to the **Cybersecurity Dashboard** template! This is a production-ready, highly-animated Next.js 15 landing page designed with a deep cyberpunk/threat-detection aesthetic. It is built using the App Router, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

To get the project running locally, follow these steps:

1.  **Install Dependencies:**
    Make sure you have Node.js installed, then run:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

3.  **View the App:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Architecture

This project uses the **Next.js App Router** structure.

*   **`src/app/`**: Contains the main page (`page.tsx`), root layout (`layout.tsx`), and global styles (`globals.css`).
*   **`components/sections/`**: Contains the major layout blocks of the landing page (e.g., `Hero.tsx`, `ThreatFeed.tsx`, `Pricing.tsx`).
*   **`components/layout/`**: Contains global layout wrappers like the `Navbar.tsx` and `Footer.tsx`.
*   **`lib/`**: Utility functions (`utils.ts`) and Framer Motion animation variants (`variants.ts`).
*   **`docs/`**: Developer documentation detailing component usage and animations.

---

## 🎨 Customization Guide

### Customizing the Color Palette

The entire theme is driven by CSS variables located in `src/app/globals.css`. We use Tailwind v4 CSS variables.

To change the primary "neon green" to a different color (like "cyan" or "magenta"), simply update the following variables under `@theme`:

```css
@theme {
  /* Change the primary green to your desired color */
  --color-primary: #00FF41;
  --color-primary-container: #00FF41;
  /* ... other variables ... */
}
```

The system automatically uses these variables for glows, borders, and text accents.

### Updating the Spline Scene (3D Hero)

Currently, the Hero section uses a CSS-only spinning wireframe globe as a placeholder. To integrate a real 3D Spline scene:

1.  Export your scene from Spline.
2.  Install the Spline runtime: `npm install @splinetool/react-spline`
3.  In `src/app/page.tsx` (or extract to a `SplineViewer.tsx` component), replace the `.wireframe-globe` div with:
    ```tsx
    import Spline from '@splinetool/react-spline';

    // Inside your component:
    <Spline scene="https://prod.spline.design/YOUR-SCENE-URL/scene.splinecode" />
    ```
    *Tip: For better performance, load the Spline component dynamically using `next/dynamic` with `ssr: false`.*

---

## 📹 Setup & Customization Video

*(Recommendation: Add a link here to a 3-minute Loom video demonstrating the setup process and how to change the primary color.)*

[Watch Setup Video Guide here] -> `https://link-to-your-video.com`

---

## 📝 Support

If you encounter any issues or have questions regarding this template, please refer to the files in the `/docs` folder for detailed component and animation usage.
