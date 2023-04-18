import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Tony Stack' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Peter Parker' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducer: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
