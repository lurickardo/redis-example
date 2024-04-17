# <p align="center">Redis Example</p>

<p align="center">
  <img src="https://github.com/lurickardo/redis-example/assets/34722198/9adbd55f-4f0c-42cb-93d1-254d21713764" alt="Logo" width="300">
</p>

<p align="center">Simple example of using cache with <a href="https://redis.io/" target="_blank">Redis</a> in Node.js.</p>
<p align="center">
  <a><img src="https://img.shields.io/badge/license-MIT-green" alt="Package License" /></a>
  <a href="https://www.npmjs.com" target="_blank"><img src="https://img.shields.io/badge/npm-v10.2.3-green?logo=npm" alt="NPM Version" /></a>
  <a href="https://nodejs.org" target="_blank"><img src="https://img.shields.io/badge/node-v20.10.0-green?logo=nodedotjs" alt="Node Version"></a>
  <a href="https://www.typescriptlang.org" target="_blank"><img src="https://img.shields.io/badge/typescript-v5.3.3-green?logo=typescript" alt="Typescript Version"></a>
  <a href="https://fastify.dev" target="_blank"><img src="https://img.shields.io/badge/fastify-v4.25.2-green?logo=fastify" alt="Fastify Version"></a>
  <a href="https://redis.io" target="_blank"><img src="https://img.shields.io/badge/redis-v4.6.13-green?logo=redis" alt="Redis Version"></a>
  <a href="https://biomejs.dev" target="_blank"><img src="https://img.shields.io/badge/biome-v1.5.3-green?logo=biome" alt="Biome Version"></a>
  <a href="https://zod.dev/" target="_blank"><img src="https://img.shields.io/badge/zod-v3.22.4-green?logo=zod" alt="Zod Version"></a>
</p>

## Diagram

![Captura de Tela 2024-04-17 às 00 46 41](https://github.com/lurickardo/redis-example/assets/34722198/2caf23c3-6cbd-4faa-a01a-a65568a3cf71)

# Libraries

- NodeJS
- Fastify
- Typescript
- Redis
- Biome

## Installation

```bash
$ docker build -t server-redis .
$ docker run --name container-redis -d -p 6379:6379 server-redis
$ npm install
```

## Running the app

```bash
# development
$ npm run start:dev

# production
$ npm run build
$ npm run start:prod
```

## Swagger

`http://localhost:3000/api/redisexample/docs`
