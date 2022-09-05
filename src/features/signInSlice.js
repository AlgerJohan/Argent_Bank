import { createSlice } from "@reduxjs/toolkit";

/* Creating a reducer. */
export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setSignOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setToken, setUser, setSignOut } = signInSlice.actions;
export default signInSlice.reducer;
