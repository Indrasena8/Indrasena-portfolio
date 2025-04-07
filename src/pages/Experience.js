import React from 'react';

export default function Experience() {
  const experienceData = [
    {
      company: 'University of Wisconsin-Milwaukee',
      role: 'Graduate Teaching Assistant',
      duration: 'Aug 2024 - Present',
      description: [
        'COMPSCI 251 - Intermediate Java Programming Lab: Managed two lab sections of 40+ students, reinforcing Java programming concepts, object-oriented design, and problem-solving strategies. Facilitated quizzes, lab exercises, and graded assignments to ensure learning outcomes.',
        'COMPSCI 250 - Introductory Computer Programming Lab: Assisted over 20 students in mastering introductory Java programming concepts and computational thinking. Conducted quizzes and lab exercises, graded assignments, and provided one-on-one support to improve programming skills.',
        'COMPSCI 657/790 - Advanced Topics in Computer Science: Introduction to Cybersecurity: Graded assignments and exams for a class of 50+ students, focusing on threat modeling, vulnerability analysis, and cybersecurity principles.',
      ],
      skills: 'Java, Object-Oriented Programming (OOP), Eclipse, VSCode, Cyber Security - Network Security, Software Security, Web Security',
      logo: '/assets/images/uwm.png',
    },
    {
      company: 'University of Wisconsin-Milwaukee',
      role: 'Graduate Research Assistant',
      duration: 'Aug 2024 - Present',
      description: [
        'Worked on 4 projects, showcasing skills in software development, deployment, and infrastructure optimization.',
        'Researching on Magnetic One by integrating and deploying it with Llama models.',
        'Deployed a scalable ReactJS/Python ML app on Azure and demoed it to the transportation department.',
        'Built an interactive web application featuring a Linux terminal to teach cybersecurity concepts and attacks.',
        'Compared Kubernetes and Azure Functions for ML app deployment, focusing on DevOps workflows and scalability.',
      ],
      skills: 'Kubernetes, Azure Kubernetes Service (AKS), Docker, Python, Machine Learning, React.js, Linux, Microsoft Azure',
      logo: '/assets/images/uwm.png',
    },
    {
      company: 'Integra Connect',
      role: 'Software Engineer (Full Stack Web Developer)',
      duration: 'May 2021 - Aug 2023',
      description: [
        'Optimized server pipeline to Azure Functions, boosting processing efficiency by 30% and generating patient CCDA in XML.',
        'Ensured Drummond Certifications compliance, implemented data access reports, and streamlined JSON CCDA generation.',
        'Automated tasks and enhanced data import/export efficiency with Azure functions, Logic Apps, and cloud resources.',
        'Executed data lake migration from gen2 to gen3 with automated Azure functions for seamless multi-client migration.',
        'Engineered REDIS caching, reducing system latency by 40% and improving overall performance.',
        'Contributed to monolith-to-microservices migration for better scalability and efficiency.',
      ],
      skills: 'C#, .NET Core, Azure, Redis, SQL Server, JavaScript, Agile Methodologies',
      logo: '/assets/images/integra.jpg',
    },
    {
      company: 'Prinston Smart Engineers',
      role: 'Full Stack Development Intern',
      duration: 'June 2020 - July 2020',
      description: [
        'Developed an E-commerce Website called Home Service which provides all the essential home care services such as pest control, yoga, haircut, etc.',
      ],
      skills: 'Java, MySQL, Bootstrap, HTML, CSS, JSP, JavaScript',
      logo: '/assets/images/prinston.jpg',
    },
    {
      company: 'XON Labs',
      role: 'Software Development Intern',
      duration: 'Oct 2020 - Nov 2020',
      description: [
        'Developed a sentiment analysis web application leveraging a machine learning model to classify tweets as positive or negative.',
        'Integrated functionality to provide sentiment-based movie reviews by analyzing user feedback.',
      ],
      skills: 'Python, SQLite, MySQL, Java, HTML, CSS, JavaScript',
      logo: '/assets/images/xonlabs.png',
    },
    {
      company: 'The Sparks Foundation',
      role: 'Data Science Intern',
      duration: 'Oct 2020 - Nov 2020',
      description: [
        'Completed tasks using Machine Learning and Data Analysis Technologies by building Regression models, Clustering models, and Decision Tree Classifier models to analyze COVID-19 data and make Stock Market Predictions.',
      ],
      skills: 'Pandas, NumPy, Python, Linear Regression, OpenCV',
      logo: '/assets/images/sparks.ico',
    },
    {
      company: 'MyCaptain',
      role: 'Business Development, Marketing, and Sales Intern',
      duration: 'Nov 2019 - Jan 2020',
      description: [
        'Community building and creating an impact on the campus.',
      ],
      skills: '',
      logo: '/assets/images/mycaptain.png',
    },
  ];

  return (
    <div className="experience-container max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Experience</h2>
      {experienceData.map((exp, idx) => (
        <div
          key={idx}
          className="experience-item flex items-start mb-8 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="experience-logo w-16 h-16 mr-6"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-lg text-gray-600">{exp.company}</p>
            <p className="text-md text-gray-500">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {exp.skills && (
              <p className="text-sm text-gray-500 mt-4">
                <strong>Skills:</strong> {exp.skills}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
