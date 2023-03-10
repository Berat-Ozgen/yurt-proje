import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiLoginPost } from '../apiFetch/loginPost';

export const apiLoginPostFetch = createAsyncThunk('userLogin', async a => {
  console.log(a);
  const response = await apiLoginPost(a.loginPost).then(res => {
    if (res.status === 200) {
      a.navigate('/home');
      return res;
    } else {
      alert('işlem başarısız oldu');
    }
  });

  return response?.data;
});

const userData = localStorage.getItem('user');

const initialState = {
  loginData: userData ? JSON.parse(userData) : null,
};

const filteredObj = action => {
  return Object.keys(action.payload)
    .filter(key => key !== 'password')
    .reduce((res, key) => ((res[key] = action.payload[key]), res), {});
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    logOut: state => {
      localStorage.removeItem('user');
      window.location.reload();
    },
  },
  extraReducers(builder) {
    builder.addCase(apiLoginPostFetch.fulfilled, (state, action) => {
      localStorage.setItem('user', JSON.stringify(filteredObj(action)));
      state.loginData = filteredObj(action);
    });
  },
});

export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
