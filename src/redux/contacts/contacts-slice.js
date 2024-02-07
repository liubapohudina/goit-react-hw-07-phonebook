import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

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
        fetchContactsSucsess: (state, {payload}) => {
            state.isLoading = false;
            state.items = [...payload];
        },
        fetchContactsError: (state, {payload}) => {
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

export const { addContacts, deleteContacts, fetchContactsLoading, fetchContactsError, fetchContactsSucsess } = contactsSlice.actions;
export default contactsSlice.reducer;