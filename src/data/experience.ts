import { Experience } from '../types';

export const experiences: Experience[] = [
  // Education
  {
    type: 'education',
    title: 'Higher Secondary School',
    organization: 'Maheshwari Girls Public School',
    duration: '2021 - 2023',
    description: [
      'Science stream with Mathematics'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Technology',
    organization: 'Jaipur Engineering College And Research Centre Jaipur',
    duration: '2023 - 2027',
    description: [
      'Electronics And Communication Engineering',
      'GPA: 8.5'
    ]
  },
  
  // Certifications
  {
    type: 'certification',
    title: 'Linux Essentials Workshop',
    organization: 'LinuxWorld Informatics Pvt. Ltd.',
    duration: '2024',
    description: [
      'Mentor: Mr. Vimal Daga'
    ],
    skills: ['REDHAT LINUX 9'],
    verificationUrl: 'https://drive.google.com/file/d/1QGVUXvG9nGwuJDAZnDX6fIgIy8Qw3OdZ/view?usp=sharing'
  },
  {
    type: 'certification',
    title: 'Kubernetes Foundation Training',
    organization: 'LinuxWorld Informatics Pvt. Ltd.',
    duration: '2025',
    description: [
      'Mentor: Mr. Vimal Daga'
    ],
    skills: ['Kubernetes'],
    verificationUrl: 'https://drive.google.com/file/d/1c9eBSw_DQGiscvUkctl4L_NTBY0we7Lh/view?usp=drive_link'
  },
  
  // Work Experience
  {
    type: 'work',
    title: 'Technical Intern',
    organization: 'LinuxWorld Informatics Pvt. Ltd.',
    duration: 'Jun 2025 - Aug 2025',
    description: [
      'Worked on real-world projects involving machine learning and cloud infrastructure.',
      'Developed and deployed fullstack applications leveraging AWS services.',
      'Built and managed containerized environments using Docker and Kubernetes.',
      'Implemented CI/CD pipelines with Jenkins for automated deployments.',
      'Created and deployed AI solutions using Flask, GenAI, and Agentic AI frameworks.'
    ],
    skills: ['ML', 'AWS', 'Fullstack', 'Docker', 'Kubernetes', 'Jenkins CI/CD', 'Flask', 'GenAI', 'Agentic AI']
  }
];