import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './reduxSlice/registerPostSlice';

export const store = configureStore({
  reducer: {
    registerSlice: registerSlice,
  },
});
