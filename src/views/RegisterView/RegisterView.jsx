import { Component } from 'react';

import Container from '../../components/Container';

import styles from './RegisterView.module.scss';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, disabled: false });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onRegister(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '', disabled: true });
  };

  render() {
    const { name, email, password, disabled } = this.state;

    return (
      <Container>
        <div className={styles.register}>
          <h1 className={styles.register__title}>New User Registration</h1>

          <form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete="off"
          >
            <label className={styles.register__label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className={styles.register__input}
                placeholder="Enter name"
                required
              />
            </label>

            <label className={styles.register__label}>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className={styles.register__input}
                placeholder="Enter e-mail"
                required
              />
            </label>

            <label className={styles.register__label}>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className={styles.register__input}
                placeholder="Enter password"
                required
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
}

export default RegisterView;
