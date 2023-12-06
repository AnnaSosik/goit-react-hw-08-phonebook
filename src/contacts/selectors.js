
import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'filter/selectors';

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.selectError;


export const selectContacts = state => state.contacts.items;



// The selectVisibleContacts function uses the createSelector function to create a selector that depends on two other selectors: selectContacts and selectFilter.
// The selectVisibleContacts selector returns a filtered array of contacts, where the contact name contact.name contains the filter string filter.

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);