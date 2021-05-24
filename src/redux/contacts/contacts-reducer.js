import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

const sortId = payload => payload.sort((a, b) => a.name.localeCompare(b.name));

const filterId = (state, payload) => state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => sortId(payload),
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => filterId(state, payload),
});

const setTrue = () => true;
const setFalse = () => false;

const loading = createReducer(false, {
  [fetchContactsRequest]: setTrue,
  [fetchContactsSuccess]: setFalse,
  [fetchContactsError]: setFalse,
  [addContactRequest]: setTrue,
  [addContactSuccess]: setFalse,
  [addContactError]: setFalse,
  [deleteContactRequest]: setTrue,
  [deleteContactSuccess]: setFalse,
  [deleteContactError]: setFalse,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(false, {
  [fetchContactsRequest]: setFalse,
  [fetchContactsSuccess]: setFalse,
  [fetchContactsError]: setTrue,
  [addContactRequest]: setFalse,
  [addContactSuccess]: setFalse,
  [addContactError]: setTrue,
  [deleteContactRequest]: setFalse,
  [deleteContactSuccess]: setFalse,
  [deleteContactError]: setTrue,
});

export default combineReducers({ items, loading, filter, error });
