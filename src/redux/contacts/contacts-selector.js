

export const contacts = store => store.contacts.items;

export const filterContacts = store => {
    const { contacts, filter } = store;

  if (!filter || typeof filter !== 'string') {
        return contacts.items;
    }

    const normalizedFilter = filter.trim().toLowerCase();

    const filteredContacts = contacts.items.filter(({ name }) => {
        const normalizedName = (name || '').trim().toLowerCase();
        return normalizedName.includes(normalizedFilter);
    });
    console.log(filteredContacts)
    return filteredContacts;
};