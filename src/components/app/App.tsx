import * as React from 'react'
import Loader from 'react-loader'

import useContacts from './useContacts'
import ContactList from '../contact-list/ContactList'
import './App.less'

const App: React.FC = () => {
  const [contacts, isLoading] = useContacts()

  return (
    <main className="app">
      <Loader loaded={isLoading}>
        <ContactList contacts={contacts} />
      </Loader>
    </main>
  )
}

export default App
