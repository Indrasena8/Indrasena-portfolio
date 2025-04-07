import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Indrasena
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certifications">Certifications</Link>
        {/* <Link to="/extracurricular">Extracurricular</Link> */}
        {/* <Link to="/contact">Contact</Link> */}
      </div>
    </nav>
  );
}