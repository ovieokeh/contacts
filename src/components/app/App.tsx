import * as React from 'react'
import Loader from 'react-loader'
import { Tab, Tabs, TabList } from 'react-tabs'

import useContacts from './useContacts'
import renderContactList from './renderContactList'
import { groupContacts } from '../helpers'

import 'react-tabs/style/react-tabs.less'
import './App.less'

const renderHeaderTabs = groupedContacts => {
  const groups = Object.keys(groupedContacts).sort()

  return groups.map(group => (
    <Tab disabled={!groupedContacts[group].length} key={group}>
      <p>
        {group}
        <span>{groupedContacts[group].length}</span>
      </p>
    </Tab>
  ))
}

const App: React.FC = () => {
  const [selectedContact, setSelectedContact] = React.useState(null)
  const [contacts, isLoading] = useContacts()
  const groupedContacts = groupContacts(contacts)

  function onContactSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement

    if (!target.id) return

    if (selectedContact && target.id === 'reset') {
      setSelectedContact(null)
      return
    }

    setSelectedContact(target)
  }

  return (
    <main className="app">
      <Loader loaded={isLoading}>
        <div className="contacts-container">
          <h2 className="contacts-container__heading">My Contact List</h2>

          <Tabs onSelect={() => setSelectedContact(null)}>
            <TabList>{renderHeaderTabs(groupedContacts)}</TabList>
            <div className="contacts">
              {renderContactList(
                groupedContacts,
                selectedContact,
                onContactSelect
              )}
            </div>
          </Tabs>
        </div>
      </Loader>
    </main>
  )
}

export default App
