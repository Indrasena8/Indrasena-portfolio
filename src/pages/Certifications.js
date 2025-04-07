import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Serverless on Kubernetes (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-5aa55fd7-4117-497e-918d-a6ad88576cff-certificate.pdf',
    },
    {
      title: 'Introduction to Kubernetes (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-5aa55fd7-4117-497e-918d-a6ad88576cff-certificate.pdf',
    },
    {
      title: 'Introduction to WebAssembly (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-32209b65-2ca7-4174-be15-bcf9f5e77ea3-certificate.pdf',
    },
    {
      title: 'Creating Effective Documentation for Developers (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-da1ead8b-8c5c-4628-969d-9c134b21d868-certificate.pdf',
    },
    {
      title: 'MTA: Introduction to Programming Using JavaScript - Certified 2019',
      url: 'https://www.youracclaim.com/badges/4508c9cd-f20f-4989-9e7a-7f88c74bcd36?source=linked_in_profile',
    },
    {
      title: 'Introduction to GitOps (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-b90f8c19-7cf9-4e32-b35a-5159ce07d343-certificate.pdf',
    },
    {
      title: 'Introduction to Protocol Buffers (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-a041b029-557b-4bdd-8237-58fde124c958-certificate.pdf',
    },
    {
      title: 'Open Source Technical Documentation Essentials (The Linux Foundation)',
      url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/dc4d3c7b-01d6-4236-a2f6-b7995193e5e4-indrasena-kalyanam-4708103a-e269-4fb7-a95e-ec10b59e8814-certificate.pdf',
    },
    {
      title: 'The Complete Java Certification Course (Udemy)',
      url: '',
    },
    {
      title: 'Microsoft Technology Associate: Introduction to Programming using JS',
      url: 'https://www.credly.com/badges/4508c9cd-f20f-4989-9e7a-7f88c74bcd36?source=linked_in_profile',
    },
    {
      title: 'Python For Everybody - Specialization',
      url: 'https://www.coursera.org/account/accomplishments/specialization/GWWEFTRLRTHH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n',
    },
    {
      title: 'Web Applications for Everybody - Specialization (Coursera)',
      url: 'https://www.coursera.org/account/accomplishments/specialization/QDQZ8BDFRKVR',
    },
    {
      title: 'Android O & Java - The Complete Android Development Bootcamp (Udemy)',
      url: '',
    },
    {
      title: 'Front-End Web UI Frameworks & Tools: Bootstrap 4 (Coursera)',
      url: 'https://www.coursera.org/account/accomplishments/verify/XEN7WG58UQ2P',
    },
    {
      title: 'Artificial Intelligence Workshop',
      url: '',
    },
    {
      title: 'Algorithms & Time Complexity (IEEE)',
      url: '',
    },
    {
      title: 'SCP-Computing Foundations - Data Structures and Representation (IEEE)',
      url: '',
    },
    {
      title: 'Ruby On Rails: An Introduction (Coursera)',
      url: 'https://www.coursera.org/account/accomplishments/certificate/8FHYJY9KDMYZ',
    },
    {
      title: 'Introduction to Data Science in Python (Coursera)',
      url: 'https://www.coursera.org/account/accomplishments/verify/XJMZSMLJKXG5',
    },
  ];

  return (
    <div className="certifications-container max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Certifications</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-4">
        {certifications.map((cert, idx) => (
          <li key={idx}>
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {cert.title}
              </a>
            ) : (
              cert.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
