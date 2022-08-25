import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/signInSlice";

/* Creating a store with the reducer. */
export const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
