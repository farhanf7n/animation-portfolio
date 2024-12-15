import { configureStore } from "@reduxjs/toolkit";
import GlobalReducer from "./features/GlobalSlice";

export const store = configureStore({
  reducer: {
    GlobalReducer,
  },
});
