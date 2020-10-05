import { types } from "mobx-state-tree";

export const MessageModel = types.optional(
  types
    .model("MessageModel", {
      message: "",
    })
    .actions((self) => {
      return {
        setMessage(value: string) {
          self.message = value;
        },
      };
    }),
  {}
);
