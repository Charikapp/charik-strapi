# Builder stage: install dependencies and build the app
FROM node:18-alpine AS builder

# Install system dependencies for sharp
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

WORKDIR /opt/app

# Copy only package files first for better layer caching
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Copy the rest of the source code
COPY . .

# Build the app (if you have a build step, e.g., for admin panel)
# RUN npm run build

# Runner stage: use official Strapi image
FROM strapi/strapi:latest

WORKDIR /srv/app

# Copy node_modules and build artifacts from builder
COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/build ./build

# Copy essential files and source code
COPY --from=builder /opt/app/package.json ./
COPY --from=builder /opt/app/server.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/src ./src
COPY --from=builder /opt/app/config ./config
COPY --from=builder /opt/app/data ./data
COPY --from=builder /opt/app/types ./types

# Set environment variable if needed
# ENV NODE_ENV=production

CMD ["strapi", "start"]
