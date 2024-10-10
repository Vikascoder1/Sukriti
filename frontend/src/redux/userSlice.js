
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the API base URL
const API_URL = 'http://localhost:5000/api/users';

// Fetch users action
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(API_URL);
    return response.data; // Return the user data from the response
});

// Add user action
export const addUser = createAsyncThunk('users/addUser', async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data; // Return the newly added user
});

// Update user action
export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
    const response = await axios.put(`${API_URL}/${user._id}`, user);
    return response.data; // Return the updated user
});

// Delete user action
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id; // Return the deleted user's id
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true; 
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false; 
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false; 
                state.error = action.error.message; 
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload); 
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex((user) => user._id === action.payload._id);
                if (index !== -1) {
                    state.users[index] = action.payload; 
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user._id !== action.payload); 
            });
    },
});

export default userSlice.reducer;
