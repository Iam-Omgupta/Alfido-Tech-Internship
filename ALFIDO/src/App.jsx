import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import TodoForm from "./Todolist/TodoForm";
import TodoItem from "./Todolist/TodoItem";

function App() {
  const [activeTab, setActiveTab] = useState("counter");

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) =>
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);

  const toggleTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "counter" ? (
        <Counter />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            My To-Do List (second Tasks)
          </h1>
          <TodoForm addTodo={addTodo} />
          <div className="mt-6 text-left">
            {todos.length === 0 ? (
              <p className="text-gray-600 italic">
                No tasks yet! Add a new one above.
              </p>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
