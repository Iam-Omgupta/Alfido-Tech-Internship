import React from "react";

function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="mb-8 w-full max-w-md flex justify-center space-x-6 bg-white rounded-lg shadow-md p-4 mx-auto">
      <button
        onClick={() => setActiveTab("counter")}
        onDoubleClick={() => setActiveTab("todo")}
        className={`px-4 py-2 rounded-md font-semibold ${
          activeTab === "counter"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } transition`}
      >
        Counter <br />
        (First Task)
      </button>
      <button
        onClick={() => setActiveTab("todo")}
        onDoubleClick={() => setActiveTab("counter")}
        className={`px-4 py-2 rounded-md font-semibold ${
          activeTab === "todo"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } transition`}
      >
        ToDo List
        <br />
        (Second Task)
      </button>
    </nav>
  );
}

export default Navbar;
