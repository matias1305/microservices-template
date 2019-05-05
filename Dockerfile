FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY dist .

ENV PORT 8080

EXPOSE 8080/tcp

CMD ["node", "index"]