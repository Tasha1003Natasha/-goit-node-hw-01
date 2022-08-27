const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve(__dirname, "./contacts.json");

// TODO: задокументувати кожну функцію
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
    const removeList = listContacts.filter(
      (contact) => contact.id !== contactId
    );
    let parseContact = JSON.stringify(removeList);
    console.table(parseContact);
    const removeContact = await fs.writeFile(
      contactsPath,
      parseContact,
      "utf8"
    );
    console.table(removeContact);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error}`);
  }
}

//////////////////////////////////////////////////////

// async function addContact(name, email, phone) {
//   try {
//     let addContact = JSON.stringify(name, email, phone);
//     // const addContact = `${name},${email},${phone}`;
//     // await fs.appendFile(contactsPath, addContact);
//     await fs.appendFile(contactsPath, {
//       addContact: {
//         name: `${name}`,
//         email: `${email}`,
//         phone: `${phone}`,
//       },
//     });
//   } catch (error) {
//     console.error(`Got an error trying to write to a file: ${error}`);
//   }
// }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
