import http from "../http-common";

class TodosService {
  getAll() {
    return http.get("/todosList");
  }
  addTodo(todo) {
    return http.post("/todos", todo);
  }
}

export default new TodosService();
