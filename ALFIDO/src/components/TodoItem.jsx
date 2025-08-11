import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      className={`flex justify-between items-center p-4 mb-3 rounded border ${
        todo.isCompleted ? "bg-green-100 border-green-300" : "bg-white"
      }`}
    >
      <span
        className={`cursor-pointer flex-grow ${
          todo.isCompleted ? "line-through text-gray-500" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}
        title="Click to toggle complete"
      >
        {todo.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`px-3 py-1 rounded font-semibold transition
            ${
              todo.isCompleted
                ? "bg-gray-300 text-gray-700 cursor-default"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          disabled={todo.isCompleted}
          title="Mark as Complete"
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          title="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
