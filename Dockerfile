ROM node:14

WORKDIR /app

ENV NODE_ENV = production

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g pm2

EXPOSE 8585

CMD ["pm2-runtime","src/index.js"]