import { useContext } from "react";
import { AppModelContext } from "./AppModelContext";

export const useAppModel = () => useContext(AppModelContext);
