import React from "react";

function Home() {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Hi, I'm Om Gupta
      </h1>
      <p className="text-gray-700 text-lg mb-10">
        A passionate and self-motivated web developer with strong skills in
        HTML, CSS, Oracle, and React.js. I enjoy building creative,
        user-friendly websites and managing digital content.
      </p>

      <div className="space-y-8 text-left">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">
            Education
          </h2>
          <p>
            Currently pursuing BCA (Bachelor of Computer Applications) from TMU
            Moradabad. Completed Diploma in Computer Applications (DCA). Strong
            foundation in computer science and software development principles.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">
            National Service Scheme (NSS)
          </h2>
          <p>
            Active NSS volunteer, participating in community service and social
            awareness programs. Passionate about contributing to society and
            promoting education and health awareness.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">
            Interests & Hobbies
          </h2>
          <p>
            Apart from coding, I enjoy exploring emerging web technologies,
            contributing to open-source projects, and staying updated with the
            latest trends in software development. In free time, I like reading
            tech blogs, watching documentaries, and playing chess.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
