# Components Documentation

## `<Button />`

- **Props:** `variant: 'neon' | 'ghost' | 'danger'`, `size`, `isLoading`
- **Description:** Handles its own hover/focus states using Tailwind ring utilities.

## `<Card />`

- **Props:** `glowOnHover: boolean`, `children`
- **Description:** A foundational container with the dark surface background and borders.

## `<GlitchText />`

- **Props:** `text: string`
- **Description:** Duplicates the text via `data-text` attributes and uses pseudo-elements (`::before`, `::after`) with CSS clip-paths to create a cyber glitch effect on hover or interval.

## `<Badge />`

- **Props:** `status: 'safe' | 'warn' | 'critical'`, `label`
- **Description:** Small status indicators for the Threat Feed.

## `<TerminalLine />`

- **Props:** `ip`, `action`, `status`
- **Description:** Sub-component specifically for the Live Threat Feed section.
