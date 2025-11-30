# Estágio 1: Build da aplicação React
# Usamos uma imagem leve do Node para instalar dependências e gerar a pasta 'dist'
FROM node:22-alpine as build

WORKDIR /app

# Copia os arquivos de configuração primeiro para aproveitar o cache do Docker
COPY package*.json ./
RUN npm install

# Copia o restante do código e faz o build
COPY . .
RUN npm run build

# Estágio 2: Servidor Web (Nginx)
# O Node não é bom para servir arquivos estáticos em produção, o Nginx é muito mais rápido
FROM nginx:alpine

# Copia a pasta 'dist' gerada no estágio anterior para onde o Nginx serve arquivos
COPY --from=build /app/dist /usr/share/nginx/html

# Configuração essencial para React Router funcionar (evita erro 404 ao atualizar a página)
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html index.htm; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]