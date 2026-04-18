# Project Plan: Cybersecurity Dashboard Landing Page

**Tech Stack:** Next.js 16.2.4 (App Router), Tailwind CSS, Framer Motion, Spline, TypeScript
**Theme:** Cyberpunk / Threat Detection (Matrix-style neon green and black)
**Typography:** Geist (Sans) + JetBrains Mono (Monospace)

---

## 1. Project Structure
Using the Next.js App Router convention, the project will be organized to separate concerns, making it easy for UI8 buyers to understand and customize.

```text
cyber-dash/
├── app/
│   ├── (landing)/
│   │   ├── page.tsx            # Main landing page
│   │   └── layout.tsx          # Wrapper for Navbar/Footer
│   ├── layout.tsx              # Root layout (Fonts, Providers, Global CSS)
│   ├── globals.css             # Tailwind imports & CSS variables
│   └── not-found.tsx           # Custom 404 with cyber aesthetic
├── components/
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── ThreatFeed.tsx      # Live Threat Feed
│   │   ├── Integrations.tsx
│   │   ├── Pricing.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── ui/                     # Reusable atomic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SplineViewer.tsx    # Lazy-loaded Spline wrapper
│   │   └── GlitchText.tsx      # Text with glitch effect
│   └── layout/
│       └── Navbar.tsx
├── lib/
│   ├── utils.ts                # Tailwind merge (clsx + twMerge)
│   ├── variants.ts             # Framer Motion animation variants
│   └── constants.ts            # Pricing data, feature lists, nav links
├── public/
│   ├── fonts/                  # Local font files if not using next/font
│   ├── images/                 # Fallback images, textures
│   └── models/                 # Spline export files (if local)
├── tailwind.config.ts          # Custom colors, glows, animations
├── tsconfig.json
└── package.json
```

---

## 2. Design System

### Color Palette (Matrix-Cyber Aesthetic)
*   **Backgrounds:**
    *   `bg-obsidian`: `#050A05` (Deep, near-black with a hint of green)
    *   `bg-surface`: `#0A110A` (Slightly lighter for cards/panels)
    *   `bg-surface-border`: `#152215` (For borders and dividers)
*   **Accents (Neon Greens):**
    *   `neon-primary`: `#00FF41` (The core "Matrix" green)
    *   `neon-muted`: `#008F11` (For secondary elements)
    *   `neon-glow`: `rgba(0, 255, 65, 0.2)` (For box-shadows and glows)
*   **Alerts/Threats:**
    *   `threat-high`: `#FF003C` (Cyberpunk red for critical alerts)
    *   `threat-warn`: `#FFB000` (Warning yellow)

### Typography
*   **Primary/Readability:** `Geist` (next/font/geist). Used for headings, body copy, and standard buttons.
*   **Data/Code/Threats:** `JetBrains Mono` (next/font/google). Used for numbers, live feed data, badges, and code snippets.

### Spacing & Effects
*   **Spacing:** Standard Tailwind 4pt grid (4, 8, 16, 24, 32, 48, 64, etc.).
*   **Glows:** Custom Tailwind box-shadow classes (`shadow-neon`, `shadow-threat`).
*   **Borders:** Heavy use of 1px borders with slight opacity (`border-neon-primary/20`).
*   **Textures:** CRT scanline overlay utility class applied globally via `globals.css`.

---

## 3. Section-by-Section Breakdown

### 1. Navbar
*   **Layout:** Sticky top, blurred background (`backdrop-blur-md`). Logo left, links center, "Request Demo" CTA right.
*   **Tailwind:** `fixed w-full z-50 bg-obsidian/80 border-b border-neon-primary/10`.
*   **Animations:** Slide down on mount.

### 2. Hero Section
*   **Layout:** 50/50 split on desktop. Left side: High-impact copy, GlitchText heading, dual CTA buttons. Right side: The embedded Spline rotating wireframe globe.
*   **Content:** "Next-Gen Threat Detection. Zero Compromise."
*   **Spline Usage:** A rotating 3D wireframe globe with green nodes representing servers/threats.
*   **Animations:** Staggered fade-up for text (`Framer Motion`).
*   **Tailwind:** `min-h-screen flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-glow/10 to-obsidian`.

### 3. Features (Grid)
*   **Layout:** 3-column grid (desktop) using cards.
*   **Design:** `Card` components with glowing borders on hover. Icons use `JetBrains Mono` symbols or minimal SVG paths.
*   **Animations:** `whileInView` staggered fade-up. Hover effect: Border opacity increases, slight negative Y translate.

### 4. Live Threat Feed (Dynamic Demo)
*   **Layout:** A terminal-like window centered on screen.
*   **Content:** Mock data scrolling up endlessly. IPs, Threat Levels, and Actions taken.
*   **Typography:** Exclusively `JetBrains Mono`.
*   **Animations:** Continuous vertical marquee loop using Framer Motion or CSS keyframes. Red/Yellow flashes for high threats.
*   **Tailwind:** `bg-black border border-neon-primary p-6 rounded-md shadow-neon`.

### 5. Integrations
*   **Layout:** Infinite horizontal marquee of partner logos (AWS, Cloudflare, Datadog, etc.) styled in monochrome green.
*   **Animations:** CSS-based seamless infinite horizontal scroll.

### 6. Pricing
*   **Layout:** 3-tier pricing cards. The middle card (Pro) is highlighted with a stronger neon glow and slightly scaled up.
*   **Content:** Features list with neon green checkmarks.
*   **Animations:** Hover state expands the glow effect.

### 7. CTA
*   **Layout:** Centered block with a loud, glitch-effect heading.
*   **Tailwind:** Heavy use of gradients and glows. `bg-neon-primary text-black font-bold`.

### 8. Footer
*   **Layout:** Standard 4-column link structure, newsletter signup with terminal-style input `> enter email_`.

---

## 4. Animation Plan (Framer Motion)

*   **Variants:** Stored in `lib/variants.ts` to keep components clean.
    *   `staggerContainer`: `{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }`
    *   `fadeUp`: `{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }`
    *   `glitch`: Keyframes manipulating `x` and `skew` for a split second to simulate a CRT glitch.
*   **Scroll-Triggered:** Every major section wrapper will use `<motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>`.

---

## 5. Spline Integration Plan

*   **Scene Setup:** Create a lightweight wireframe globe in Spline. Export as a React component. Keep polygon count low. Avoid heavy lighting calculations; use unlit/emission materials for the neon green glow.
*   **Component Wrapping:** Create `components/ui/SplineViewer.tsx`.
*   **Lazy Loading:** Use `next/dynamic` to dynamically import the Spline component with `ssr: false` so it only loads on the client.
*   **Fallback:** Provide a low-res image or a CSS-only spinning wireframe circle as the loading fallback to prevent layout shift and maintain aesthetic.

---

## 6. Component Architecture

*   **`<Button />`**: Props (`variant: 'neon' | 'ghost' | 'danger'`, `size`, `isLoading`). Handles its own hover/focus states using Tailwind ring utilities.
*   **`<Card />`**: Props (`glowOnHover: boolean`, `children`). A foundational container with the dark surface background and borders.
*   **`<GlitchText />`**: Props (`text: string`). Duplicates the text via `data-text` attributes and uses pseudo-elements (`::before`, `::after`) with CSS clip-paths to create a cyber glitch effect on hover or interval.
*   **`<Badge />`**: Props (`status: 'safe' | 'warn' | 'critical'`, `label`). Small status indicators for the Threat Feed.
*   **`<TerminalLine />`**: Props (`ip`, `action`, `status`). Sub-component specifically for the Live Threat Feed section.

---

## 7. Performance Strategy

*   **Spline Optimization:** As mentioned, lazy-loaded via `next/dynamic` with `ssr: false`.
*   **Code Splitting:** Next.js App Router handles route-level splitting, but complex client components (like the Threat Feed animations) will be marked with `"use client"`.
*   **Font Loading:** `next/font` will be used to self-host and pre-load Geist and JetBrains Mono, eliminating cumulative layout shift (CLS) and blocking external requests.
*   **Images/Assets:** Any raster images (if used) will pass through `next/image` with proper `sizes` attributes. The UI relies heavily on CSS for gradients/glows rather than images.

---

## 8. UI8 Packaging Checklist (No Figma)

Since design files are not included, the value relies entirely on the code quality, ease of use, and documentation.

*   [ ] **Codebase:** Cleaned, formatted (`npm run lint`, `prettier`), and stripped of `.git` history and `node_modules`.
*   [ ] **Comprehensive README.md:**
    *   Quick Start guide (`npm install`, `npm run dev`).
    *   Project architecture explanation.
    *   How to customize the color palette (Tailwind variables).
    *   How to update the Spline scene URL.
*   [ ] **Developer Documentation Folder (`/docs`):**
    *   `components.md`: Details props and usage for all UI components.
    *   `animations.md`: How to adjust Framer Motion variants.
*   [ ] **Setup Video/Loom Link:** A highly recommended addition. A 3-minute screen recording walking through the folder structure and how to change the primary neon color, included in the README.
*   [ ] **Demo Assets:** Ensure placeholder texts and dummy data (for the threat feed) are professional and typo-free.
*   [ ] **ZIP Archive:** Packaged nicely as `cyber-dashboard-nextjs-template.zip`.
