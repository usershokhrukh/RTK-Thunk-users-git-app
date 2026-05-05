import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../features/UsersSlice";
import InterfaceSlice from "../../features/InterfaceSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    interface: InterfaceSlice
  }
})