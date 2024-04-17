import { createClient } from "redis";
import { env } from "../config/";

export const redisClient = createClient({ url: env.plugins.redis.url });

export const initRedis = async () => {
  await redisClient.connect();
  console.log("Redis connected.");
};
