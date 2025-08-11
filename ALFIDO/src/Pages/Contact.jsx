import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Get In Touch</h2>
      <div className="space-y-4">
        <a
          href="https://www.linkedin.com/in/om-gupta22/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 text-white py-3 px-6 rounded shadow-md hover:bg-blue-600 transition"
        >
          LinkedIn Profile
        </a>
        <a
          href="https://github.com/Iam-Omgupta"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white py-3 px-6 rounded shadow-md hover:bg-gray-900 transition"
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Contact;
