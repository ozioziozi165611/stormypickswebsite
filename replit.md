# Stormy Picks - Sports Betting Tips Landing Page

## Overview

Stormy Picks is a subscription-based sports betting tips service with a conversion-focused landing page. The application is built as a single-page application (SPA) that showcases betting performance metrics, customer testimonials, and subscription packages. The primary goal is to convert visitors into paying subscribers through clear value proposition and social proof.

The landing page features hero section, performance metrics, testimonials carousel, win slips showcase, and pricing packages with direct links to Whop subscription checkout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**Routing**: Client-side routing implemented with Wouter (lightweight React router)
- Single-page application with routes for home (`/`), Discord guide (`/discord-guide`), and bankroll guide (`/bankroll-guide`)
- 404 handling for undefined routes

**State Management**: TanStack Query (React Query) for server state management
- Configured with disabled refetching and infinite stale time for static content
- Custom query client with centralized error handling

**UI Components**: Radix UI primitives with custom styling via shadcn/ui
- Comprehensive component library including buttons, cards, dialogs, carousels, etc.
- Consistent design system using CSS variables for theming
- New York style variant with custom border radius and spacing

**Styling**: Tailwind CSS with custom configuration
- Custom color system using HSL values with CSS variables
- Dark mode support via class-based toggling
- Custom animations (floating bubbles effect)
- Responsive design with mobile-first approach

**Key Component Structure**:
- `HeroSection`: Above-the-fold conversion area with CTA and trust badges
- `PerformanceMetrics`: Display of betting statistics and ROI
- `Testimonials`: Carousel of customer reviews with avatars
- `WinSlipsCarousel`: Auto-playing carousel showcasing winning bets
- `PricingPackages`: Three-tier subscription packages (weekly, monthly, yearly)
- `Navbar`: Fixed navigation with smooth scrolling to sections

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- Minimal backend serving primarily as static file server
- Custom logging middleware for API requests
- Vite integration for development hot module replacement

**Development vs Production**:
- Development: Vite dev server with HMR and Replit-specific plugins
- Production: Pre-built static assets served from Express
- Separate Vercel-optimized build configuration removing Replit dependencies

**Storage Interface**: Abstracted storage layer with in-memory implementation
- `IStorage` interface defining CRUD operations for users
- `MemStorage` class using Map for temporary user storage
- Prepared for future database integration (schema defined but not actively used)

### Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL
- Schema defined in `shared/schema.ts` with user table structure
- Zod validation schemas for type-safe inserts
- Currently not actively used (in-memory storage for now)

**Schema Structure**:
```typescript
users table:
- id (varchar, primary key, auto-generated UUID)
- username (text, unique, not null)
- password (text, not null)
```

**Rationale**: Database schema exists as infrastructure preparation but application currently operates as static landing page without user authentication or data persistence.

### Path Aliases

TypeScript path aliases for cleaner imports:
- `@/*` → `client/src/*` (frontend components and utilities)
- `@shared/*` → `shared/*` (shared types and schemas)
- `@assets/*` → `attached_assets/*` (images and static assets)

### Build System

**Development**: 
- Vite with React plugin and Replit-specific tooling (cartographer, dev banner, runtime error overlay)
- File system restrictions for security

**Production**:
- Standard Vite build outputting to `dist/public`
- esbuild bundling server code to `dist/index.js`
- Node.js production server serving static files

**Vercel Deployment**:
- Specialized `vite.config.vercel.ts` removing Replit plugins
- SPA routing handled via Vercel rewrites (all routes → index.html)
- Output directory: `dist`

### Design System

**Typography**: Multiple font families loaded from Google Fonts
- DM Sans (primary UI font)
- Architects Daughter, Fira Code, Geist Mono (supplementary)

**Color System**: HSL-based with CSS custom properties
- Separate light/dark mode definitions
- Semantic color naming (primary, secondary, accent, destructive, muted)
- Card and popover variants with dedicated border colors

**Spacing**: Tailwind default units (2, 4, 8, 12, 16, 20, 24) for consistent rhythm

**Animation**: Custom floating bubble effect with randomized parameters
- Pure CSS keyframe animation
- Configurable duration, delay, size, and position

## External Dependencies

### Third-Party Services

**Whop**: Subscription payment platform
- Direct checkout links embedded in pricing cards
- Three subscription tiers with unique Whop product IDs
- Weekly: $9.99 AUD
- Monthly: $29.99 AUD (highlighted as "Best Value")
- Yearly: $299.99 AUD

**Discord**: Community platform integration
- Guide page explaining Discord account linking process
- Referenced in pricing package features

### UI Component Libraries

**Radix UI**: Headless component primitives
- 20+ primitive components (accordion, dialog, dropdown, tooltip, etc.)
- Accessibility-compliant implementations
- Full keyboard navigation support

**Embla Carousel**: Touch-friendly carousel library
- Autoplay plugin for testimonials and win slips
- Responsive and mobile-optimized

### Development Tools

**Replit Plugins** (Development only):
- `@replit/vite-plugin-cartographer`: Code navigation
- `@replit/vite-plugin-dev-banner`: Development environment banner
- `@replit/vite-plugin-runtime-error-modal`: Enhanced error display

### Database (Prepared but Inactive)

**Neon Database**: Serverless Postgres
- `@neondatabase/serverless` driver installed
- Drizzle ORM configured with connection string from environment variable
- Migration directory structure prepared (`/migrations`)

**Note**: While database infrastructure is configured, the current application operates without persistent storage. The landing page is fully static with hardcoded content and external links to Whop for subscriptions.

### Asset Management

Static images stored in `attached_assets/` directory:
- Brand logo (`image_1762738117348.png`)
- Hero background (`generated_images/Dark_sports_hero_background_*.png`)
- Testimonial avatars (6 unique images)
- Win slip screenshots (4 images)