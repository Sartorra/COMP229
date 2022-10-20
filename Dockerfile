FROM node:18

ENV NODE_ENV=production
ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

ENTRYPOINT ["node", "."]
