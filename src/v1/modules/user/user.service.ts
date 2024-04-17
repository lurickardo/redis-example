import * as HttpStatus from "http-status";
import { httpException } from "../../../../src/config/error";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { userRepository } from "./user.repository";
import { redisClient } from "../../../plugins/redis";

export const userService = {
  findByEmail: async (email: string) => {
    try {
      const userCache = await redisClient.get(`user:${email}`);
      if (userCache) {
        return JSON.parse(userCache);
      }

      const user = await userRepository.findOne("email", email);
      if (!user)
        throw httpException("Email user not found.", HttpStatus.NOT_FOUND);
      await redisClient.set(`user:${email}`, JSON.stringify(user));

      return user;
    } catch (error) {
      throw error;
    }
  },

  listAll: async () => {
    const usersCache = await redisClient.get("users");
    if (usersCache) {
      return JSON.parse(usersCache);
    }
    const users = await userRepository.findAll();
    await redisClient.set("users", JSON.stringify(users));

    return users;
  },

  create: async (createUserDto: CreateUserDto) => {
    try {
      const user = await userRepository.findOne("email", createUserDto.email);
      if (user)
        throw httpException("Email already registered.", HttpStatus.NOT_FOUND);
      const userCreated = await userRepository.save(createUserDto);
      await redisClient.set(
        `user:${createUserDto.email}`,
        JSON.stringify(userCreated),
      );

      return { message: "User created successfully!" };
    } catch (error) {
      throw error;
    }
  },

  update: async (email: string, updateUserDto: UpdateUserDto) => {
    try {
      const user = await userRepository.findOne("email", email);
      if (!user)
        throw httpException("Email already registered.", HttpStatus.NOT_FOUND);
      const userUpdated = await userRepository.update(
        "email",
        email,
        updateUserDto,
      );
      await redisClient.set(`user:${email}`, JSON.stringify(userUpdated));

      return updateUserDto;
    } catch (error) {
      throw error;
    }
  },

  remove: async (email: string) => {
    try {
      const user = await userRepository.findOne("email", email);
      if (!user)
        throw httpException("Email user not found.", HttpStatus.NOT_FOUND);
      await userRepository.delete("email", email);
      await redisClient.del(`user:${email}`);

      return { message: "User successfully removed" };
    } catch (error) {
      throw error;
    }
  },
  clearCache: async (key: string) => {
    try {
      if (key) {
        await redisClient.del(key);
        return { message: "Successfully cleared cache" };
      }
      await redisClient.flushAll();
      return { message: "Successfully cleared cache" };
    } catch (error) {
      throw error;
    }
  },
};
