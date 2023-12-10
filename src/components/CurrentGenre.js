import { createSlice } from "@reduxjs/toolkit";

export const Category = createSlice({
  name: "Category",
  initialState: {
    idOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectCategory: (state, action) => {
      // console.log(action.payload);
      // in RTK we change state in this way
      state.idOrCategoryName = action.payload;
    },
  },
});

export const { selectCategory } = Category.actions;
// exporting reducer do not forget to attach it in store.js
export default Category.reducer;
