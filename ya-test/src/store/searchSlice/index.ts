import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currentResponseDataType } from "../../types";

type initialStateType = {
  currentResponseData: currentResponseDataType;
  status: string;
};
const initialState: initialStateType = {
  currentResponseData: {
    docs: null,
  },
  status: "null",
};
export const getData = createAsyncThunk(
  "searchSlice/getData",
  async (search: string) => {
    return fetch(
      `https://openlibrary.org/search.json?${search ? "title=" + search : "q="}`
    ).then((res) => res.json());
  }
);
export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  extraReducers: {
    [getData.pending.toString()]: (state) => {
      state.status = "loading";
    },
    [getData.fulfilled.toString()]: (state, { payload }) => {
      state.currentResponseData = payload;
      state.status = "success";
    },
    [getData.rejected.toString()]: (state) => {
      state.status = "failed";
    },
  },
  reducers: {},
});
