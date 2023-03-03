import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLoginPost } from '../apiFetch/loginPost';

export const apiLoginPostFetch = createAsyncThunk(
  'userLogin',
  async a => {
    const response = await apiLoginPost(a.loginData).then(res => {
      if (res.status === 200) {
        a.navigate('/home')
        return res;
      } else {
        alert('işlem başarısız oldu');
      }
    });

    return response?.data;
  }
);

const initialState = {
  loginData: '',
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(apiLoginPostFetch.fulfilled, (state, action) => {
      state.loginData = action.payload;
    });
  },
});

export default loginSlice.reducer;
