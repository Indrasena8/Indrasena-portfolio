import React from 'react';

export default function Education() {
  const educationData = [
    {
      degree: 'Masters in Computer Science',
      institution: 'University of Wisconsin-Milwaukee',
      gpa: 'GPA: 3.85/4',
      duration: '2023-Present',
      logo: `${process.env.PUBLIC_URL}/assets/images/uwm.png`,
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Visvesvaraiah Technological University',
      gpa: 'GPA: 8.72/10',
      duration: '2017-2021',
      logo: `${process.env.PUBLIC_URL}/assets/images/vtu.png`,
    },
  ];

  return (
    <div className="education-container max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Education</h2>
      {educationData.map((edu, idx) => (
        <div
          key={idx}
          className="education-item flex items-center mb-8 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={edu.logo}
            alt={`${edu.institution} logo`}
            className="education-logo w-16 h-16 mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
            <p className="text-lg text-gray-600">{edu.institution}</p>
            <p className="text-md text-gray-500">{edu.gpa}</p>
            <p className="text-md text-gray-500">{edu.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
