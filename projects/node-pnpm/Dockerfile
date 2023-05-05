ARG DOCKER_NODE_VERSION=${DOCKER_NODE_VERSION}

FROM node:$DOCKER_NODE_VERSION

ARG PNPM_VERSION=${PNPM_VERSION}
ARG APP_PORT=${APP_PORT}

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm@$PNPM_VERSION \
  && pnpm install

COPY ./ ./

EXPOSE $APP_PORT

CMD ["npm", "start"]
