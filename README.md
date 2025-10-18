# Backend API for Finance Folio

Express + TypeScript + Drizzle ORM + PostgreSQL + Docker

## Quick Start

```bash
# Install dependencies
pnpm install

# Start database
pnpm docker:dev:db

# Run migrations
pnpm db:migrate

# Start development server
pnpm dev
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm docker:dev` - Start full Docker stack
- `pnpm docker:dev:db` - Start only database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio

## API Endpoints

## Environment Variables

See `.env.sample` for required variables.
