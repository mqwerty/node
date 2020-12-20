FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN HUSKY_SKIP_INSTALL=1 npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:14-alpine
ENV NODE_ENV=production
RUN addgroup -g 3000 app && adduser --uid 3000 -G app -D app
USER app
WORKDIR /app
COPY --chown=app:app --from=build /app ./
EXPOSE 3000
ENTRYPOINT []
CMD ["node", "/app/build/index.js"]
