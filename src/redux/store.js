import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { contactsReducer } from '../redux/contacts/contactSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Creating a Redux store with configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Reduxer for contact state management
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer), // Reducer for filter state management
  },
  // Apply middleware with getDefaultMiddleware
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// Creating persistent storage that retains the state of the Redux store when the page reloads
export const persistor = persistStore(store);
