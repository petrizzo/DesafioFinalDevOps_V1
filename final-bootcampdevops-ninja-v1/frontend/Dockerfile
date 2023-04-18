#Dockerfile para el servicio de frontend

FROM node:14-alpine

# Crear directorio de trabajo
WORKDIR /frontend

# Copiar archivo de dependencia
COPY . .

# Instalar dependencias
RUN npm install --no-optional && npm cache clean --force
RUN npm install cors --save

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación

CMD ["node", "server.js"]