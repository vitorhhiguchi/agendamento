#!/bin/bash

# Instala as dependências, faz o build e inicia a aplicação
npm install
npm run build
# npx prisma generate # vamos usar isso depois, quando o Prisma estiver configurado
npm run start:dev