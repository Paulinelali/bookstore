import { createSlice } from "@reduxjs/toolkit";

const initialState = { categories: [] };

const categoriesSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        status: state => "Under Construction",
    }
});

export default categoriesSlice.reducer;
export const { status } = categoriesSlice.actions;