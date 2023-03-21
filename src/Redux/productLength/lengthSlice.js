import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  length: 0,
};

export const lengthSlice = createSlice({
  name: "length",
  initialState,
  reducers: {
    increment: (state) => {
      state.length += 1;
    },
    decrement: (state) => {
      state.length -= 1;
    },
  },
});

export const { increment, decrement } = lengthSlice.actions;
export default lengthSlice.reducer;
