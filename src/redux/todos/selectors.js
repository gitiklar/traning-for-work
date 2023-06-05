import { createSelector } from "@reduxjs/toolkit";

const getTodos = (state) => state.todos;

export const getTodosList = createSelector(
  getTodos,
  (todos) => todos.todosList
);
