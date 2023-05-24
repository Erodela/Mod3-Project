import TodoForm from "../TodoForm/TodoForm";
import axios from "../../axios";
import { useEffect, useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  //console.log(input, 'input')

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (evt) => {
    evt.preventDefault();
    if (input.length === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
    console.log("addedTodo");
  };

  console.log(todos, "todos");

  return (
    <div className="Todo">
      <h2>To-do List</h2>
      {/*Form Component */}
      <TodoForm input={input} setInput={setInput} addTodo={addTodo} />
      {/* TodoList  */}
      {/* Key */}
      {/* Author */}
    </div>
  );
}

export default Todo;
