import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: { nav: navReducer, Product: productsSlice },
});

export default store;
