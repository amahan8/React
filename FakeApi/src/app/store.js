import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/cart/productSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice,
  },
});
