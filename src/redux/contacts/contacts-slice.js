import { createSlice } from "@reduxjs/toolkit";


const initialState = { 
    items: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchContactsLoading: (state) => {
            state.isLoading = true;
        },
        fetchContactsSucsess: (state, { payload }) => {
            state.isLoading = false;
            state.items = [...payload];
        },
        fetchContactsError: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        addContactsLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        addContactsSucsess: (state, { payload }) => {
            state.isLoading = false;
            state.items = [...state.items, payload];
        },
        addContactsError: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
        deleteContactsLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        deleteContactsSucsess: (state, { payload }) => {
            state.isLoading = false;
            state.items = state.items.filter(item => item.id !== payload.id);
        },
        deleteContactsError: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
            
        },
    }
})

export const { fetchContactsLoading, fetchContactsError, fetchContactsSucsess, addContactsError, addContactsLoading, addContactsSucsess,
deleteContactsError, deleteContactsSucsess, deleteContactsLoading} = contactsSlice.actions;
export default contactsSlice.reducer;