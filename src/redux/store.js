import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../redux/Category/CategorySlice";
import BrandReducer from "./Brand/BrandSlice";
export const store = configureStore({
  reducer: {
    category: CategoryReducer,
    brand: BrandReducer,
  },
});
