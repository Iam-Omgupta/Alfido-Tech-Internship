import React from "react";

function About() {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        About Me
      </h2>
      <p className="text-gray-700 mb-12 text-center">
        Passionate developer with expertise in building scalable web
        applications. Skilled in frontend technologies like React, HTML, CSS,
        and Tailwind CSS, with growing backend experience in Node.js and MySQL.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-bold text-xl mb-5 text-blue-600 border-b border-blue-200 pb-2">
            Frontend Skills
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
            <li>React</li>
            <li>HTML, CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-bold text-xl mb-5 text-blue-600 border-b border-blue-200 pb-2">
            Backend Skills
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
            <li>Node.js (Beginner)</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
