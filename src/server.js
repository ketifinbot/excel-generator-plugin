# Use Node.js 18
FROM node:18-alpine

# Set working directory
WORKDIR /opt/render/project/src

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY server.js ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
