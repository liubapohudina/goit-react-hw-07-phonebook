import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        addFilter: (_, { payload }) => {
        let filter = payload.filter
        return filter
        },
    }

})

export const { addFilter } = filterSlice.actions;
export default filterSlice.reducer;