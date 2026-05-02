import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../features/UsersSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice
  }
})