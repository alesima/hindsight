# Stage 1: Build the React (Vite) Client
FROM node:22 AS client-builder

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client/ ./

RUN npm run build

# Stage 2: Set up the Express server and serve the client
FROM node:22-slim-bullseye AS server

WORKDIR /app

COPY server/package*.json ./server/

RUN npm install --prefix server

COPY server/ ./server/

COPY --from=client-builder /app/client/dist ./server/public

EXPOSE 8080

CMD ["node", "server/index.js"]
