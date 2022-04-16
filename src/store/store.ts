import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import orderSlice from "./slices/orderSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    orders: orderSlice
  }
});
