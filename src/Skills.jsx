import React from 'react';
import htmllogo from './assets/html-logo.png';
import csslogo from './assets/css-logo.png';
import Tailwindlogo from './assets/Tailwind-logo.png';
import Bootstraplogo from './assets/Bootstrap-logo.png';
import Jslogo from './assets/Js-logo.png';
import reactjslogo from './assets/reactjs-logo.png';
import Nodejslogo from './assets/Nodejs-logo.png';
import Expressjslogo from './assets/Expressjs-logo.png';

const skills = [
  { name: 'HTML', logo: htmllogo, percent: '99%' },
  { name: 'CSS', logo: csslogo, percent: '95%' },
  { name: 'Tailwind', logo: Tailwindlogo, percent: '90%' },
  { name: 'Bootstrap', logo: Bootstraplogo, percent: '93%' },
  { name: 'JavaScript', logo: Jslogo, percent: '90%' },
  { name: 'React', logo: reactjslogo, percent: '85%' },
  { name: 'NodeJS', logo: Nodejslogo, percent: '70%' },
  { name: 'Express', logo: Expressjslogo, percent: '60%' },
];

const Skills = () => {
  return (
    <section className=" py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-bold text-white">Pro Skills</h1>
        <h3 className="text-center text-4xl font-bold text-white mb-10">Let’s Explore My Skills</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-4 text-center hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-20 h-20 mx-auto rounded-full mb-4 object-contain"
              />
              <h1 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h1>
              <button className="bg-[#03543d] hover:bg-black text-white px-4 py-1.5 rounded-xl transition">
                {skill.percent}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
