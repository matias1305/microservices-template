FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY dist .

# port expose of service
ENV PORT 8080

# environment of service
ENV ENV 'env'

# version of service
ENV VERSION 'v1'

EXPOSE 8080/tcp

CMD ["node", "server"]