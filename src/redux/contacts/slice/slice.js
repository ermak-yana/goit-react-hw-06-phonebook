import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const contacts = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    addContact: (state, action) => ({
      items: [...state.items, action.payload],
    }),
    removeContact: (state, action) => ({
      items: state.items.filter(({ id }) => id !== action.payload),
    }),
  },
});

const filtration = createSlice({
  name: "filtration",
  initialState: {
    search: "",
  },
  reducers: {
    filterContacts: (_, { payload }) => ({
      search: payload,
    }),
  },
});

export const { addContact, removeContact } = contacts.actions;
export const { filterContacts } = filtration.actions;

export const phoneBook = combineReducers({
  contacts: contacts.reducer,
  filtration: filtration.reducer,
});
