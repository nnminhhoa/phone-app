import { configureStore } from "@reduxjs/toolkit";
import productLikeReducer from "./product-wishlist/product-wishlist";
import cartItemsReducer from "./shopping-cart/cartItem";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    productLikeItems: productLikeReducer,
  },
});
