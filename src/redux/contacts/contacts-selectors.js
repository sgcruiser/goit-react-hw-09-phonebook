import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getError = state => state.contacts.error;

const getListContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const showListContacts = items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );

    return showListContacts;
  },
);

// eslint-disable-next-line
export default {
  getContacts,
  getLoading,
  getFilter,
  getError,
  getListContacts,
};
