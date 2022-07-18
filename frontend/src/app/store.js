import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlise'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
