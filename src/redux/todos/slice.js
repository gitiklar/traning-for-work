import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
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
