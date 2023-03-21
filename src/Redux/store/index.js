import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../drawer/drawer.slice";
import basketReducer from "../basket/basketSlice";
import lengthReducer from "../productLength/lengthSlice";
export const store = configureStore({
  reducer: {
    drawer: uiReducer,
    basket: basketReducer,
    length: lengthReducer,
  },
});
