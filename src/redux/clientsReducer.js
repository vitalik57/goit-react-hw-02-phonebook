const ClientsReducer = (state = [], action) => {
  switch (action.type) {
    case "addContact":
      return [...state, action.payload];
    case "removeContact":
      return [...state.filter(contact => contact.id !== action.payload)];
    case "getContacts":
      return action.payload;
    default:
      return state;
  }
};
export default ClientsReducer;
