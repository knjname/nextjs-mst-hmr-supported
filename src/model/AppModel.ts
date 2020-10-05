import { types } from "mobx-state-tree";
import { MessageModel } from "./message/MessageModel";

export const AppModel = types.optional(
  types
    .model("AppModel", {
      message: types.late(() => MessageModel),
    })
    .actions((self) => {
      return {};
    }),
  {}
);
