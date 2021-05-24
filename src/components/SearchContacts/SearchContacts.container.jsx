import { connect } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import { changeFilter } from '../../redux/contacts/contacts-actions';

import SearchContacts from './SearchContacts';

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContacts);
