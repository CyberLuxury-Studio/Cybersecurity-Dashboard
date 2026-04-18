# Prompt for Generating the Cybersecurity Dashboard Prototype

Use the following detailed prompt in your preferred AI coding assistant (like v0, Cursor, ChatGPT, or Claude) to generate the initial prototype for the frontend of the Cybersecurity Dashboard landing page.

***

**Copy and paste the text below into your AI tool:**

```markdown
You are an expert Next.js developer and UI/UX designer. I need you to build a single-page prototype of a professional Cybersecurity Dashboard landing page intended for sale on UI8.

### Core Requirements:
- **Framework:** Next.js (App Router), React, TypeScript.
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion (for scroll-triggered fade-ups and stagger effects).
- **Aesthetic:** Cyberpunk / Threat Detection theme. Deep black/obsidian backgrounds with Matrix-style neon green accents (`#00FF41`).
- **Typography:** Use a clean sans-serif (like Geist or Inter) for general readability, and a monospace font (like JetBrains Mono or Fira Code) for numbers, badges, and threat data.

### Global Styles & Theme:
- Set the global background to a very dark, near-black color (e.g., `#050A05`).
- Define Tailwind utility colors for:
  - `neon-primary`: `#00FF41`
  - `threat-high`: `#FF003C` (red)
  - `threat-warn`: `#FFB000` (yellow)
- Implement a subtle CRT scanline texture or radial gradient background overlay to enhance the cyber feel.
- Ensure all components have a dark mode aesthetic with high-contrast text.

### Page Sections (Build these top-to-bottom on a single page):

**1. Navbar:**
- Sticky positioning with a glassmorphism/blur effect.
- Left: Logo (text "CYBER_DASH" in monospace).
- Center: Navigation links (Features, Feed, Integrations, Pricing).
- Right: A "Request Demo" button with a neon green border and hover glow effect.

**2. Hero Section:**
- A 50/50 split layout.
- Left side: High-impact headline ("Next-Gen Threat Detection. Zero Compromise.") using a "glitch" text effect or bold typography. Include subtext and two call-to-action buttons (Primary: Solid neon, Secondary: Ghost with neon border).
- Right side: Create a placeholder container for a 3D Spline scene. Inside this container, render a CSS-only spinning wireframe circle or a placeholder graphic to represent a rotating wireframe globe.

**3. Features Grid:**
- A 3-column grid of cards.
- Each card should have a dark surface background (`#0A110A`), a subtle border (`border-neon-primary/20`), and a glowing hover effect (`hover:shadow-[0_0_15px_rgba(0,255,65,0.2)]`).
- Include a small icon (SVG), a title, and a brief description for features like "Real-time Monitoring", "AI Threat Analysis", and "Zero-Trust Architecture".

**4. Live Threat Feed:**
- A section styled like a terminal window.
- Black background, neon green border.
- Content: An auto-scrolling list of mock threat data. Use monospace font. Columns should include: Timestamp, Source IP, Threat Level (use color-coded badges: Safe, Warning, Critical), and Action Taken.

**5. Integrations Marquee:**
- A horizontal scrolling marquee displaying text-based logos or simple SVG icons for partners (e.g., AWS, Cloudflare, Datadog). Style them in monochrome green.

**6. Pricing:**
- 3 tiers (Starter, Pro, Enterprise).
- The middle "Pro" tier should be visually highlighted (slightly larger, stronger neon glow, perhaps a "Most Popular" badge).
- Include feature checklists with green checkmark icons.

**7. Call to Action (CTA) & Footer:**
- CTA: Centered block, bold typography urging the user to secure their infrastructure. Heavy use of gradients.
- Footer: Simple 4-column layout with links, and a terminal-style newsletter input (`> enter email_`).

### Technical Instructions:
- Provide all the necessary code in one or a few easily copiable blocks. If splitting files, provide `app/page.tsx`, `tailwind.config.js` (with custom colors/animations), and a component file for the complex sections like the Threat Feed.
- Ensure the layout is fully responsive (mobile-first approach).
- Include basic Framer Motion `<motion.div>` wrappers for scroll animations (e.g., `whileInView={{ opacity: 1, y: 0 }}`).
```