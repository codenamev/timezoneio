FROM node:6.2-slim

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g nodemon
RUN npm run build

ENV NODE_ENV development

EXPOSE 8888

CMD npm run start
