import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
    //   .addCase(deleteContacts.rejected, handleRejected)
    //   .addCase(toggleCompleted.pending, handlePending)
    //   .addCase(toggleCompleted.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       task => task.id === action.payload.id
    //     );
    //     state.items.splice(index, 1, action.payload);
    //   })
    //   .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// === МОЙ КОД начало =============================================


// === Начальное состояние state контактов
// const contactsInitialState = [];

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const contactsInitialState = {
//     contacts: {
//         items: [{id: 1, name: 'Yuriy', number: 1234567}],
//         isLoading: false,
//         error: null,
//     }
// };
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// === Обработка экшенов добавления и удаления контактов

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState.contacts,
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // reducers: {
    //     // Добавить контакт
    //     fetchingInProgress(state) {
    //         state.isLoading = true;
    //     },
    //     fetchingSuccess(state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload;
    //     },
    //     // Удалить контакт
    //     fetchingError(state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // },

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     reducer: {
//         [fetchContacts.pending](state) {
//             state.isLoading = true;
//         },
//         [fetchContacts.fulfilled](state, action) {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },
//         [fetchContacts.rejected](state, action) {
//             state.isLoading = false;
//             state.error = action.payload;
//         },
//   },
// });
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// === Обработка экшенов добавления и удаления контактов
// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState,
//     // initialState: contactsInitialState.contacts.items,
//     reducers: {
//         // Добавить контакт
//         addContact: {
//             reducer(state, action) {
//                 // state.push(action.payload);
//                 state.contacts.items.push(action.payload);
//             },
//             prepare(state) {
//                 return {
//                     payload: {
//                         ...state,
//                         // ...state.contacts.items,
//                     },
//                 };
//             },
//         },
//         // Удалить контакт
//         deleteContact(state, action) {
//             // const index = state.findIndex(contact => contact.id === action.payload);
//             // state.splice(index, 1);
//             const index = state.contacts.items.findIndex(contact => contact.id === action.payload);
//             state.contacts.items.splice(index, 1);
//         },
//     }
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;

// >>>>>>>>>>>>>>>>>>>>>>>
// export const contactsReducer = contactsSlice.reducer;
// <<<<<<<<<<<<<<<<<<<<<<<

// === МОЙ КОД конец ========================================================================