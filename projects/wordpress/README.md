# wordpress

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

You can specify the version of the dependency in the `.env` file.

```text
WORDPRESS_VERSION=latest
MYSQL_VERSION=latest
PHPMYADMIN_VERSION=latest
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

- [WordPres](http://localhost:8080/)
- [phpMyAdmin](http://localhost:8081/)

Login container

```bash
docker-compose exec wordpress /bin/bash
```

```bash
docker-compose exec mysql /bin/bash
```

Logout container

```bash
exit
```

## License

This project is licensed under the MIT No Attribution License. See the [LICENSE](https://github.com/HoshimuraYuto/docker-example/blob/master/LICENSE) file for details.
