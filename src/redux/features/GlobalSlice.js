import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const global = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setisLoading } = global.actions;
export default global.reducer;
