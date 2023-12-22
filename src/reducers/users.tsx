import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  value: {
    token: string | null;
    username: string | null;
  };
};
type PayloadToken = {
  token: string;
};
type PayloadUsername = {
  username: string;
};

const initialState: UserState = {
  value: { token: null, username: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTokenToStore: (
      state: UserState,
      action: PayloadAction<PayloadToken>
    ) => {
      state.value.token = action.payload.token;
      console.log("state value token is:", state.value.token);
    },
    addUsernameToStore: (
      state: UserState,
      action: PayloadAction<PayloadUsername>
    ) => {
      state.value.username = action.payload.username;
      console.log("state value username is:", state.value.username);
    },
    resetDefaultStore: (state: UserState) => {
      state.value.token = null;
      state.value.username = null;
    },
  },
});

export const { addTokenToStore, addUsernameToStore, resetDefaultStore } =
  userSlice.actions;
export default userSlice.reducer;
