ARG DOCKER_NODE_VERSION=${DOCKER_NODE_VERSION}

FROM node:$DOCKER_NODE_VERSION

ARG PNPM_VERSION=${PNPM_VERSION}
ARG APP_PORT=${APP_PORT}

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN rm /usr/local/bin/yarn \
  && rm /usr/local/bin/yarnpkg \
  && npm uninstall -g npm \
  && corepack enable pnpm \
  && corepack prepare pnpm@$PNPM_VERSION --activate \
  && pnpm install

COPY ./ ./

EXPOSE $APP_PORT

CMD ["pnpm", "start"]
