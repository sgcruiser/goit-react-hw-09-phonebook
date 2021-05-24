import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FormContacts.module.scss';

class FormContacts extends Component {
  state = {
    name: '',
    number: '',
    disabled: true,
  };

  handlChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value, disabled: false });
  };

  handlSubmit = event => {
    event.preventDefault();

    if (this.props.contacts.some(name => name.name === this.state.name))
      return alert(`This ${this.state.name} is on the list Phonebook`);

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', disabled: true });
  };

  render() {
    const { name, number, disabled } = this.state;

    return (
      <form onSubmit={this.handlSubmit} className={styles.form}>
        <label className={styles.form__label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handlChange}
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
            onChange={this.handlChange}
            className={styles.form__input}
          />
        </label>

        <button
          type="submit"
          disabled={disabled}
          className={styles.form__button}
        >
          Add contact
        </button>
      </form>
    );
  }
}

FormContacts.propTypes = {
  disabled: PropTypes.bool,
};

export default FormContacts;
