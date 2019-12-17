import { useState, useEffect } from 'react'
import axios from 'axios'

const defaultUrl =
  'https://randomuser.me/api/?results=100&inc=name,email,phone,location'

export function fetchContacts(apiUrl = defaultUrl) {
  return axios.get(apiUrl).then(res => res.data.results)
}

function useContacts() {
  const [state, setState] = useState([[], true])

  useEffect(() => {
    fetchContacts().then(contacts => setState([contacts, false]))
  }, [])

  return [state]
}

export default useContacts
