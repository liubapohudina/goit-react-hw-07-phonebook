import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchAddContacts, fetchDeleteContacts } from "./contacts-operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

/*------------deafaul func for status query----------*/

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
       reducers: {
        // fetchContactsLoading: (state) => {
        //     state.isLoading = true;
        // },
        // fetchContactsSucsess: (state, { payload }) => {
        // state.isLoading = false;
        // state.items = [...payload];
        // },
        // fetchContactsError: (state, { payload }) => {
        //     state.isLoading = false;
        //     state.error = payload;
        // },
        // addContactsLoading: (state) => {
        //     state.isLoading = true;
        //     state.error = null;
        // },
        // addContactsSucsess: (state, { payload }) => {
        //     state.isLoading = false;
        //     state.items = [...state.items, payload];
        // },
        // addContactsError: (state, { payload }) => {
        //     state.isLoading = false;
        //     state.error = payload;
        // },
        // deleteContactsLoading: (state) => {
        //     state.isLoading = true;
        //     state.error = null;
        // },
        // deleteContactsSucsess: (state, { payload }) => {
        //     state.isLoading = false;
        //     state.items = state.items.filter(item => item.id !== payload.id);
        // },
        // deleteContactsError: (state, { payload }) => {
        //     state.isLoading = false;
        //     state.error = payload;
            
        // },
    },
    extraReducers: (builder) => {
        builder
            /*---------------FOR GET ALL CONTACTS-------------*/
            .addCase(fetchContacts.pending, (state) => { state.isLoading = true })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.items = [...payload];
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
             state.isLoading = false;
             state.error = payload;
            })
            /*----------------FOR ADD CONTACTS-----------------*/
            .addCase(fetchAddContacts.pending, (state) => { state.isLoading = true })
            .addCase(fetchAddContacts.fulfilled,  (state, { payload }) => {
             state.isLoading = false;
             state.items = [...state.items, payload];
            })
            .addCase(fetchAddContacts.rejected, (state, { payload }) => {
             state.isLoading = false;
             state.error = payload;
            })
            /*---------------FOR DELETE CONTACTS----------------*/
            .addCase(fetchDeleteContacts.pending, (state) => { state.isLoading = true })
            .addCase(fetchDeleteContacts.fulfilled,  (state, { payload }) => {
            state.isLoading = false;
            state.items = state.items.filter(item => item.id !== payload.id);
            })
            .addCase(fetchDeleteContacts.rejected, (state, { payload }) => {
             state.isLoading = false;
             state.error = payload;
            })
            
    }
})

export default contactsSlice.reducer;