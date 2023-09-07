import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: function (state, action) {
      return action.payload;
    },
    removeUser: function (state, action) {
      return null;
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
