FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache python3 make g++

# Create app directory
WORKDIR /opt/app

# Create non-root user
RUN addgroup -g 1001 -S strapi && \
    adduser -S strapi -u 1001

# Copy package files first for better caching
COPY --chown=strapi:strapi package*.json ./

# Install dependencies
RUN npm ci --only=production -f && npm cache clean --force

# Copy application source code
COPY --chown=strapi:strapi . .

# Ensure data directory and file exist
RUN mkdir -p src/data && \
    touch src/data/data.json && \
    echo '{}' > src/data/data.json

# Set proper permissions
RUN chown -R strapi:strapi /opt/app

# Switch to non-root user
USER strapi

# Expose port
EXPOSE 1337

# Environment
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "develop"]