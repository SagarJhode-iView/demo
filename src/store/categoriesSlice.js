import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  category: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
    setCategory: (state, action) => {
      console.log(action.payload);
      state.category = action.payload;
    },
  },
});

export const { setCategory, setCategoryValue } = categoriesSlice.actions;

export const selectCategory = (state) =>
  state.category.category[state.category.value];

export default categoriesSlice.reducer;
