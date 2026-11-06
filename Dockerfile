
# ==================================
# Stage 1: Build React Application
# ==================================

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ==================================
# Stage 2: Production Nginx Server
# ==================================

FROM nginx:alpine AS production

RUN rm -f /etc/nginx/conf.d/default.conf

ENV NGINX_ENVSUBST_OUTPUT_DIR=/tmp/nginx-conf

COPY nginx.conf /etc/nginx/nginx.conf

COPY nginx.conf.template /etc/nginx/templates/default.conf.template

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
