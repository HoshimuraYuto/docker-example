ARG DOCKER_NODE_VERSION=${DOCKER_NODE_VERSION}

FROM node:$DOCKER_NODE_VERSION

ARG NPM_VERSION=${NPM_VERSION}
ARG APP_PORT=${APP_PORT}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g npm@$NPM_VERSION \
  && npm install

COPY ./ ./

EXPOSE $APP_PORT

CMD ["npm", "start"]
