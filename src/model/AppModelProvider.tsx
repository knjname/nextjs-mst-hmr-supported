import { useAppModel } from "./useAppModel";
import { AppModel } from "./AppModel";
import { AppModelContext } from "./AppModelContext";
import { getSnapshot, applySnapshot } from "mobx-state-tree";

const appModel = AppModel.create();

export const AppModelProvider: React.FC = ({ children }) => {
  return (
    <AppModelContext.Provider value={appModel}>
      {children}
    </AppModelContext.Provider>
  );
};

if (module.hot) {
  module.hot.dispose((data) => {
    data.snapshot = getSnapshot(appModel);
  });

  if (module.hot.data) {
    applySnapshot(appModel, module.hot.data.snapshot);
  }
}
