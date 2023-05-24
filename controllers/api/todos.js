const mongoose = require("mongoose");
const Todos = require("../../models/todoSchema");

//Get todos list
const getTodos = async (req, res) => {
  try {
    //displays todos newest to oldest
    const allTodos = await Todos.find({}).sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Create new todo
const createTodo = async (req, res) => {
  const todo = req.body;
  try {
    const newTodo = await Todos.create(todo);
    res.status(200).send(newTodo);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Update todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    //checks if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is no To-do with the ID of ${id}`);
    }
    const todoID = { _id: id };
    const update = { completed: true };
    const updateTodo = await Todos.findOneAndUpdate(todoID, update);
    if (!updateTodo) {
      return res.status(404).send(`There is no To-do with the ID of ${id}`);
    }
    res.status(200).send(updateTodo);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//Delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    //checks if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`There is no To-do with the ID of ${id}`);
    }
    const deleteTodo = await Todos.findOneAndDelete({ _id: id });
    res.status(200).send(deleteTodos);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
