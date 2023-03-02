import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiRegisterPost } from '../apiFetch/registerPost';

export const userRegisterFetch = createAsyncThunk(
  'userRegister',
  async registerData => {
    const response = await apiRegisterPost(registerData).then(res => {
      if (res.status === 200) {
        alert('işlem başarılı bir şekilde gerçekleşti');
        return res;
      } else {
        alert('işlem başarısız oldu');
      }
    });

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
