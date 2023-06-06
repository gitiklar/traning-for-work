const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos-controller");

router.get("/todosList", todosController.getTodosList);

module.exports = router;
