import PropTypes from 'prop-types';

import styles from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li className={styles.contact__item}>
      <span className={styles.contact__name}>{name}</span>
      <span className={styles.contact__number}>{number}</span>
      <button
        type="button"
        className={styles.contact__button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
