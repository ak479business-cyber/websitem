# Overview

This project is a modern dental clinic website for "Absolute Dental" - a family-oriented dental practice in Toronto/Mississauga. The application features an immersive scroll-based landing page with architectural design inspiration, showcasing dental services through smooth animations and professional presentation. Built with React, TypeScript, and modern web technologies, it provides a comprehensive digital presence for a dental practice including service listings, patient testimonials, team information, and appointment booking capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server with hot module replacement
- **Tailwind CSS** for utility-first styling with custom design system
- **Shadcn/ui** component library providing accessible, customizable UI components
- **Wouter** for lightweight client-side routing
- **React Hook Form** with Zod validation for form handling

## Design System
- **Custom color palette** with dental practice branding (navy blue #323d62, orange/red #d96c51)
- **Glass morphism effects** and backdrop blur for modern visual appeal
- **Responsive design** with mobile-first approach
- **Animation system** featuring scroll-triggered tower reveal animations
- **Typography** using Google Fonts (Inter, Poppins, DM Sans)

## Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** structure with `/api` prefix routing
- **Modular storage interface** with in-memory implementation (extensible to database)
- **Session management** capabilities with connect-pg-simple integration
- **Development middleware** including Vite integration and error handling

## Data Storage Solutions
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Database schema** includes:
  - User management system
  - Service categories and individual dental services
  - Team member profiles with specialties
  - Appointment request handling with timestamps
- **Migration system** using Drizzle Kit for schema management
- **Environment-based configuration** for database connections

## Component Architecture
- **Atomic design principles** with reusable UI components
- **Scroll-based animations** including tower descent and reveal effects
- **Dental-specific components** for services, testimonials, and USPs
- **Responsive navigation** with mobile sheet menu and desktop dropdowns
- **Form components** with validation and accessibility features

## State Management
- **TanStack Query** for server state management and caching
- **React Context** for component-level state sharing
- **Local state** using React hooks for UI interactions
- **Form state** managed through React Hook Form

# External Dependencies

## Core Framework Dependencies
- **React ecosystem**: React 18, React DOM, React Router (Wouter)
- **Build tools**: Vite, TypeScript, ESBuild for production builds
- **Development**: TSX for TypeScript execution, Replit plugins for development environment

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including social media icons
- **Class Variance Authority**: Type-safe styling variants
- **Embla Carousel**: Touch-friendly carousel components

## Database and API
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Drizzle Zod**: Schema validation integration
- **Connect PG Simple**: PostgreSQL session store for Express

## Form Handling and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Hookform Resolvers**: Integration layer for validation libraries
- **Zod**: TypeScript-first schema validation

## Development and Quality
- **TypeScript**: Static type checking and enhanced developer experience
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting (implied by project structure)
- **Source mapping**: Debug support with @jridgewell/trace-mapping

## Utilities and Helpers
- **Date-fns**: Modern date utility library
- **clsx & tailwind-merge**: Conditional className utilities
- **nanoid**: Secure random ID generation
- **cmdk**: Command palette/search functionality