import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home-container">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
        alt="Indrasena Kalyanam"
        className="profile-image shadow-lg mt-6"
      />
      <h1 className="text-4xl font-bold text-blue-700 mt-4">Indrasena Kalyanam</h1>
      <p className="text-lg text-gray-600 mt-4 text-center max-w-2xl">
        MS in Computer Science | Research Assistant | Teaching Assistant | C#/.NET Developer | Azure | MS SQL Server | React.js | Kubernetes (AKS) | ML | NLP
      </p>
      <div className="contact-info mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-3">
          <FaPhoneAlt className="text-blue-600 mr-3" />
          <span className="text-gray-700">+1 (414) 732-7764</span>
        </div>
        <div className="flex items-center mb-3">
          <FaEnvelope className="text-blue-600 mr-3" />
          <a
            href="mailto:indrasenakalyanam@gmail.com"
            className="text-blue-600 hover:underline"
          >
            indrasenakalyanam@gmail.com
          </a>
        </div>
        <div className="flex items-center mb-3">
          <FaLinkedin className="text-blue-600 mr-3" />
          <a
            href="https://www.linkedin.com/in/indrasena-kalyanam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/indrasena-kalyanam
          </a>
        </div>
        <div className="flex items-center">
          <FaGithub className="text-blue-600 mr-3" />
          <a
            href="https://github.com/Indrasena8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/Indrasena8
          </a>
        </div>
      </div>
    </div>
  );
}