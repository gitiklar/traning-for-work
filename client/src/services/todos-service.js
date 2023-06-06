import http from "../http-common";

class TodosService {
  getAll() {
    return http.get("/todosList");
  }
}

export default new TodosService();
