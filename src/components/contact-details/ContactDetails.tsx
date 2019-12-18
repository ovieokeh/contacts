import * as React from 'react'
import { Collapse } from 'react-collapse'

import { IContactDetails } from '../../types'
import { getName } from '../helpers'

interface IProps {
  contact: IContactDetails
  currentlySelected: HTMLDivElement
  onContactSelect: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ContactInfo: React.FC<IProps> = ({
  contact,
  currentlySelected,
  onContactSelect
}) => {
  const currentlySelectedId = currentlySelected ? currentlySelected.id : ''
  const isSelected = currentlySelectedId === contact.id.value

  const contactAddress = `${contact.location.street.number} ${contact.location.street.name}, ${contact.location.city}, ${contact.location.state}, ${contact.location.postcode}.`

  return (
    <div
      key={contact.email}
      id={contact.id.value}
      className={`contacts__contact ${isSelected ? 'selected' : ''}`}
      onClick={onContactSelect}
    >
      <p
        className={`contacts__contact__name ${
          isSelected ? 'hidden' : 'visible'
        }`}
      >
        {getName(contact)}
      </p>

      <Collapse
        isOpened={isSelected}
        initialStyle={{ height: '0px', overflow: 'hidden' }}
      >
        <div className="contacts__contact__details">
          <img alt={contact.name.first} src={contact.picture.medium} />
          <p>{getName(contact)}</p>

          <div className="contacts__contact__details__info">
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contactAddress}</p>
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default ContactInfo
