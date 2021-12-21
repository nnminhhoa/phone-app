import { createSlice } from "@reduxjs/toolkit";

const productLikeItems =
  localStorage.getItem("likeItems") !== null
    ? JSON.parse(localStorage.getItem("likeItems"))
    : [];

const initialState = {
  value: productLikeItems,
};

export const productLikeSlice = createSlice({
  name: "likeItems ",
  initialState,
  reducers: {
    addLikeItem: (state, action) => {
      const newLikeItem = action.payload;
      const duplicate = findItem(state.value, newLikeItem);

      if (duplicate.length > 0) {
        state.value = delItem(state.value, newLikeItem);

        state.value = [
          ...state.value,
          {
            ...newLikeItem,
            id: duplicate[0].id,
            quantity: newLikeItem.quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newLikeItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }

      localStorage.setItem("likeItems", JSON.stringify(sortItem(state.value)));
    },
    updateLikeItem: (state, action) => {
      const LikeItemUpdate = action.payload;

      const item = findItem(state.value, LikeItemUpdate);

      if (item.length > 0) {
        state.value = delItem(state.value, LikeItemUpdate);
        state.value = [
          ...state.value,
          {
            ...LikeItemUpdate,
            id: item[0].id,
          },
        ];
        localStorage.setItem(
          "likeItems",
          JSON.stringify(sortItem(state.value))
        );
      }
    },
    removeLikeItem: (state, action) => {
      const itemLike = action.payload;
      state.value = delItem(state.value, itemLike);

      localStorage.setItem("likeItems", JSON.stringify(sortItem(state.value)));
    },
  },
});

const findItem = (arr, item) => arr.filter((e) => e.slug === item.slug);

const delItem = (arr, item) => arr.filter((e) => e.slug !== item.slug);

const sortItem = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addLikeItem, removeLikeItem, updateLikeItem } =
  productLikeSlice.actions;
export default productLikeSlice.reducer;
