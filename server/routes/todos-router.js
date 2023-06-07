const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos-controller");

router.get("/todosList", todosController.getTodosList);
router.post("/todos", todosController.addTodoItem);

module.exports = router;

// // Create a route to update a todo
// router.put("/todos/:id", (req, res) => {
//   Todo.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(todo);
//     }
//   });
// });

// // Create a route to delete a todo
// router.delete("/todos/:id", (req, res) => {
//   Todo.findByIdAndRemove(req.params.id, (err, todo) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(todo);
//     }
//   });
// });
