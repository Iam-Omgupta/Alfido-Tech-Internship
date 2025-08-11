import React from "react";

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        About Me
      </h2>
      <p className="text-gray-700 mb-10 text-center max-w-xl mx-auto">
        I am a passionate and dedicated software developer with strong expertise
        in designing and building scalable, efficient, and maintainable web
        applications. My skills are focused primarily on frontend development
        using modern frameworks like React, complemented by a growing knowledge
        of backend technologies such as Node.js and databases like MySQL. As a
        beginner in backend development, I am enthusiastic about learning and
        expanding my skill set. I enjoy solving complex problems, writing clean
        and modular code, and continuously improving my abilities to stay
        updated in this fast-evolving field. My goal is to contribute to
        innovative projects that make a meaningful impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend Skills Card */}
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

        {/* Backend Skills Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="font-bold text-xl mb-5 text-blue-600 border-b border-blue-200 pb-2">
            Backend Skills
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
