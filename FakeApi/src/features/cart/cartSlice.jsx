import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      if (index >= 0) {
        state.items[index].quantity += 1;
        console.log("button clicked");
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
        state.totalQuantity += 1;
      }
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (index >= 0) {
        state.items[index].quantity -= 1;
        state.totalAmount -= state.items[index].price;
        if (state.items[index].quantity == 0) {
          state.totalQuantity -= 1;
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
