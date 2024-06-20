import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

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

// Конфигурация persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};

// Комбинированный редюсер контактов и фильтра
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

// Сохранение контактов в локальном хранилище
const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedContactsReducer,
    // Прослойка для игнорирования неиспользуемых экшенов
    // (отсутствие этой прослойки вызывает ошибку приложения)
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ),
});

export const persistor = persistStore(store)