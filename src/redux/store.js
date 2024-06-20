import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// Комбинированный редюсер контактов и фильтра
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});