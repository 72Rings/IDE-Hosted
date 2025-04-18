# Base Node.js image
FROM node:14

# Set working directory
WORKDIR /app

# Copy only backend code
COPY backend/package*.json ./backend/
WORKDIR /app/backend

# Install backend deps without React drama
RUN npm install --only=production --legacy-peer-deps

# Install required tools
RUN apt-get update && apt-get install -y g++ openjdk-11-jdk python3

# Copy backend source files
COPY backend/ .

# Set env
ENV NODE_ENV=production
ENV PORT=5000

# Expose backend port
EXPOSE 5000

# Run server
CMD ["node", "index.js"]
