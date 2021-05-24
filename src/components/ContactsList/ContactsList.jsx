import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import ContactItem from '../ContactItem';

import styles from './ContactsList.module.scss';

export default function ContactsList() {
  const contacts = useSelector(state =>
    contactsSelectors.getListContacts(state),
  );

  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };
