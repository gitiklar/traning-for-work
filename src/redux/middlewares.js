export const localStorageMiddleware = (api) => (next) => (action) => {
  next(action);
  localStorage.setItem(
    "todosList",
    JSON.stringify(api.getState().todos.todosList)
  );
};
