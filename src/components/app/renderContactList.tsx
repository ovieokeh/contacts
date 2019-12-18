import * as React from 'react'
import { TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.less'

import ContactDetails from '../contact-details/ContactDetails'
import { IGroupedContacts } from '../../types'

const renderContactList = (
  contacts: IGroupedContacts,
  selectedContact: HTMLDivElement,
  onContactSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) =>
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
