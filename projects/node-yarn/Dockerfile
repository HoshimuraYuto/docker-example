ARG DOCKER_NODE_VERSION=${DOCKER_NODE_VERSION}

FROM node:$DOCKER_NODE_VERSION

ARG YARN_VERSION=${YARN_VERSION}
ARG APP_PORT=${APP_PORT}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN rm /usr/local/bin/yarn \
  && rm /usr/local/bin/yarnpkg \
  && npm uninstall -g npm \
  && corepack enable yarn \
  && corepack prepare yarn@$YARN_VERSION --activate \
  && yarn install

COPY ./ ./

EXPOSE $APP_PORT

CMD ["yarn", "start"]
