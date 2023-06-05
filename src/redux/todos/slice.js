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
    statusChange(state, action) {
      const index = state.todosList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todosList[index].isDone = action.payload.isDone;
    },
    deleteItem(state, action) {
      const index = state.todosList.findIndex(
        (item) => item.id === action.payload
      );
      state.todosList.splice(index, 1);
    },
  },
});

export const { addTodo, statusChange, deleteItem } = slice.actions;
export default slice.reducer;
