import { FastifyReply, FastifyRequest } from "fastify";
import { transformCreateUserDto, transformUpdateUserDto } from "./dto";
import { userService } from "./user.service";

export const userController = {
  findByEmail: async ({ params: { email } }, reply: FastifyReply) => {
    return reply.code(200).send(await userService.findByEmail(email));
  },

  listAll: async (request: Request, reply: FastifyReply) => {
    return reply.code(200).send(await userService.listAll());
  },

  create: async ({ body }: FastifyRequest, reply: FastifyReply) => {
    return reply
      .code(201)
      .send(await userService.create(transformCreateUserDto(body)));
  },

  update: async ({ params: { email }, body }, reply: FastifyReply) => {
    return reply
      .code(200)
      .send(await userService.update(email, transformUpdateUserDto(body)));
  },

  remove: async ({ params: { email } }, reply: FastifyReply) => {
    return reply.code(200).send(await userService.remove(email));
  },

  clearCache: async ({ query: { key } }, reply: FastifyReply) => {
    return reply.code(200).send(await userService.clearCache(key));
  },
};
