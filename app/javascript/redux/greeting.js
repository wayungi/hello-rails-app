import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
  const response = await axios.get('http://127.0.0.1:3000/messages/1')
  return response.data
})

export const greetingSlice = createSlice({
  name: 'greeting',

  initialState: {
    message: 'hello from slice',
    loading: 'idle',
    error: null
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    })
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.message = action.payload
        state.loading = 'idle'
      }
    })
    builder.addCase(getGreeting.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = 'Error occured'
      }
    })
  },

})

// Action creators are generated for each case reducer function
// export const { increment, decrement, /*incrementByAmount*/ } = greetingSlice.actions

export default greetingSlice.reducer