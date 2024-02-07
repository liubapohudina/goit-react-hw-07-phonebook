

export const contacts = store => store.contacts;

export const filterContacts = store => {
    const { contacts, filter } = store;

  if (!filter || typeof filter !== 'string') {
        return contacts;
    }

    const normalizedFilter = filter.trim().toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
        const normalizedName = (name || '').trim().toLowerCase();
        return normalizedName.includes(normalizedFilter);
    });

    return filteredContacts;
};
