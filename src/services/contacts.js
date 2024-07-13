import localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';

const getContacts = async function () {
  let contacts = await localforage.getItem('contacts');
  if (!contacts) contacts = [];

  return contacts;
};

const getContact = async function (id) {
  const contacts = await getContacts();
  const contact = contacts.find((contact) => contact.id === id);

  return contact;
};

const createContact = async function () {
  const contacts = await getContacts();
  const contact = { id: uuidv4().substring(1, 8), createdAt: Date.now() };
  await localforage.setItem('contacts', [contact, ...contacts]);

  return contact;
};

export { getContacts, getContact, createContact };
