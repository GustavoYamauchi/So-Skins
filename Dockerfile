# Step 1
FROM node:16.13.0-alpine as build-step

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./
RUN npm run build

# Stage 2
FROM nginx:1.21.4-alpine
COPY --from=build-step /app/build /usr/share/nginx/html