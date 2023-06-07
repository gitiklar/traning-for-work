const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  text: String,
  isDone: Boolean,
});

const getTodosList = async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
};

const addTodoItem = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    isDone: req.body.isDone,
  });
  const todoRes = await todo.save();
  res.json(todoRes);
};

module.exports = {
  getTodosList,
  addTodoItem,
};
