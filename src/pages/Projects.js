import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Masters Capstone Project - Comparative Study of Cloud-Native Application Development & Deployment Model',
      description: [
        'Developed a cloud-native spam email detection application leveraging Azure Kubernetes Service (AKS) and Azure Functions.',
        'Phase 1: Deployed a scalable ML model on Kubernetes using Docker containers and Azure Kubernetes Service (AKS).',
        'Phase 2: Automated model retraining and redeployment pipelines using Azure Functions triggered by dataset updates in Azure Blob Storage.',
        'This project addressed challenges such as dynamic dataset updates, workflow automation, and balancing cost-efficiency with the flexibility of serverless architectures.',
      ],
      techStack: 'ML, Kubernetes, Azure, AKS, Serverless Computing',
      url: 'https://github.com/Indrasena8/Masters_Capstone_Project',
    },
    {
      title: 'Transformer-based Network Anomaly Detection',
      description: [
        'Developed a Transformer-based machine learning model to detect network anomalies, including security breaches and system faults, by analyzing network traffic data.',
        'The model was trained on multiple datasets such as NSL-KDD, KDDCUP99, and CICIDS2017 to ensure robustness across various network environments.',
        'Leveraged the Transformer architecture to address key challenges like data complexity, imbalanced datasets, and evolving network traffic patterns.',
        'The model achieved over 99% accuracy in detecting anomalies, significantly improving detection capabilities over traditional methods.',
      ],
      techStack: 'Python, PyTorch, Pandas, Transformer Architecture, AdamW Optimizer, StandardScaler, Label Encoder',
      url: 'https://github.com/Indrasena8/Transformer-based-Network-Anomaly-Detection',
    },
    {
      title: 'Web Application Demonstrating Cyber Attack Scenarios',
      description: [
        'Developed a web application that serves as an educational tool to demonstrate the principles of the CIA Triad (Confidentiality, Integrity, Availability) in cybersecurity.',
        'Interactive Demonstrations: The application includes two embedded terminals simulating real-world cybersecurity scenarios.',
        'Attack Simulations: Demonstrated various cybersecurity attacks, including Sniffing, Spoofing, and Denial of Service (DoS).',
      ],
      techStack: 'Linux, Node.js, HTML5, CSS, JavaScript, Microsoft Azure, Nginx',
      url: 'https://github.com/Indrasena8/Cybersecurity-Attacks-Demo',
    },
    {
      title: 'AItinerary',
      description: [
        'Website designed for personalized trip planning. Users input their starting and destination cities, desired trip duration, and preferences, receiving a customized itinerary.',
      ],
      techStack: 'AWS S3, Lambda Functions, API Gateways, React Vite, Python',
      url: 'https://github.com/Indrasena8/AItinerary',
    },
    {
      title: 'Remote Access',
      description: [
        'Addresses common day-to-day challenges by providing functionalities such as fetching contacts, retrieving location information, obtaining OTPs, checking battery percentage, changing the sound profile, and even locking your mobile remotely from another device with no internet connection on either end.',
        'This application proves invaluable in scenarios where you\'ve misplaced your mobile device, cannot locate it, or have accidentally left it at home.',
      ],
      techStack: 'Java, XML | Android Studio',
      url: 'https://github.com/Indrasena8/RemoteAccessJAVA',
    },
  ];

  return (
    <div className="projects-container max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Projects</h2>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="project-item mb-8 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Tech Stack:</strong> {project.techStack}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4 block"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
