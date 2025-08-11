import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [isTasksOpen, setIsTasksOpen] = useState(false); // tasks dropdown toggle
  const location = useLocation();

  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsTasksOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-purple-700 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Name on right */}
          <div className="flex-shrink-0 text-white font-bold text-xl order-2 sm:order-1">
            Om Gupta
          </div>

          {/* Hamburger for mobile */}
          <div className="sm:hidden order-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden sm:flex space-x-6 order-1 sm:order-2 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition cursor-pointer ${
                  isActive(item.path)
                    ? "bg-white text-purple-700"
                    : "text-white hover:bg-purple-500"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Tasks dropdown */}
            <div className="flex items-center space-x-6">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsTasksOpen(!isTasksOpen)}
                  className="px-4 py-2 bg-purple-500 text-white rounded-md font-semibold hover:bg-purple-400 transition flex items-center gap-2"
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
                  <div className="absolute right-0 mt-2 w-40 bg-purple-900 rounded-md shadow-lg border border-purple-300 z-20 backdrop-blur-sm">
                    <Link
                      to="/counter"
                      onClick={() => setIsTasksOpen(false)}
                      className={`block px-4 py-2 rounded transition text-white ${
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
                      className={`block px-4 py-2 rounded transition text-white ${
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
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                  isActive(item.path)
                    ? "bg-white text-purple-700"
                    : "text-white hover:bg-purple-500"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Tasks section in mobile */}
            <div className="border-t border-purple-500 mt-1 pt-2">
              <div className="px-3 py-2 text-white font-semibold">Tasks</div>
              <Link
                to="/counter"
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-2 rounded-md text-base font-medium transition ${
                  isActive("/counter")
                    ? "bg-white text-purple-700"
                    : "text-white hover:bg-purple-500"
                }`}
              >
                Counter
              </Link>
              <Link
                to="/todo"
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-2 rounded-md text-base font-medium transition ${
                  isActive("/todo")
                    ? "bg-white text-purple-700"
                    : "text-white hover:bg-purple-500"
                }`}
              >
                Todo List
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
