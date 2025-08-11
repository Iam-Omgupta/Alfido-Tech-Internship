import React from "react";

function Contact() {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Get In Touch</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 text-white py-3 rounded shadow-md hover:bg-blue-700 transition"
        >
          LinkedIn Profile
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gray-800 text-white py-3 rounded shadow-md hover:bg-gray-900 transition"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Contact;
