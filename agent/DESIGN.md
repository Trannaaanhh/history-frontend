---
version: alpha
name: Dai Viet Su Learning Platform
description: A strict light-mode design system for a Vietnamese high-school history learning website built with React, Vite, Tailwind CSS, and shadcn-style primitives.
colors:
  primary: "#991B1B"
  primary-action: "#DC2626"
  primary-action-hover: "#991B1B"
  secondary: "#D97706"
  secondary-soft: "#FEF3C7"
  surface: "#FFFFFF"
  surface-muted: "#F9FAFB"
  surface-warm: "#FEF2F2"
  border: "#E5E7EB"
  text: "#111827"
  text-muted: "#4B5563"
  text-subtle: "#9CA3AF"
  on-primary: "#FFFFFF"
typography:
  h1:
    fontFamily: Segoe UI, Arial, sans-serif
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: 0
  h2:
    fontFamily: Segoe UI, Arial, sans-serif
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: 0
  h3:
    fontFamily: Segoe UI, Arial, sans-serif
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: Segoe UI, Arial, sans-serif
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0
  label-caps:
    fontFamily: Segoe UI, Arial, sans-serif
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0.18em
rounded:
  sm: 8px
  md: 12px
  lg: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary-action}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-action-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-action}"
    rounded: "{rounded.md}"
    height: 48px
    padding: 28px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 24px
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    height: 72px
  badge:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.primary-action}"
    rounded: "{rounded.md}"
    padding: 8px
---

## Overview

The product is a premium digital textbook for Vietnamese high-school history. It should feel institutional, credible, quiet, and focused on study rather than like a generic startup SaaS dashboard.

Use a strict light-mode interface with strong hierarchy, generous whitespace, readable long-form content, and a restrained red/amber academic palette. The visual tone should support national history content: confident, respectful, structured, and easy to scan.

The app currently serves five core experiences: landing/home, lesson library, lesson detail reading, quiz flow, AI history chat, and progress tracking. All of them should share one visual language: white surfaces, red primary actions, amber academic accents, light gray borders, and minimal shadow.

## Colors

- **Primary (#991B1B):** Deep red for major headings, brand identity, overlays, and high-authority emphasis.
- **Primary Action (#DC2626):** Main CTA, active navigation state, progress indicators, selected filters, and user chat bubbles.
- **Primary Action Hover (#991B1B):** Hover and pressed state for primary actions.
- **Secondary (#D97706):** Amber accent for labels, metadata, achievement highlights, and academic status tags.
- **Secondary Soft (#FEF3C7):** Warm supporting background for achievement or study-tip surfaces.
- **Surface (#FFFFFF):** Default cards, navigation, content panels, and reading backgrounds.
- **Surface Muted (#F9FAFB):** Secondary tool backgrounds, empty states, chart areas, and subtle page contrast.
- **Surface Warm (#FEF2F2):** Hero bands, page headers, and learning-focused callout zones.
- **Border (#E5E7EB):** The default separator. Prefer borders over drop shadows.
- **Text (#111827):** Main reading text and dense interface labels.
- **Text Muted (#4B5563):** Paragraphs, descriptions, metadata, and secondary controls.
- **Text Subtle (#9CA3AF):** Captions, timestamps, disabled states, and low-priority hints.

Do not introduce dark mode, neon colors, glass effects, heavy gradients, or saturated decorative backgrounds. Red and amber are accents; the interface should still read as mostly white and neutral.

## Typography

Use `Segoe UI, Arial, sans-serif` for both display and body text, matching the current Tailwind theme. Keep letter spacing at `0` for normal text; uppercase labels may use positive tracking for institutional rhythm.

Headings should be bold and compact, generally `text-red-800` for page identity and `text-gray-900` for dense dashboard modules. Body copy should use comfortable line height, especially in lesson detail markdown and chat responses.

Recommended hierarchy:

- Page hero H1: `text-4xl sm:text-5xl xl:text-6xl`, bold, tight line height.
- Page title: `text-3xl sm:text-4xl`, bold, red.
- Section title: `text-2xl` to `text-4xl`, bold.
- Card title: `text-lg` to `text-xl`, bold.
- Body: `text-base leading-7` or `text-lg leading-8` for long reading.
- Captions and labels: `text-[10px]` to `text-xs`, uppercase, bold, tracked.

Avoid oversized type inside cards, sidebars, nav items, filters, and chart panels. Dense study tools should feel organized and calm.

## Layout

The layout system is full-width page bands with constrained inner content, usually `max-w-6xl` or `max-w-7xl`. Avoid nesting cards inside decorative page cards. Use cards only for repeated lesson items, chat surfaces, progress modules, sidebars, and true framed tools.

Primary page sections should use:

- `px-6 sm:px-10` for horizontal padding.
- `py-12` to `py-20` for page headers and working sections.
- `py-20 sm:py-28` for landing-page narrative sections.
- `gap-5` to `gap-8` for card grids.
- `gap-12` to `gap-20` for major two-column editorial layouts.

The navigation height is fixed at `72px`. Any viewport-height screens should account for it with `calc(100dvh - 72px)` or `calc(100vh - 72px)`.

Image-driven sections should reveal actual historical lesson imagery. Use high-quality lesson images as first-viewport signals where appropriate; avoid abstract hero art or decorative SVG scenes for this project.

## Elevation & Depth

Prefer `border border-gray-200` and flat white surfaces. Shadows should be absent by default; if depth is needed, use only a subtle shadow and keep it secondary to borders.

Use red overlays on historical images only when text legibility requires it. Keep overlays simple: solid red with opacity, not multicolor gradients.

Interactive states should be visible through border color, text color, background tint, and small transforms on imagery. Keep animation restrained and functional.

## Shapes

The system uses rounded corners, but should not become playful or pill-heavy:

- Small tags and topic chips: `rounded-lg` or `rounded-xl`.
- Buttons and inputs: `rounded-xl`.
- Cards and major panels: `rounded-2xl` only when matching existing components.
- Avoid fully rounded pills except for tiny badges where space is constrained.

Keep fixed-format elements stable with explicit heights, aspect ratios, or grid tracks: nav bars, icon buttons, lesson image cards, chat input, chart panels, progress rings, and quiz answer controls should not shift when content changes.

## Components

**Navigation:** Sticky, white, bottom border, 72px high. Active route uses red border and red text. Mobile nav can use lucide icons; desktop nav shows text labels.

**Buttons:** Primary buttons are red with white text. Secondary buttons are white with red border/text. Buttons should include lucide icons when the action benefits from a familiar symbol. Use `h-11` or `h-12` for primary actions.

**Cards:** Use white backgrounds, gray borders, no shadow. Lesson cards need stable image aspect ratio, visible difficulty/period badges, concise descriptions, and a clear `Hoc ngay` action. Do not add decorative card wrappers around entire sections.

**Badges and Chips:** Use small uppercase labels for difficulty, period, sources, topics, and status. Difficulty can use neutral, amber, and red variants, but keep contrast readable.

**Forms and Inputs:** Inputs are white with gray borders, red focus color, and stable height. Search fields should use a leading Search icon. Chat submit should be a square icon button.

**Lesson Detail:** Prioritize long-form readability. Keep content width near `max-w-3xl`, use strong section breaks, and preserve a sticky right sidebar only on desktop. Historical images must remain inspectable and not overly dark.

**AI Chat:** The chat should feel like a study tool, not a social app. Assistant messages use gray/white surfaces, user messages use red, sources use amber tags, and the input area remains fixed at the bottom of the chat card.

**Progress:** Charts and achievements should be clean and readable. Use red for progress and quiz scores, amber for achievement states, and neutral gray for locked or empty states. Avoid flashy chart effects.

## Do's and Don'ts

Do:

- Keep the product in light mode.
- Use red for authority and primary interaction.
- Use amber sparingly for academic emphasis and achievements.
- Use borders, spacing, and typography to create hierarchy.
- Make historical content easy to read for long sessions.
- Use real lesson images where visual context matters.
- Keep pages consistent with the existing Tailwind/shadcn-style component system.

Don't:

- Add dark mode.
- Add glassmorphism, neumorphism, loud gradients, or heavy shadows.
- Turn the app into a marketing landing page when a learning workflow is expected.
- Use abstract decorative imagery when historical images are available.
- Overuse rounded pills or oversized type in dense tool surfaces.
- Introduce unrelated color families that weaken the red/amber academic identity.
- Let text overflow buttons, chips, cards, or mobile navigation.
