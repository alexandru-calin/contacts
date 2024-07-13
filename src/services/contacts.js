import localforage from 'localforage';

const getContacts = async function () {
  let contacts = await localforage.getItem('contacts');
  if (!contacts) contacts = [];

  return contacts;
};

export { getContacts };
