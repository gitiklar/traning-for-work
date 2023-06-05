import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todosList: [
    {
      text: "aaaaa",
      isDone: false,
    },
    {
      text: "xxxxx",
      isDone: true,
    },
    {
      text: "fffff",
      isDone: true,
    },
    {
      text: "hhhhh",
      isDone: false,
    },
    {
      text: "zzzzz",
      isDone: true,
    },
  ],
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todosList.push({ ...action.payload, id: nanoid() });
    },
    statusChange(state, action) {},
  },
});

export const { addTodo, statusChange } = slice.actions;
export default slice.reducer;
