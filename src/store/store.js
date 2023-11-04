import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../redux/userDataSlice";

export const store = configureStore({
  reducer: {
    userReducer: userDataSlice,
  },
});
