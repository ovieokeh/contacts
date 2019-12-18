export type IContactDetails = {
  id: {
    value: string
  }
  name: {
    title: string
    first: string
    last: string
  }
  location: {
    street: {
      number: number
      name: string
    }
    city: string
    state: string
    country: string
    postcode: number
    coordinates: {
      latitude: string
      longitude: string
    }
    timezone: {
      offset: string
      description: string
    }
  }
  email: string
  phone: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
}

export type IContactList = IContactDetails[]

export type IContactsState = [IContactList, boolean]
