# node-pnpm

## Before you start using it

### Copy `.env.example` file to `.env`

Windows

```bash
copy .env.example .env
```

Mac

```bash
cp .env.example .env
```

### Set version

You can specify the version of the dependency and more in the `.env` file.

```text
DOCKER_NODE_VERSION=18.15-alpine
PNPM_VERSION=8.2.0

APP_HOST=0.0.0.0
APP_PORT=8080
LOCALHOST_PORT=80
```

## How to use

Start

```bash
docker-compose up -d
```

Stop

```bash
docker-compose stop
```

Access sites

- [Express](http://localhost/)

Login container

```bash
docker-compose exec node-pnpm /bin/sh
```

Logout container

```bash
exit
```

## License

This project is licensed under the MIT No Attribution License. See the [LICENSE](https://github.com/HoshimuraYuto/docker-example/blob/master/LICENSE) file for details.
