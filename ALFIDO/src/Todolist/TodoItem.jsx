import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      className={`flex justify-between items-center bg-gray-50 p-4 border border-gray-200 rounded-md mb-3 transition-colors duration-200
        ${todo.isCompleted ? "bg-green-100 border-green-300" : ""}`}
    >
      <span
        className={`flex-grow cursor-pointer text-gray-800 text-lg
          ${todo.isCompleted ? "line-through text-gray-500" : ""}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1 rounded-md text-white font-medium text-sm
            ${
              todo.isCompleted
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-green-500 hover:bg-green-600"
            }
            transition-colors duration-200`}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.isCompleted ? "Uncomplete" : "Complete"}
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
