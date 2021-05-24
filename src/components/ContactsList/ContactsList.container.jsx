import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import ContactsList from './ContactsList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getListContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
