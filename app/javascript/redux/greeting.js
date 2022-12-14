import { createSlice } from '@reduxjs/toolkit'

const initialState = {
//   value: 0,
    message: ''
}

export const greetingSlice = createSlice({
//   name: 'counter',
  name: 'greeting',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, /*incrementByAmount*/ } = greetingSlice.actions

export default greetingSlice.reducer