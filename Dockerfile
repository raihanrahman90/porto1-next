# Use the official Node.js 18 image as the base image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files for dependency installation
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller, optimized image for production
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=base /app/package.json /app/package-lock.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
