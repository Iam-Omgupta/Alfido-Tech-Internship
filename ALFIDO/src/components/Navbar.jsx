import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsTasksOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="backdrop-blur-md bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600
                 bg-opacity-90 border-b border-purple-400 shadow-lg
                 p-4 flex justify-between items-center px-6 sticky top-0 z-50"
    >
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-md font-semibold transition
              ${
                location.pathname === item.path
                  ? "bg-purple-500 text-white"
                  : "text-white hover:bg-purple-400"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsTasksOpen(!isTasksOpen)}
            className="px-4 py-2 bg-purple-500 text-white rounded-md font-semibold
                         hover:bg-purple-400 transition flex items-center gap-2"
          >
            Tasks
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isTasksOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isTasksOpen && (
            <div
              className="absolute right-0 mt-2 w-40 bg-purple-900 rounded-md
                             shadow-lg border border-purple-300 z-20 backdrop-blur-sm"
            >
              <Link
                to="/counter"
                onClick={() => setIsTasksOpen(false)}
                className={`block px-4 py-2 rounded transition text-white
                   ${
                     location.pathname === "/counter"
                       ? "bg-purple-700"
                       : "hover:bg-purple-600"
                   }`}
              >
                Counter
              </Link>
              <Link
                to="/todo"
                onClick={() => setIsTasksOpen(false)}
                className={`block px-4 py-2 rounded transition text-white
                   ${
                     location.pathname === "/todo"
                       ? "bg-purple-700"
                       : "hover:bg-purple-600"
                   }`}
              >
                Todo List
              </Link>
            </div>
          )}
        </div>

        <div className="font-bold text-white text-lg select-none cursor-default tracking-wide">
          Om Gupta
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
