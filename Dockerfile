FROM node:14 as development

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm","run","start-dev" ]


FROM node:14 as production

WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY . .

EXPOSE 4000

CMD [ "npm","start"]