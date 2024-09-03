import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  progress: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      // populate user data and progress here
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.progress = {};
    },
    updateProgress: (state, action) => {
      const { moduleId, progressData } = action.payload;
      state.progress[moduleId] = progressData;
    },
  },
});

export const { login, logout, updateProgress } = userSlice.actions;

export default userSlice.reducer;
