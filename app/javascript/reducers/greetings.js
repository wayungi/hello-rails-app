import { createAsyncThunk } from '@reduxjs/toolkit';
const API_URL = 'http://127.0.0.1:3000/greetings';
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

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.message;
});