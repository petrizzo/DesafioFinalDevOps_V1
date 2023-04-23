#Backend de productos
FROM node:14-alpine

#Directorio de trabajo
WORKDIR ./products

#Copiar dependencias
COPY package.json package-lock.json* ./

#Instalar dependencias
RUN npm install

#Copiar otro codigo
COPY . .

#Abrir puertos
EXPOSE 3001

#Iniciar
CMD ["node", "server.js"]