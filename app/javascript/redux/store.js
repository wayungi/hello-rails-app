import { configureStore } from '@reduxjs/toolkit'
import greetReducer from './greeting';

export const store = configureStore({
  reducer: {
    greet: greetReducer
  },
})