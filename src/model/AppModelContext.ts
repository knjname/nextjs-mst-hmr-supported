import { createContext } from "react";
import { Instance } from "mobx-state-tree";
import { AppModel } from "./AppModel";

export const AppModelContext = createContext<Instance<typeof AppModel>>(
  AppModel.create()
);
