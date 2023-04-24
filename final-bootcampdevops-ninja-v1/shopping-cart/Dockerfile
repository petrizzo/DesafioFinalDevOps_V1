FROM node:14-alpine

# Crear directorio de trabajo
WORKDIR ./shopping-cart

# Copiar archivo de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto
EXPOSE 3002

# Comando para iniciar la aplicación
CMD [ "node", "server.js" ]