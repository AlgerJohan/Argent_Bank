import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    signIn: "null",
  },
  reducers: {
    setSignInData: (state, action) => {
      state.signIn = action.payload;
    },
    addSignIn: (state, action) => {
      state.signIn = action.payload;
    },
  },
});
export const { setSignInData, addSignIn } = signInSlice.actions;
export default signInSlice.reducer;
