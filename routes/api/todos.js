const express = require("express");
const router = express.Router();
const todosCtrl = require("../../controllers/api/todos");

//Get todos list
app.get("/todos", getTodos);

//Create New todo
app.post("/todos", createTodo);

//Update todo
app.put("/todos/:id", updateTodo);

//delete todo
app.delete("/todos/:id", deleteTodo);
