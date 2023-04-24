#Dockerfile para el servicio de frontend

FROM node:14-alpine

# Crear directorio de trabajo
WORKDIR ./frontend

# Copiar archivo de dependencia
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install


COPY . . 
# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación

CMD ["node", "server.js"]
