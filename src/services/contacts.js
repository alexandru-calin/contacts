import localforage from 'localforage';

const getContacts = async function () {
  let contacts = await localforage.getItem('contacts');
  if (!contacts) contacts = [];

  return contacts;
};

const getContact = async function (id) {
  const contacts = await localforage.getItem('contacts');
  const contact = contacts.find((contact) => contact.id === id);

  return contact;
};

export { getContacts, getContact };
