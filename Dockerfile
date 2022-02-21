FROM node:16-alpine AS build
ENV HUSKY=0
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:16-alpine
ENV NODE_ENV=production
RUN addgroup -g 3000 app && adduser --uid 3000 -G app -D app
USER app
WORKDIR /app
COPY --chown=app:app --from=build /app ./
EXPOSE 3000
ENTRYPOINT []
CMD ["node", "--enable-source-maps", "/app/build/index.js"]
