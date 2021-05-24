import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import { authSelectors } from '../../redux/auth';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
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
}
