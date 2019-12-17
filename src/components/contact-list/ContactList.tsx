import * as React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.less'

import { getName, groupContacts } from './helpers'
import { ContactList } from '../../types'
import './ContactList.less'

interface Props {
  contacts: ContactList
}

const renderTabLists = groupedContacts => {
  const groups = Object.keys(groupedContacts).sort()

  return groups.map(group => (
    <Tab disabled={!groupedContacts[group].length} key={group}>
      {group}
    </Tab>
  ))
}

const renderContacts = (contacts: ContactList) =>
  contacts.map(contact => (
    <div key={contact.email} className="contacts__contact">
      {getName(contact)}
    </div>
  ))

const renderTabPanels = groupedContacts =>
  Object.keys(groupedContacts).map(group => (
    <TabPanel key={group}>{renderContacts(groupedContacts[group])}</TabPanel>
  ))

const ContactList: React.FC<Props> = ({ contacts }) => {
  const groupedContacts = groupContacts(contacts)

  return (
    <div className="contacts-container">
      <h2 className="contacts-container__heading">My Contact List</h2>
      <Tabs>
        <TabList>{renderTabLists(groupedContacts)}</TabList>

        <div className="contacts">{renderTabPanels(groupedContacts)}</div>
      </Tabs>
    </div>
  )
}

export default ContactList
