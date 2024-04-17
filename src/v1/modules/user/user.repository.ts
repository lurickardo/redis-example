import { CreateUserDto, UpdateUserDto } from "./dto";
const dbUser: CreateUserDto[] = [{ name: "Luiz", email: "luiz@gmail.com" }];

const randomDelay = () => {
  return Math.floor(Math.random() * (4000 - 2000 + 1) + 2000);
};

export const userRepository = {
  findOne: async (field: string, value: string): Promise<CreateUserDto> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dbUser.find((user) => user[field] === value));
      }, randomDelay());
    });
  },
  findAll: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dbUser);
      }, randomDelay());
    });
  },
  update: async (field: string, value: string, updatedUser: UpdateUserDto) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = dbUser.findIndex((user) => user[field] === value);
        if (index !== -1) {
          dbUser[index] = { ...dbUser[index], ...updatedUser };
          resolve(dbUser[index]);
        } else {
          reject(new Error("User not found"));
        }
      }, randomDelay());
    });
  },
  save: async (user: CreateUserDto) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dbUser.push(user);
        resolve(true);
      }, randomDelay());
    });
  },
  delete: async (field: string, value: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = dbUser.findIndex((user) => user[field] === value);
        if (index !== -1) {
          dbUser.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error("User not found"));
        }
      }, randomDelay());
    });
  },
};
