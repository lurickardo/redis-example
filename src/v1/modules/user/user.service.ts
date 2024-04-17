import * as HttpStatus from "http-status";
import { httpException } from "../../../../src/config/error";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { userRepository } from "./user.repository";

export const userService = {
  findByEmail: async (email: string) => {
    try {
      const user = await userRepository.findOne("email", email);
      if (!user)
        throw httpException("Id user not found.", HttpStatus.NOT_FOUND);
      return user;
    } catch (error) {
      throw error;
    }
  },

  listAll: async () => {
    return await userRepository.findAll();
  },

  create: async (createUserDto: CreateUserDto) => {
    try {
      const user = await userRepository.findOne("email", createUserDto.email);
      if (user)
        throw httpException("Email already registered.", HttpStatus.NOT_FOUND);
      await userRepository.save(createUserDto);
      return { message: "User created successfully!" };
    } catch (error) {
      throw error;
    }
  },

  update: async (email: string, updateUserDto: UpdateUserDto) => {
    try {
      console.log(email, updateUserDto);
      const user = await userRepository.findOne("email", email);
      if (!user)
        throw httpException("Email already registered.", HttpStatus.NOT_FOUND);
      await userRepository.update("email", email, updateUserDto);
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
      return { message: "User successfully removed" };
    } catch (error) {
      throw error;
    }
  },
};
