// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';

const store = configureStore({
    reducer: {
        users: userReducer, // Include the user slice
    },
});

export default store;
