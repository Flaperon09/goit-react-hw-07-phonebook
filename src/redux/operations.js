import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactsSlice";


axios.defaults.baseURL = "https://66746d3275872d0e0a966933.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        // HTTP-запрос
        const response = await axios.get("/contacts");
        console.log("response.data: ", response.data);
        // При успешном запросе возвращаем промис с данными
        return response.data;
    } catch (event) {
        // При ошибке запроса возвращаем промис,
        // который будет отклонен с текстом ошибки
        return thunkAPI.rejectWithValue(event.message);
    } 
});

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async (text, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", text);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);