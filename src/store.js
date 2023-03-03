import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './reduxSlice/registerPostSlice';
import loginSlice from './reduxSlice/loginPostSlice';

export const store = configureStore({
  reducer: {
    registerSlice,
    loginSlice,
  },
});
