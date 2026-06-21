You are a senior UI/UX designer and frontend engineer.

I will provide an existing React + Vite + Tailwind CSS project and a design template/reference file.

Your task is to restyle the existing project so its layout, spacing, component structure, typography rhythm, card proportions, section hierarchy, and overall UI polish follow the provided template as closely as possible.

IMPORTANT RULES:

- Keep all existing functionality unchanged.
- Keep all existing routes unchanged.
- Keep all existing React logic unchanged unless strictly necessary for layout.
- Keep all mock data unchanged.
- Keep all Vietnamese UI content unchanged.
- Keep the existing color palette unchanged:
  - red-600 / #DC2626
  - red-800 / #991B1B
  - amber-600 / #D97706
  - red-50
  - amber-50
  - white
- Do NOT introduce new colors outside the current palette except neutral grays for text, borders, and backgrounds.
- Do NOT change quiz logic.
- Do NOT change AI chat logic.
- Do NOT change localStorage behavior.
- Do NOT change routing.
- Do NOT add authentication.
- Do NOT add API calls.
- Do NOT install new packages.

Design goal:

Use the provided template as the visual/layout reference, but adapt it to a premium Vietnamese academic EdTech platform.

The final UI must preserve:

- strict light mode
- academic credibility
- crisp typography
- ample whitespace
- subtle borders
- clean card layouts
- professional educational feeling

Avoid:

- dark mode
- heavy shadows
- cheap vibrant gradients
- glassmorphism
- neumorphism
- generic SaaS look
- unnecessary animations

Restyle these areas based on the template:

1. Navigation
2. Hero section
3. Feature cards
4. Lesson cards
5. Lesson detail layout
6. Sidebar layout
7. Quiz interface
8. AI chat interface
9. Progress dashboard
10. Buttons, badges, cards, spacing, borders, typography

Implementation instructions:

- Use Tailwind CSS v4 utility classes only.
- Do not create tailwind.config.js.
- Prefer editing existing components instead of creating unnecessary new files.
- Keep components modular and reusable.
- Maintain responsive behavior for mobile, tablet, and desktop.
- Use subtle borders instead of large shadows.
- Use rounded-xl or rounded-2xl consistently.
- Use max-width containers for readable academic layouts.
- Ensure long-form history content remains easy to read.

Output format:

For every changed file, output:

FILE: path/to/file.tsx

```tsx
full updated code here