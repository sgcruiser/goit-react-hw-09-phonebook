import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      className={styles.link}
      activeClassName={styles.link__active}
    >
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        className={styles.link}
        activeClassName={styles.link__active}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navigation;
