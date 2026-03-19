# AI SaaS Landing Page

A modern, minimalistic landing page for an AI SaaS product featuring an ethereal shadow animation background.

## Features

- **Ethereal Shadow Background**: Dynamic, animated background using framer-motion
- **Minimalistic Design**: Clean black and white theme with professional typography
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Component-Based Architecture**: Reusable, maintainable components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   │   └── ethereal-shadow.tsx
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── features.tsx
│   ├── cta.tsx
│   └── footer.tsx
```

## Components

### EtherealShadow
The main animated background component that creates the ethereal shadow effect.

- Uses SVG filters and framer-motion for smooth animations
- Configurable animation speed and intensity
- Optional noise overlay for texture
- Fully responsive

### Navbar
Fixed navigation bar with:
- Logo and branding
- Navigation links (Features, Pricing, Contact)
- Call-to-action button
- Responsive design

### Hero
Hero section featuring:
- Full-screen ethereal shadow background
- Compelling headline and subheading
- Call-to-action buttons
- Scroll indicator

### Features
Grid of feature cards showcasing:
- 6 key benefits of the AI SaaS platform
- Icons from Lucide React
- Hover effects and animations
- Responsive grid layout

### CTA
Call-to-action section with:
- Compelling headline
- Benefit-driven copy
- Primary and secondary action buttons
- Trust indicators

### Footer
Professional footer with:
- Company information and social links
- Product links
- Company links
- Legal information

## Customization

### Colors
The site uses a minimalistic black and white theme. To customize:

1. Edit colors in `tailwind.config.ts`
2. Update CSS custom properties in `src/app/globals.css`

### Content
Replace placeholder content in:
- `src/app/page.tsx` - Main page structure
- `src/components/hero.tsx` - Hero content
- `src/components/features.tsx` - Feature descriptions
- `src/components/cta.tsx` - Call-to-action text

### Animations
Adjust the ethereal shadow animation in `src/components/ui/ethereal-shadow.tsx`:

- `scale`: Intensity of the displacement effect (0-100)
- `speed`: Animation speed (1-100)
- `noise.opacity`: Opacity of the noise texture overlay
- `noise.scale`: Scale of the noise texture pattern

## Performance

- Optimized images with Next.js Image component
- Efficient animations using framer-motion
- Minimal dependencies
- Code splitting with Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT