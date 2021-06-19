import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  currentData: any;
  status: null | string;
};
const initialState: initialStateType = {
  currentData: {
    docs: null,
  },
  status: null,
};
export const getData = createAsyncThunk(
  "searchSlice/getData",
  async (search: string) => {
    return fetch(`https://openlibrary.org/search.json?q=${search}`).then(
      (res) => res.json()
    );
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
      state.currentData = payload;
      state.status = "success";
    },
    [getData.rejected.toString()]: (state) => {
      state.status = "failed";
    },
  },
  reducers: {},
});
