import { createSlice } from "@reduxjs/toolkit";

// === Начальное состояние state контактов
const contactsInitialState = [];

// === Обработка экшенов добавления и удаления контактов
const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        // Добавить контакт
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(state) {
                return {
                    payload: {
                        ...state,
                    },
                };
            },
        },
        // Удалить контакт
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;