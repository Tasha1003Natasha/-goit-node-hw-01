import module from "path";
import fs from "fs";

const fs = require("fs").promises;
const path = require("path");

const contactsPath = fs.readFile(path.resolve("./contacts.json", "utf8"));

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}
