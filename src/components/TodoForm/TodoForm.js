function TodoForm({ input, setInput, addTodo }) {
  return (
    <div className="Todo-Form">
      TodoForm
      <input
        className="Todo-form-input"
        type="text"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
      ></input>
      <button
        className="Todo-form-button"
        type="submit"
        onClick={(evt) => addTodo(evt)}
      >
        Add To-do
      </button>
    </div>
  );
}

export default TodoForm;
