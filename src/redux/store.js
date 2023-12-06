import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from 'redux/auth/slice';
import { contactsReducer } from '../contacts/contactSlice';
import { filterReducer } from '../filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';



const middleware = [
  ...getDefaultMiddleware({
    serializableCheck:{
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER]
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
    auth: persistReducer(authPersistConfig, authReducer),// Reducer for filter state management
  },
  // Apply middleware with getDefaultMiddleware
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// Creating persistent storage that retains the state of the Redux store when the page reloads
export const persistor = persistStore(store);
