# Animations Documentation

## Framer Motion Variants

Variants are stored in `lib/variants.ts` to keep components clean.

- `staggerContainer`: `{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }`
- `fadeUp`: `{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring' } } }`

## Scroll-Triggered Animations

Every major section wrapper uses `<motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>`.

## Adjusting Animations

To adjust the animation speed or type, modify the `transition` object within the variants in `lib/variants.ts`.
