import { ContactList, ContactDetails } from '../../types'

export const alphabet: string[] = Array.apply(
  undefined,
  Array(26)
).map((_, y) => String.fromCharCode(y + 65))

export const groupContacts = (contacts: ContactList) => {
  // to hold the contacts grouped by last name
  const groupedContacts = {}

  // initialise all possible groups
  alphabet.forEach(group => (groupedContacts[group] = []))

  // for each contact
  contacts.forEach(contact => {
    // get the first letter of the last name
    const group = contact.name.last[0]

    if (groupedContacts[group]) {
      // add the contact to its group
      groupedContacts[group].push(contact)
    }
  })

  return groupedContacts
}

export const getName = (contact: ContactDetails) =>
  `${contact.name.first}, ${contact.name.last.toUpperCase()}`
