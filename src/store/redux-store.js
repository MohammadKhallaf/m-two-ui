import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import wishlistReducer from "./slices/wishlistSlice";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export const useSelectProducts = () => useSelector((state) => state.products);
export const useSelectWishlist = () => useSelector((state) => state.wishlist);

export default store;
