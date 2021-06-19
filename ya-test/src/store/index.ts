import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";

const reducers = combineReducers({
  searchSlice: searchSlice.reducer,
});

export const store = configureStore({ reducer: reducers });
export type StateType = ReturnType<typeof reducers>;
