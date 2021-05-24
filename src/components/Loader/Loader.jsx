import { Component } from 'react';

import Loader from 'react-loader-spinner';

import styles from './Loader.module.scss';

export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Rings"
        color="#0071db"
        height={80}
        width={80}
        timeout={3000} //3 secs
        className={styles.Loader}
      />
    );
  }
}
