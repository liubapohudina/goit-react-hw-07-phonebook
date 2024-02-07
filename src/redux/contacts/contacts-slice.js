import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = { 
    items: [],
    isLoading: false,
    error: null,
}
console.log(initialState.error)
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        fetchContactsLoading: (state) => {
            state.isLoading = true;
        },
        fetchContactsSucsess: (state, {payload}) => {
            state.isLoading = false;
            state.items = [...payload];
        },
        fetchContactsError: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
        addContactsLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        addContactsSucsess: (state, {payload}) => {
            state.isLoading = false;
            state.items = [...payload];
        },
        addContactsError: (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        },
        deleteContacts: (state, { payload }) => state.filter(item => item.id !== payload),
        addContacts: {
            reducer: (state, { payload }) => {
               return [...state, payload];  
            },
            prepare: data => {
                return {
                    payload: {
                        id: nanoid(),
                        ...data,
                    }
                }
            }
        }
    }
})

export const { addContacts, deleteContacts, fetchContactsLoading, fetchContactsError, fetchContactsSucsess, addContactsError, addContactsLoading, addContactsSucsess } = contactsSlice.actions;
export default contactsSlice.reducer;