import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import profilePic from './assets/mansoor.jpeg';
import cv from './assets/cv.pdf';

const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Left Card */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl p-6 text-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">MUHAMMAD MANSOOR</h1>
          <p className="text-gray-600 mt-1">I am a Full Stack Web Developer</p>

          <div className="mt-4 flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/muhammad-mansoor-521a082b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-800 transition duration-300" />
            </a>
            <a
              href="https://github.com/xxmansoor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-800 text-3xl hover:text-black transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-xl p-6 text-left">
          <h4 className="text-lg md:text-xl font-semibold text-gray-600">Hi There!</h4>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
            I'M <span className="text-blue-700">MUHAMMAD MANSOOR</span>, A{' '}
            <span className="text-red-400">WEB DEVELOPER</span>
          </h1>
          <p className="text-gray-700 mt-4 text-sm md:text-base">
            I'm a passionate web developer skilled in building responsive and dynamic applications.
            Proficient in MERN stack (MongoDB, Express.js, React.js, Node.js), I love solving problems
            and creating seamless user experiences. Always eager to learn new technologies and improve
            my coding skills to build efficient and scalable web solutions.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Available for Freelancing</li>
          </ul>

          <a href={cv} download="Mansoor_CV.pdf">
            <button className="mt-6 flex items-center gap-2 bg-[#03543d] hover:bg-black text-white px-5 py-2 rounded-xl transition duration-300">
              <FaDownload />
              Download CV
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
