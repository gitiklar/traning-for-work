import { createSlice } from "@reduxjs/toolkit";
import { addTodoHandler, getTodosListHandler } from "./actions";

const initialState = {
  todosList: null,
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    statusChange(state, action) {
      const index = state.todosList.findIndex(
        (item) => item._id === action.payload._id
      );
      state.todosList[index].isDone = action.payload.isDone;
    },
    deleteItem(state, action) {
      const index = state.todosList.findIndex(
        (item) => item._id === action.payload
      );
      state.todosList.splice(index, 1);
    },
  },
  extraReducers: {
    [getTodosListHandler.fulfilled]: (state, action) => {
      state.todosList = action.payload;
    },
    [addTodoHandler.fulfilled]: (state, action) => {
      state.todosList.push(action.payload);
    },
  },
});

export const { statusChange, deleteItem } = slice.actions;
export default slice.reducer;
