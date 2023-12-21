import { createSlice } from "@reduxjs/toolkit";

export let stock = createSlice({
    name: 'stock',
    initialState: [10, 2, 5, 9, 70]
})