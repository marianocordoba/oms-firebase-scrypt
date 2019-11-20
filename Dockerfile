FROM alpine:3.9 AS build-scrypt

RUN apk add --no-cache \
    git \
    gcc \
    g++ \
    openssl-dev \
    make \
    automake \
    autoconf

RUN git clone https://github.com/firebase/scrypt

RUN cd scrypt && \
    autoreconf -i && \
    ./configure --disable-dependency-tracking && \
    make

# -------------------------------------------------- #

FROM node:10.16.0-alpine

RUN apk add --no-cache bash

COPY --from=build-scrypt scrypt/scrypt /usr/local/bin/scrypt
COPY . .

RUN yarn --production

ENTRYPOINT ["yarn", "start"]
