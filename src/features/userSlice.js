import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  name: null,
  tariff: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.user = action.payload;
    },

    getTariff: (state, action) => {
      state.tariff = action.payload;
    },
    clearUserObj: (state) => {
      state.user = null;
      state.tariff = null;
    }
  }
});

export const { getUserInfo, getTariff, clearUserObj } = userSlice.actions;

export default userSlice.reducer;
