# 1. Base image with Node.js
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy dependencies first for better caching
COPY package.json package-lock.json* ./
COPY prisma ./prisma

# 4. Install dependencies (this will run postinstall and prisma generate)
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port and start
EXPOSE 3000
CMD ["npm", "start"]
