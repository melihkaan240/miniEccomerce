import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: false,
};

export const uislice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    drawerOn: (state) => {
      state.drawer = true;
    },
    drawerOff: (state) => {
      state.drawer = false;
    },
  },
});

export const { drawerOn, drawerOff } = uislice.actions;
export default uislice.reducer;
