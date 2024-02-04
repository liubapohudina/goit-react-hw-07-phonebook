import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
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
export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;