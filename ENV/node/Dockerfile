FROM node:alpine

WORKDIR /usr/src/app/node

COPY package.json ./
COPY ./index.js ./
RUN npm install
RUN apk upgrade --update \
    && apk add bash tzdata curl wget ca-certificates \
    && ln -sf /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \
    && echo "Asia/Bangkok" > /etc/timezone \
    && rm -rf /var/cache/apk/*
RUN npm run build



