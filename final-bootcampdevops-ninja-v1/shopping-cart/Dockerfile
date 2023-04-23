#Backend de shopping-cart
FROM node:14-alpine

#Directorio de trabajo
WORKDIR ./shopping-cart

#Copiar dependencias
COPY package.json package-lock.json* ./

#Instalar dependencias
RUN npm install

#Copiar otro codigo
COPY . .

#Abrir puertos
EXPOSE 3002

#Iniciar
CMD ["node", "server.js"]