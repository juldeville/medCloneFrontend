import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Work in Progress.

type PayloadBookmark = {
  avatar: string | null;
  author: string | null;
  title: string | null;
  description: string | null;
  date: string | null;
  image: string | null;
};

export type BookmarkState = {
  value: PayloadBookmark[];
};

const initialState: BookmarkState = {
  value: [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmarkToStore: (
      state: BookmarkState,
      action: PayloadAction<PayloadBookmark>
    ) => {
      state.value.push(action.payload);
    },
  },
});

export const { addBookmarkToStore } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
