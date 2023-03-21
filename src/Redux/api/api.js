import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  title: "...",
  price: "...",
  category: "...",
  description: "...",
  image: "...",
};

export const api = createSlice({
  name: "products",
  initialState,
});

export const { drawerOn, drawerOff } = api.actions;
export default api.reducer;
