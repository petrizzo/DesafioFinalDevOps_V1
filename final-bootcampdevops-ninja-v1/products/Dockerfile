FROM node:14-alpine

WORKDIR /product

COPY package.json package-lock.json* ./

RUN npm install --no-optional && npm cache clean --force

COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]
