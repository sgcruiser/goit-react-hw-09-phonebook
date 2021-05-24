import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import styles from './FormContacts.module.scss';

const initialState = {
  name: '',
  number: '',
  disabled: true,
};

export default function FormContacts() {
  const [state, setState] = useState(initialState);
  const { name, number, disabled } = state;

  const contacts = useSelector(contactsSelectors.getContacts);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (name, number) => {
      dispatch(contactsOperations.addContact(name, number));
    },
    [dispatch],
  );

  const handlChange = event => {
    const { name, value } = event.currentTarget;

    setState(prev => ({ ...prev, [name]: value, disabled: false }));
  };

  const handlSubmit = event => {
    event.preventDefault();

    if (contacts.some(name => name.name === state.name))
      return alert(`This ${state.name} is on the list Phonebook`);

    onSubmit(state);
    reset();
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <form onSubmit={handlSubmit} className={styles.form}>
      <label className={styles.form__label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handlChange}
          className={styles.form__input}
        />
      </label>

      <label className={styles.form__label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={handlChange}
          className={styles.form__input}
        />
      </label>

      <button type="submit" disabled={disabled} className={styles.form__button}>
        Add contact
      </button>
    </form>
  );
}

FormContacts.propTypes = {
  disabled: PropTypes.bool,
};
