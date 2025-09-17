# Tower Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from architectural showcases like architectural firm websites and modern real estate platforms, focusing on dramatic visual presentation and smooth user experience.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Dark mode: Deep charcoal (210 15% 12%) with architectural blue accents (210 80% 45%)
- Light mode: Clean whites (0 0% 98%) with sophisticated grays (210 10% 25%)

**Accent Colors:**
- Subtle glass-inspired teal (180 25% 65%) to complement the tower's glass facade
- Minimal use of warm amber (35 80% 70%) for CTAs only

### B. Typography
- **Primary**: Inter or Poppins via Google Fonts for modern, architectural feel
- **Headings**: Bold weights (600-700) for impact
- **Body**: Regular (400) and medium (500) weights
- **Sizes**: Large hero text, clean readable body text

### C. Layout System
**Tailwind Spacing**: Consistent use of units 4, 8, 12, 16, 24 for harmony
- Generous whitespace to let the tower dominate
- Vertical rhythm matching the scroll animation pace

### D. Component Library
**Core Elements:**
- Fixed navigation with glass morphism effect
- Hero section with minimal text overlay
- Content sections with subtle backgrounds
- CTA buttons with blurred backgrounds when over images
- Footer with architectural grid layout

**Scroll Animation Components:**
- Tower reveal container with clip-path masking
- Parallax content sections
- Smooth scroll indicators
- Progressive content reveal

### E. Animations
**Primary Animation**: Tower scroll reveal using CSS clip-path or mask
- Smooth 60fps scroll-triggered animation
- Tower image fixed position with dynamic revealing
- Subtle parallax on background elements only

## Visual Treatment

### Color Usage
- **Background**: Gradient from deep architectural blue (210 25% 8%) to midnight (210 15% 5%)
- **Tower Integration**: Overlay gradients to blend tower seamlessly with page backgrounds
- **Contrast**: High contrast text over dark backgrounds, ensuring tower remains focal point

### Gradients
- Subtle vertical gradients in hero section to frame the tower
- Glass-inspired linear gradients (transparent to 210 20% 10%) for UI elements
- Background gradients transitioning from dark blue to black as users scroll down

## Landing Page Structure (Maximum 4 Sections)

1. **Hero Section**: Tower tip visible, minimal text, scroll indicator
2. **About/Vision**: Mid-tower reveal with key messaging
3. **Features/Details**: Lower tower sections with supporting content  
4. **Contact/CTA**: Full tower revealed with final call-to-action

## Images
- **Primary Hero Image**: The provided twisted tower image as the central fixed element
- **Background Treatment**: Subtle architectural textures or cityscapes as secondary elements
- **No additional hero images**: The tower serves as the singular visual anchor

## Key Design Principles
- **Tower-Centric**: All design elements support and enhance the tower reveal animation
- **Architectural Aesthetic**: Clean lines, geometric layouts, sophisticated color choices
- **Progressive Disclosure**: Content and tower revealed in meaningful stages
- **Performance-Focused**: Optimized animations for smooth 60fps experience