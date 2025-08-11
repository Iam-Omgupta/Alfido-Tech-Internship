import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Hi, I'm Om Gupta
      </h1>
      <p className="max-w-2xl text-gray-700 text-lg">
        A passionate and self-motivated web developer with strong skills in
        HTML, CSS, Oracle, and React.js. I enjoy building creative,
        user-friendly websites and managing digital content.
      </p>

      <div className="w-full space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">
            Education
          </h2>
          <p>
            Currently pursuing BCA (Bachelor of Computer Applications) from TMU
            Moradabad. Completed Diploma in Computer Applications (DCA). Strong
            foundation in computer science and software development principles.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">
            National Service Scheme (NSS)
          </h2>
          <p>
            Active NSS volunteer, participating in community service and social
            awareness programs. Passionate about contributing to society and
            promoting education and health awareness.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3 border-b border-blue-200 pb-2">
            Interests & Hobbies
          </h2>
          <p>
            Apart from coding, I enjoy exploring emerging web technologies,
            contributing to open-source projects, and staying updated with the
            latest trends in software development. In free time, I like reading
            tech blogs, Video editing , and playing chess.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
