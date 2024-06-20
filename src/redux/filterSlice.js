import { createSlice } from "@reduxjs/toolkit";

// === Начальное состояние state фильтра
const filterInitialState = '';

// === Обработка экшена фильтрации
const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        filterContact(state, action) {
            return state = action.payload.toLowerCase();
        },
    },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;