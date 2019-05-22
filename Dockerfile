# Use the official Node.js alpine image.
# https://hub.docker.com/_/node
FROM node:alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json .

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY dist .

# Service must listen to $PORT environment variable.
ENV PORT 8080

# Service must listen to $ENV environment variable.
ENV ENV 'env'

# Service must listen to $VERSION environment variable.
ENV VERSION 'v1'

# Expose port tcp of service
EXPOSE 8080/tcp

# Run APP
CMD ["node", "server"]