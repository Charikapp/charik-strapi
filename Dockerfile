FROM node:18-alpine AS builder
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN ["yarn", "build"]

# Runner stage: use official Strapi image
FROM strapi/strapi:latest

WORKDIR /opt/app/

# Copy node_modules and build artifacts from builder
COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/build ./build
COPY --from=builder /opt/app/config ./config
COPY --from=builder /opt/app/src ./src
COPY --from=builder /opt/app/public ./public

# Copy essential files and source code
COPY . .

# Set environment variable if needed
# ENV NODE_ENV=production

CMD ["strapi", "start"]
