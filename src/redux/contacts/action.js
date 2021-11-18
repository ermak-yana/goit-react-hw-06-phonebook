export const addContact = (contacts) => ({
  type: "contact/add",
  payloade: contacts,
});
export const deleteContact = (id) => ({
  type: "contact/delete",
  payloade: { id },
});
