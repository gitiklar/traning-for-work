import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todos/slice";
import { localStorageMiddleware } from "./middlewares";

const store = configureStore({
  reducer: { todos: todosReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
export default store;
