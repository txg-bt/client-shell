import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

const userActions = userSlice.actions;

export { userActions };

export default userSlice.reducer;
