import PropTypes from 'prop-types';
import styles from './UserMenu.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
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

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
