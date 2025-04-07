import React from 'react';
import {
  FaJava, FaPython, FaJs, FaPhp, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt,
  FaMicrosoft, FaAws, FaDocker, FaLinux, FaDatabase, FaReact, FaAngular, FaCogs,
  FaCuttlefish, FaProjectDiagram, FaBrain, FaServer, FaCodeBranch
} from 'react-icons/fa';

const skills = [
  {
    category: 'Programming Languages',
    icons: [
      { icon: <FaCuttlefish />, label: 'C#' },
      { icon: <FaJava />, label: 'Java' },
      { icon: <FaPython />, label: 'Python' },
      { icon: <FaJs />, label: 'JavaScript' },
      { icon: <FaPhp />, label: 'PHP' },
      { icon: <FaNodeJs />, label: 'Node.js' },
    ],
  },
  {
    category: 'Frameworks & Tools',
    icons: [
      { icon: <FaMicrosoft />, label: '.NET' },
      { icon: <FaReact />, label: 'React.js' },
      { icon: <FaAngular />, label: 'Angular' },
      { icon: <FaGitAlt />, label: 'Git' },
      { icon: <FaHtml5 />, label: 'HTML5' },
      { icon: <FaCss3Alt />, label: 'CSS3' },
    ],
  },
  {
    category: 'Cloud / DevOps',
    icons: [
      { icon: <FaMicrosoft />, label: 'Azure' },
      { icon: <FaProjectDiagram />, label: 'Kubernetes' },
      { icon: <FaDocker />, label: 'Docker' },
      { icon: <FaAws />, label: 'AWS' },
    ],
  },
  {
    category: 'Database',
    icons: [
      { icon: <FaDatabase />, label: 'MS SQL Server' },
      { icon: <FaDatabase />, label: 'MySQL' },
      { icon: <FaDatabase />, label: 'MongoDB' },
      { icon: <FaDatabase />, label: 'Redis' },
    ],
  },
  {
    category: 'AI / ML / NLP',
    icons: [
      { icon: <FaBrain />, label: 'TensorFlow' },
      { icon: <FaBrain />, label: 'PyTorch' },
    ],
  },
  {
    category: 'OS / System',
    icons: [
      { icon: <FaLinux />, label: 'Linux' },
    ],
  }
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Skills</h2>
      {skills.map((section, idx) => (
        <div key={idx} className="skills-category mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.category}</h3>
          <div className="skills-icons grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {section.icons.map((item, i) => (
              <div
                key={i}
                className="skill-item p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="icon text-4xl text-blue-600 mb-2">{item.icon}</div>
                <div className="label text-gray-700 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}