import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiRegisterPost } from '../apiFetch/registerPost';

export const userRegisterFetch = createAsyncThunk(
  'userRegister',
  async a => {
    const response = await apiRegisterPost(a.registerData).then(res => {
      
    }).finally(a.navigate('/login'))

    return response?.data;
  }
);

const initialState = {
  userRegisterData: '',
};

export const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(userRegisterFetch.fulfilled, (state, action) => {
      state.userRegisterData = action.payload;
    });
  },
});

export default registerSlice.reducer;
