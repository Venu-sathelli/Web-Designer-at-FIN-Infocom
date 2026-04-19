# Grafterr Landing Page - React Implementation

## Overview
This is a fully responsive, pixel-perfect landing page for **Grafterr**, a restaurant technology and payments platform. Built with React, Vite, and modern CSS3, the site showcases the company's products through an interactive carousel with dynamic content loading.

## Stack Chosen: React ✨

**Technology Stack:**
- **Framework:** React 18 (Functional Components + Hooks)
- **Build Tool:** Vite 8
- **Styling:** CSS3 with CSS Variables and CSS Modules pattern
- **Data Management:** Custom React Hooks (useContent, useCarousel)
- **Responsive Design:** Mobile-first approach (375px - 1440px+)

**Why React?**
- Component-based architecture for maintainability
- Reusable hooks for data fetching and carousel logic
- Excellent performance with Vite's fast build system
- Easy to extend and scale

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Skeleton.jsx       # Loading skeleton states
│   │   ├── GradientText.jsx   # Gradient text component
│   │   ├── GradientButton.jsx # Styled CTA button
│   │   ├── ProductCard.jsx    # Product card in carousel
│   │   ├── FloatingShape.jsx  # Animated decorative shapes
│   │   ├── Carousel.jsx       # Responsive carousel with touch
│   │   └── [component].css    # Component-scoped styles
│   └── sections/              # Page sections
│       ├── HeroSection.jsx    # Hero with gradient headline
│       ├── FeaturesSection.jsx # Products carousel section
│       └── [section].css      # Section styles
├── hooks/
│   └── index.js              # Custom React hooks
│       ├── useContent()       # Async data fetching hook
│       └── useCarousel()      # Carousel state & logic
├── services/
│   └── api.js                # API mock service
├── data/
│   └── content.json          # Content & configuration
├── styles/
│   ├── variables.css         # Design tokens & CSS variables
│   └── global.css            # Global reset & utilities
├── App.jsx                   # Main app component
└── main.jsx                  # App entry point
```

## Key Features Implemented

### 1. **Dynamic Content Loading** ✅
- All text content loaded from `data/content.json`
- Simulated API with 1000-1500ms delay using `setTimeout`
- Loading skeleton states while fetching
- Error handling with retry button
- Fade-in animations on load

### 2. **Hero Section** ✅
- Gradient text in headline: "Looking for a new **technology provider?**"
- Animated floating shapes (teal circle & coral rectangle)
- Responsive typography (clamp() for fluid sizing)
- CTA button with gradient background and hover effects

### 3. **Features Section with Carousel** ✅
- Section title with accent text and horizontal divider
- 3-product carousel: Point of Sale, Self-service, Kitchen Management
- **Responsive behavior:**
  - Desktop (1024px+): 3 items visible
  - Tablet (768px-1024px): 2 items visible
  - Mobile (<768px): 1 item visible + touch swipe support
- Navigation arrows (hidden on mobile)
- Smooth 300ms transitions
- Touch gesture support for mobile swiping

### 4. **Responsive Design** ✅
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Fluid typography using CSS clamp()
- Touch-friendly interactive elements
- Optimized spacing and padding for each breakpoint

### 5. **Loading & Error States** ✅
- CSS-based skeleton animations (no heavy libraries)
- Gradient shimmer effect during loading
- Error message display with retry button
- Graceful degradation

### 6. **Animations & Polish** ✅
- Floating shape animations (6-8s)
- Fade-in animations on content load
- Hover effects on buttons and cards
- Card elevation on hover
- Image zoom effect on hover
- Smooth transitions throughout

### 7. **Accessibility** ✅
- Semantic HTML5 structure
- ARIA labels on interactive elements
- Focus-visible states for keyboard navigation
- Color contrast compliance
- Touch target sizes (min 44px)

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation
```bash
# Clone or navigate to project
cd my-react-task

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Local: http://localhost:5174/
```

### Build for Production
```bash
npm run build
# Output: dist/

npm run preview
# Preview production build locally
```

## Development Approach

### Component Architecture
1. **UI Components** - Pure, reusable presentation components
2. **Custom Hooks** - Business logic isolated in hooks
3. **Service Layer** - API communication abstracted
4. **CSS Organization** - Component-scoped styles + global utilities

### Data Flow
```
App.jsx
├── HeroSection
│   ├── useContent(api.fetchHeroContent)
│   ├── GradientText
│   ├── GradientButton
│   └── FloatingShape (x2)
└── FeaturesSection
    ├── useContent(api.fetchFeaturesContent)
    ├── Carousel
    │   ├── useCarousel() with responsive logic
    │   └── ProductCard (x3)
    └── Error/Loading states
```

### Key Decisions

**1. Custom Hooks for State Management**
- `useContent`: Handles async data fetching, loading, errors, and retry
- `useCarousel`: Manages carousel state, responsive behavior, and touch events
- Clean separation of concerns

**2. CSS Variables for Design Tokens**
- Centralized color, spacing, and typography management
- Easy theming support
- Responsive values with CSS calc()

**3. Simulated API with Realistic Delay**
- Uses `fetch()` pattern with promises
- Random delay between 1000-1500ms
- Could be swapped for real API with minimal changes

**4. Responsive Carousel**
- Inline styles for transform (performance)
- CSS transitions for smooth animations
- Touch event handling for mobile
- Dynamic items-per-view calculation on resize

**5. No CSS Frameworks**
- Pure CSS3 for maximum control
- Smaller bundle size
- Better pixel-perfect design implementation

## Content Structure (content.json)

```json
{
  "navigation": { /* Logo, links, CTA */ },
  "hero": { /* Headline, subheadline, shapes */ },
  "featuresSection": { /* Title, products, carousel config */ }
}
```

All content is dynamic - modify `data/content.json` to update the site.

## Responsive Breakpoints

| Breakpoint | Device | Container | Carousel Items |
|-----------|--------|-----------|-----------------|
| < 480px   | Mobile | 16px padding | 1 item |
| 480-768px | Mobile | 16px padding | 1 item |
| 768-1024px| Tablet | 24px padding | 2 items |
| 1024px+   | Desktop| 32px padding | 3 items |

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

1. **Code Splitting** - Vite handles automatic splitting
2. **CSS Variables** - No runtime overhead
3. **Lazy Component Loading** - Only carousel items visible are rendered
4. **Image Optimization** - Placeholder images with proper aspect ratios
5. **Animation Performance** - Uses transform/opacity for 60fps

## Deployment Guide

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo in Vercel dashboard
# Builds automatically on push
```

**Vercel Configuration (auto-detected):**
- Build: `npm run build`
- Output: `dist`

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Or connect GitHub repo in Netlify dashboard
```

**Netlify Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Deploy to GitHub Pages

```bash
# Update vite.config.js: base: "/repo-name/"
# Build
npm run build

# Deploy dist/ folder to gh-pages branch
```

## Testing Checklist

- [x] Desktop layout (1440px)
- [x] Tablet layout (768px - 1024px)
- [x] Mobile layout (375px)
- [x] Loading states visible
- [x] Error handling works
- [x] Carousel navigation on desktop
- [x] Touch swipe on mobile
- [x] Responsive images
- [x] Hover effects smooth
- [x] Animations performant
- [x] Forms accessible
- [x] Color contrast compliance

## Assumptions Made

1. **Placeholder Images** - Using placeholder.com for product images
   - Replace with actual images in `data/content.json`
   - Recommended: WebP format with fallbacks

2. **API Simulation** - Using setTimeout instead of real API
   - Easy to swap for real endpoint in `src/services/api.js`
   - Error handling already in place

3. **Content Structure** - Follows Figma design with additional flexibility
   - Easy to add new products/sections
   - Navigation links functional structure (ready for routing)

4. **Design Tokens** - Extracted from Figma color palette
   - Gradient: `linear-gradient(90deg, #3b82f6, #f97316)`
   - Verify exact hex values in Figma if needed

## Future Enhancements

1. Add React Router for multi-page navigation
2. Integrate real backend API
3. Add form validation for contact section
4. Implement analytics tracking
5. Add SEO meta tags management
6. Create component story book for design system
7. Add internationalization (i18n)

## Git Commit History

The project was built with clean, logical commits:
1. Project setup and configuration
2. Create component structure and UI library
3. Implement hooks and service layer
4. Add Hero section with animations
5. Add Features section with carousel
6. Global styling and responsive design
7. Final testing and refinement

---

## 📄 Design Reference
Figma: [Dikshant-Grafterr-2](https://www.figma.com/design/qLha458FsFTWUVi2bH7YgU/Dikshant-Grafterr-2)

## 🚀 Live Demo
- **Deployed URL:** [Will be added after deployment]
- **GitHub:** [Repository link]

---

**Built with ❤️ using React + Vite**
