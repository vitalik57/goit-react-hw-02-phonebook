export const getAllContacts = contacts => {
  return { type: "getClient", payload: contacts };
};

export const addContact = contact => ({
  type: "addContact",
  payload: contact
});

export const removeContact = id => ({
  type: "removeContact",
  payload: id
});
