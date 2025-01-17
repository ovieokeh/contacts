import { useState, useEffect } from 'react'
import axios from 'axios'

import { IContactsState, IContactList } from '../../types'

const defaultUrl =
  'https://randomuser.me/api/?results=200&inc=id,name,email,phone,location,picture&nat=nl'

export function fetchContacts(apiUrl = defaultUrl) {
  return axios.get(apiUrl).then(res => res.data.results)
}

function useContacts(): IContactsState {
  const [state, setState] = useState<IContactsState>([[], false])

  useEffect(() => {
    fetchContacts().then((contacts: IContactList) => {
      const sortedContacts = contacts.sort((a, b) => {
        if (a.name.last < b.name.last) return -1
        if (a.name.last > b.name.last) return 1

        return 0
      })

      setState([sortedContacts, true])
    })
  }, [])

  return [state[0], state[1]]
}

export default useContacts
