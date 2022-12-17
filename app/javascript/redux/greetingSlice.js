import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/greetings';
const FETCH = 'hello_rails_react/greetings/FETCH';
const initialState = {
greeting: '',
};

export default ( state = initialState, action) => {
switch (action.type) {
case `${FETCH}/fulfilled`:
return { ...state, greeting: action.payload}
default :
return state;
} 
};

























// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const getGreeting = createAsyncThunk('greeting/getGreeting', async () => {
//   const response = await axios.get('http://127.0.0.1:3000/messages')
//   return response.data
// })

// export const greetingSlice = createSlice({
//   name: 'greeting',

//   initialState: {
//     message: 'hello from slice',
//     loading: 'idle',
//     error: null
//   },

//   reducers: {},

//   extraReducers: (builder) => {
//     builder.addCase(getGreeting.fulfilled, (state, action) => {
//       if (state.loading === 'pending') {
//         state.message = action.payload
//         state.loading = 'idle'
//       }
//     })
//   },

// })

// // Action creators are generated for each case reducer function
// // export const { increment, decrement, /*incrementByAmount*/ } = greetingSlice.actions

// export default greetingSlice.reducer