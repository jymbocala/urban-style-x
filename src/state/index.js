import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart slice
const initialState = {
  isCartOpen: false, // Indicates whether the cart is currently open
  cart: [], // Array to store items in the cart
  items: [], // Array to store all available items
};

// Create a cart slice using Redux Toolkit
export const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Action to set the items in the store
    setItems: (state, action) => {
      state.items = action.payload;
    },

    // Action to add an item to the cart
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    // Action to increase the count of a specific item in the cart
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    // Action to decrease the count of a specific item in the cart
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    // Action to toggle the cart open/close state
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

// Extract the actions generated by the cart slice
export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

// Export the cart reducer
export default cartSlice.reducer;