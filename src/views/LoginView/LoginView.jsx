import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import Container from '../../components/Container';

import styles from './LoginView.module.scss';

const initialState = {
  email: '',
  password: '',
  disabled: true,
};

export default function LoginView() {
  const [state, setState] = useState(initialState);
  const { email, password, disabled } = state;
  const dispatch = useDispatch();

  const onLogin = useCallback(
    state => {
      dispatch(authOperations.logIn(state));
    },
    [dispatch],
  );

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value, disabled: false }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    onLogin(state);
    reset();
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <Container>
      <div className={styles.login}>
        <h1 className={styles.login__title}>Login in ...</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.login__form}
          autoComplete="off"
        >
          <label className={styles.login__label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={styles.login__input}
              placeholder="Enter e-mail"
              required
            />
          </label>

          <label className={styles.login__label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={styles.login__input}
              placeholder="Enter password"
              required
            />
          </label>

          <button
            type="submit"
            disabled={disabled}
            className={styles.login__button}
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
}
