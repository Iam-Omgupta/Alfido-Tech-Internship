import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

function Todo() {
  // Load todos from localStorage or start with empty array
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Todo List
      </h2>

      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default Todo;
