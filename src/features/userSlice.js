import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  tariff: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.name = action.name;
      state.email = action.email;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
    }
  }
});

export const { getUserInfo, logout } = userSlice.actions;

export default userSlice.reducer;
