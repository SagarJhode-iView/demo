import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
