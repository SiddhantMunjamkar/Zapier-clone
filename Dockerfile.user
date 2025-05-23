# Stage 1: Build
FROM node:20-alpine3.20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

# Stage 2: Serve with Next.js

FROM node:20-alpine3.20

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
