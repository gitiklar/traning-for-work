import { createAsyncThunk } from "@reduxjs/toolkit";

import TodosService from "../../services/todos-service";

export const getTodosListHandler = createAsyncThunk(
  "todos/getTodosList",
  async () => {
    const res = await TodosService.getAll();
    return res.data;
  }
);

export const addTodoHandler = createAsyncThunk(
  "todos/addTodo",
  async (todo) => {
    const res = await TodosService.addTodo(todo);
    return res.data;
  }
);
