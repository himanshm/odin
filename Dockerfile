# Base Stage
FROM node:22-alpine AS base
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml* ./

# Development Stage
FROM base AS development
RUN pnpm install
COPY . .
EXPOSE 8081
CMD ["pnpm", "dev"]

# Build stage
FROM base AS build
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Production Stage
FROM node:22-alpine AS production
WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy build files and dependencies
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml* ./

# install dependencies for production
RUN pnpm install --prod --frozen-lockfile

# add non-root user and group
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs
EXPOSE 8001
CMD ["node", "dist/server.js"]