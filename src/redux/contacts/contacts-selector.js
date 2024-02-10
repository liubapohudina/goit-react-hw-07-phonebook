import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = store => store.contacts.items;

export const selectContactsAll = store => store.contacts;
export const selectFilter = store => store.filter;

export const selectFilterContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
    
        if (!filter || typeof filter !== 'string') {
            return contacts;
        }

        const normalizedFilter = filter.trim().toLowerCase();

        const filteredContacts = contacts.items.filter(({ name }) => {
            const normalizedName = (name || '').trim().toLowerCase();
            return normalizedName.includes(normalizedFilter);
        });
        return filteredContacts;
    }


)

// export const selectFilterContacts = store => {
//     const { contacts, filter } = store;

//   if (!filter || typeof filter !== 'string') {
//         return contacts;
//     }

//     const normalizedFilter = filter.trim().toLowerCase();

//     const filteredContacts = contacts.items.filter(({ name }) => {
//         const normalizedName = (name || '').trim().toLowerCase();
//         return normalizedName.includes(normalizedFilter);
//     });
//     return filteredContacts;
// };