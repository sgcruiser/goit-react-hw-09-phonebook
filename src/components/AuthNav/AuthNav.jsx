import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import styles from './AuthNav.module.scss';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to={routes.register}
        exact
        className={styles.link}
        activeClassName={styles.link__active}
      >
        Sing up
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        className={styles.link}
        activeClassName={styles.link__active}
      >
        Login
      </NavLink>
    </div>
  );
}
