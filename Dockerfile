FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD npm run start:prod:with_field_resolvers && npm run start:prod:without_field_resolvers