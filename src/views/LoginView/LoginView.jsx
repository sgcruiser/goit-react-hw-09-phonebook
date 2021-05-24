import { Component } from 'react';

import Container from '../../components/Container';

import styles from './LoginView.module.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, disabled: false });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onLogin(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '', disabled: true });
  };

  render() {
    const { email, password, disabled } = this.state;

    return (
      <Container>
        <div className={styles.login}>
          <h1 className={styles.login__title}>Login in ...</h1>

          <form
            onSubmit={this.handleSubmit}
            className={styles.login__form}
            autoComplete="off"
          >
            <label className={styles.login__label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
}

export default Login;
