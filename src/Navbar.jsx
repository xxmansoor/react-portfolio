import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#03543d] text-white shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
          My<span className="text-red-300">Portfolio</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/Services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/Experience" className="hover:text-gray-300">Experience</Link></li>
          <li><Link to="/Skills" className="hover:text-gray-300">Skills</Link></li>
          <li><Link to="/Contact" className="hover:text-gray-300">Contact</Link></li>
          <li>
            <button className="ml-4 px-4 py-2 border rounded-xl hover:bg-white hover:text-[#03543d] transition">
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#03543d] px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/Services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/Experience" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/Skills" onClick={toggleMenu}>Skills</Link></li>
            <li><Link to="/Contact" onClick={toggleMenu}>Contact</Link></li>
            <li>
              <button className="mt-2 px-4 py-2 border rounded-xl hover:bg-white hover:text-[#03543d] transition">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
