import React, { useState } from "react";
import "./todo.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputtext, setInputtext] = useState("");
  const [editId, setEditId] = useState(0);
  const [editText, setEditText] = useState("");

  const AddTodo = () => {
    if (inputtext.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputtext,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputtext("");
    }
  };

  const EditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const SaveEdit = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editText } : todo
    );
    setTodos(updatedTodo);
    setEditId(0);
    setEditText("");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
        <div className="todo-container">
            
      <h1>Todo List App</h1>

      <input
        type="text"
        placeholder="Add Your Todo Here"
        value={inputtext}
        onChange={(e) => setInputtext(e.target.value)}
      />
      <button onClick={AddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => SaveEdit(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id
                          ? { ...t, completed: !t.completed }
                          : t
                      )
                    )
                  }
                />

                <span className={todo.completed ? "completed" : ""}>
                  {todo.text}
                </span>

                <button className="edit" onClick={() => EditTodo(todo.id, todo.text)}>
                  Edit
                </button>
                <button className="del" onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default TodoList;