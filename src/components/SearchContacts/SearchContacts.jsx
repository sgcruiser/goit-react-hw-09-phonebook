import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsSelectors } from '../../redux/contacts';
import { changeFilter } from '../../redux/contacts/contacts-actions';

import styles from './SearchContacts.module.scss';

export default function SearchContacts({ label }) {
  const value = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  const onChange = useCallback(
    event => {
      dispatch(changeFilter(event.target.value));
    },
    [dispatch],
  );

  return (
    <label className={styles.search}>
      <span className={styles.search__title}>{label}</span>
      <input
        type="text"
        name="name"
        placeholder="Search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={onChange}
        className={styles.search__input}
      />
    </label>
  );
}

SearchContacts.defaultProps = {
  label: '',
};

SearchContacts.propTypes = {
  label: PropTypes.string,
};
