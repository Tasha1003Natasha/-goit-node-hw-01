const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve(__dirname, "./contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(data);
    console.table(listContacts);
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error}`);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(data);
    const getContact = listContacts.find((contact) => contact.id === contactId);
    console.table(getContact);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error}`);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(data);

    const newList = listContacts.filter((contact) => contact.id !== contactId);
    console.table(newList);

    const removeContact = await fs.writeFile(
      contactsPath,
      JSON.stringify(listContacts),
      "utf8"
    );
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error}`);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    let listContacts = JSON.parse(data);

    let idContact = listContacts.length + 1;

    listContacts.push({
      id: idContact.toString(),
      name: name,
      email: email,
      phone: phone,
    });
    console.table(listContacts);

    const addContact = await fs.writeFile(
      contactsPath,
      JSON.stringify(listContacts),
      "utf8"
    );
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error}`);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
