import React from 'react';
import FrontEndLogo from './assets/Front-end-logo.png';
import Backendlogo from './assets/Backend-logo.png';
import Fullstacklogo from './assets/fullstack-logo.png';

const Services = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="bg-white max-w-6xl mx-auto rounded-xl shadow-xl p-6">
        <h4 className="text-center text-lg text-gray-600">Services</h4>
        <h1 className="text-center font-bold text-3xl text-gray-800 mb-8">
          Quality Services
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Frontend */}
          <div className="flex-1 border border-gray-300 hover:border-green-500 p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={FrontEndLogo} alt="Frontend" className="w-28" />
            </div>
            <h2 className="font-bold text-xl text-center mb-2">Frontend Development</h2>
            <p className="text-gray-700 text-sm text-center">
              Creating responsive and interactive designs using HTML, CSS, JavaScript, React.js, and Tailwind CSS. Ensuring mobile-friendly and user-focused experiences.
            </p>
          </div>

          {/* Backend */}
          <div className="flex-1 border border-gray-300 hover:border-green-500 p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={Backendlogo} alt="Backend" className="w-24" />
            </div>
            <h2 className="font-bold text-xl text-center mb-2">Backend Development</h2>
            <p className="text-gray-700 text-sm text-center">
              Building secure and scalable APIs using Node.js and Express.js. Managing data with MongoDB/MySQL and implementing authentication (JWT, OAuth).
            </p>
          </div>

          {/* Fullstack */}
          <div className="flex-1 border border-gray-300 hover:border-green-500 p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={Fullstacklogo} alt="Fullstack" className="w-20" />
            </div>
            <h2 className="font-bold text-xl text-center mb-2">Full-Stack Development</h2>
            <p className="text-gray-700 text-sm text-center">
              Building complete MERN stack apps. Seamlessly integrating frontend & backend. Deploying on cloud (Vercel, Firebase).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
