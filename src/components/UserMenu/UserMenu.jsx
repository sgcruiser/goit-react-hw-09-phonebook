import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import styles from './UserMenu.module.scss';

export default function UserMenu() {
  const avatar = defaultAvatar;

  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" width="32" className={styles.avatar} />
      <span className={styles.name}>
        <span>Welcome,</span> {name}
      </span>
      <button type="button" onClick={onLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
}
