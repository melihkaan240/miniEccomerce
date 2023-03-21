import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setMyData: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export const { setMyData } = basketSlice.actions;
export default basketSlice.reducer;
