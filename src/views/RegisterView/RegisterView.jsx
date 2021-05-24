import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import Container from '../../components/Container';

import styles from './RegisterView.module.scss';

const initialState = {
  name: '',
  email: '',
  password: '',
  disabled: true,
};

export default function RegisterView() {
  const [state, setState] = useState(initialState);
  const { name, email, password, disabled } = state;
  const dispatch = useDispatch();

  const onRegister = useCallback(
    state => {
      dispatch(authOperations.register(state));
    },
    [dispatch],
  );

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value, disabled: false }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onRegister(state);
    reset();
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <Container>
      <div className={styles.register}>
        <h1 className={styles.register__title}>New User Registration</h1>

        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label className={styles.register__label}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={handleChange}
              className={styles.register__input}
            />
          </label>

          <label className={styles.register__label}>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter e-mail"
              required
              value={email}
              onChange={handleChange}
              className={styles.register__input}
            />
          </label>

          <label className={styles.register__label}>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={handleChange}
              className={styles.register__input}
            />
          </label>

          <button
            type="submit"
            disabled={disabled}
            className={styles.register__button}
          >
            Create account
          </button>
        </form>
      </div>
    </Container>
  );
}
