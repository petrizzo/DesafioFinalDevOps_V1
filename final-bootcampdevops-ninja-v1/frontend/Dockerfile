#Backend de frontend
FROM node:14-alpine

#Directorio de trabajo
WORKDIR ./frontend

#Copiar dependencias
COPY package.json package-lock.json* ./

#Instalar dependencias
RUN npm install

#Copiar otro codigo
COPY . .

#Abrir puertos
EXPOSE 3000

#Iniciar
CMD ["node", "server.js"]