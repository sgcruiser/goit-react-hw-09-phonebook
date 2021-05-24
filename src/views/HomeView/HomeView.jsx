import styles from './Home.module.scss';

const HomeView = () => (
  <div className={styles.home__container}>
    <h1 className={styles.home__title}>Welcome to the PhoneBook service!</h1>
  </div>
);

export default HomeView;
