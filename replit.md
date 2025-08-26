# Webgrade - IT Solutions Website

## Overview

This is a modern full-stack web application for Webgrade, an IT solutions company specializing in web development, Telegram bots, SEO services, UI/UX design, and AI integration. The application features a professional business website with contact form functionality, built using React, Express.js, and PostgreSQL with a focus on modern web standards and responsive design. The application now includes multilingual support (Uzbek/English) and dark/light theme switching.

## User Preferences

Preferred communication style: Simple, everyday language.
Company name: Webgrade (not "Biz Webgrade")
Theme support: Dark and light mode switching
Language support: Uzbek (default) and English multilingual support

## System Architecture

### Frontend Architecture
The frontend is built with React 18 and TypeScript, utilizing a modern component-based architecture. The application uses Vite as the build tool for fast development and optimized production builds. The UI is constructed with shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable interface elements.

**Key Frontend Decisions:**
- **React with TypeScript**: Provides type safety and modern development experience
- **Vite Build System**: Chosen for fast development server and optimized bundling
- **Wouter Router**: Lightweight client-side routing solution instead of React Router
- **TanStack Query**: Handles server state management and API interactions
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui Components**: Pre-built accessible components reducing development time

The frontend follows a single-page application (SPA) pattern with multiple sections rendered on the home page, including hero, services, about, team, portfolio, and contact sections.

### Backend Architecture
The backend uses Express.js with TypeScript in an ESM (ES Modules) configuration. It follows a RESTful API design pattern with clean separation of concerns through dedicated route handlers and storage abstractions.

**Key Backend Decisions:**
- **Express.js with TypeScript**: Provides familiar Node.js framework with type safety
- **ESM Module System**: Modern JavaScript module system for better compatibility
- **Storage Abstraction**: Interface-based storage pattern allowing easy switching between implementations
- **Memory Storage**: Currently uses in-memory storage for development simplicity
- **Zod Validation**: Schema validation for API request/response data

The server implements middleware for request logging, JSON parsing, and error handling, with a clear separation between API routes and static file serving.

### Data Storage Solutions
The application is designed with a flexible storage architecture using an interface pattern. Currently implements in-memory storage for development, but is structured to easily migrate to PostgreSQL in production.

**Database Schema Design:**
- **Users Table**: Basic user authentication structure with username/password
- **Contact Submissions Table**: Stores contact form submissions with full contact details
- **Drizzle ORM**: Type-safe database toolkit for schema management and queries
- **PostgreSQL Ready**: Configuration files prepared for PostgreSQL deployment

The schema uses Drizzle ORM with Zod for type-safe database operations and validation, ensuring data integrity across the application.

### Authentication and Authorization
The application includes basic user authentication infrastructure but is not currently implemented in the frontend. The backend includes user creation and retrieval functionality through the storage interface.

**Authentication Architecture:**
- User model with username/password fields
- Storage interface supports user operations
- Session management prepared but not activated
- Expandable to include role-based access control

### Build and Development
The application uses a monorepo structure with shared types and schemas between frontend and backend. The build system is configured for both development and production environments.

**Development Tools:**
- **TSX**: TypeScript execution for development server
- **esbuild**: Fast bundling for production server build
- **Drizzle Kit**: Database migration and schema management
- **Replit Integration**: Configured for Replit development environment

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend library with latest features and performance improvements
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire application stack
- **Vite**: Frontend build tool and development server

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon database
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components for accessibility
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including social media icons

### State Management and API
- **TanStack React Query**: Server state management and data fetching
- **Wouter**: Lightweight React router for client-side navigation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library

### Development and Build Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind integration
- **Autoprefixer**: CSS vendor prefix automation

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation in Replit environment