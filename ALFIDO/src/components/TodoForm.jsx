import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-grow p-3 border border-gray-300 rounded-md"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
