FROM node:22.21.1-alpine3.22

# Instala o bash (precisamos dele)
RUN apk add --no-cache bash

# Instala o CLI do NestJS globalmente
RUN npm i -g @nestjs/cli

# Define o diretório de trabalho
WORKDIR /home/node/api