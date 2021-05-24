import { Component } from 'react';

import Container from '../../components/Container';
import Section from '../../components/Section';
import FormContacts from '../../components/FormContacts';
import SearchContacts from '../../components/SearchContacts';
import ContactsList from '../../components/ContactsList';
import Loader from '../../components/Loader';

import styles from './PhonebookView.module.scss';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div className={styles.phonebook}>
          <Section title="Phonebook">
            <FormContacts />
          </Section>
          {this.props.isLoading && <Loader />}

          <Section title="Contacts">
            <SearchContacts label="Find contacts by name" />
            {this.props.isError ? (
              <p className={styles.phonebook__error}>! Connection error</p>
            ) : (
              <ContactsList />
            )}
          </Section>
        </div>
      </Container>
    );
  }
}

export default PhonebookView;
