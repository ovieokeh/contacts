import * as React from 'react'
import { TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.less'

import ContactDetails from '../contact-details/ContactDetails'

const renderContactList = (contacts, selectedContact, onContactSelect) =>
  Object.keys(contacts).map(group => {
    const currentGroup = contacts[group]

    return (
      <TabPanel key={group}>
        {currentGroup.map(contact => (
          <ContactDetails
            key={contact.id.value}
            contact={contact}
            onContactSelect={onContactSelect}
            currentlySelected={selectedContact}
          />
        ))}
      </TabPanel>
    )
  })

export default renderContactList
