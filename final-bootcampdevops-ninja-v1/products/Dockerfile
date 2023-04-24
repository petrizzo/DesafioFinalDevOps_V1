FROM node:14-alpine

WORKDIR ./products

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node", "server.js" ]