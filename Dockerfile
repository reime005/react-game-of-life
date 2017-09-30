FROM node:8.0.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN npm install
RUN npm run build

EXPOSE 8080

CMD npm run start-docker
