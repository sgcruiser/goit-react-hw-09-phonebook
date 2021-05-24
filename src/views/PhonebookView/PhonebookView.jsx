import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-dom';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import Container from '../../components/Container';
import Section from '../../components/Section';
import FormContacts from '../../components/FormContacts';
import SearchContacts from '../../components/SearchContacts';
import ContactsList from '../../components/ContactsList';
import Loader from '../../components/Loader';

import styles from './PhonebookView.module.scss';

export default function PhonebookView() {
  const dispatch = useDispatch();

  const isLoading = useSelector(contactsSelectors.getLoading);

  const isError = useSelector(contactsSelectors.getError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className={styles.phonebook}>
        <Section title="Phonebook">
          <FormContacts />
        </Section>
        {isLoading && <Loader />}

        <Section title="Contacts">
          <SearchContacts label="Find contacts by name" />
          {isError ? (
            <p className={styles.phonebook__error}>! Connection error</p>
          ) : (
            <ContactsList />
          )}
        </Section>
      </div>
    </Container>
  );
}
