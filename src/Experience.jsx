import React from 'react';

const Experience = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Experience Card */}
        <div className="bg-white border border-gray-300 rounded-xl p-6 flex-1 shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Experience</h1>
          <h4 className="text-xl font-semibold text-gray-700 pt-4">2023 – Present</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm md:text-base">
            <li>Developing full-stack web applications using MERN Stack.</li>
            <li>Practicing frontend & backend development through real-world projects.</li>
            <li>Learning REST APIs, authentication, and database management.</li>
          </ul>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            <span className="font-semibold">Technologies:</span> HTML, CSS,  Tailwind CSS, Bootstrap, JavaScript, React.js, Node.js,Epress.js, MongoDB,
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-white border border-gray-300 rounded-xl p-6 flex-1 shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Education</h1>
          <h4 className="text-xl font-semibold text-gray-700 pt-4">2022 – 2026</h4>
          <h2 className="text-lg font-semibold text-gray-800 pt-4">
            Bachelor’s Degree in Information Technology
          </h2>
          <p className="text-base font-medium text-gray-700 pt-2">
            University of Agriculture, Peshawar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
