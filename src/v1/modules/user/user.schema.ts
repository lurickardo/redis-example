export const userSchema = {
  findByEmail: {
    params: {
      type: "object",
      properties: {
        email: {
          type: "string",
        },
      },
      required: ["email"],
    },
  },
  listAll: {
    params: {
      type: "object",
      properties: {},
      required: [],
    },
    headers: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
  },
  create: {
    body: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
      required: ["name", "email"],
    },
  },
  update: {
    params: {
      type: "object",
      properties: {
        email: {
          type: "string",
        },
      },
      required: ["email"],
    },
    body: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
      required: ["name", "email"],
    },
  },
  remove: {
    params: {
      type: "object",
      properties: {
        email: {
          type: "string",
        },
      },
      required: ["email"],
    },
    headers: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
  },
  clearCache: {
    query: {
      type: "object",
      properties: {
        key: {
          type: "string",
        },
      },
    },
    headers: {
      type: "object",
      properties: {},
      additionalProperties: true,
    },
  },
};
