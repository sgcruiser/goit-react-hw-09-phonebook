import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import PhonebookView from './PhonebookView';

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
  isError: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
