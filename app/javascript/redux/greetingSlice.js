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
