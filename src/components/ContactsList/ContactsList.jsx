import PropTypes from 'prop-types';

import ContactItem from '../ContactItem';

import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, onDeleteContact }) => {
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
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
