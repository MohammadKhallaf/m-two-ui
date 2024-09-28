import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    setWishlist(state, action) {
      return action.payload;
    },
    addToWishlist(state, action) {
      // action.payload -> product
      state.push(action.payload);
    },
    removeFromWishlist(state, action) {
      return state.filter((item) => {
        return item._id !== action.payload._id;
      });
    },
    clearWishlist(state, action) {
      return [];
    },
  },
});

// export actions
export const { setWishlist, addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
