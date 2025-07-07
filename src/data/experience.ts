import { Experience } from '../types';

export const experiences: Experience[] = [
  // Education
  {
    type: 'education',
    title: 'Bachelor of Technology in Computer Science',
    organization: 'Indian Institute of Technology',
    duration: '2021 - 2025',
    description: [
      'Specialized in Software Engineering and DevOps practices',
      'Relevant coursework: Data Structures, Algorithms, Cloud Computing, Machine Learning',
      'GPA: 8.5/10.0'
    ]
  },
  {
    type: 'education',
    title: 'Higher Secondary School',
    organization: 'Delhi Public School',
    duration: '2019 - 2021',
    description: [
      'Science Stream with Mathematics and Computer Science',
      'Percentage: 95.2%',
      'Head of Computer Science Club'
    ]
  },
  
  // Certifications
  {
    type: 'certification',
    title: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    duration: '2024',
    description: [
      'Comprehensive understanding of AWS services and architecture',
      'Expertise in designing scalable and secure cloud solutions'
    ],
    skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability'],
    verificationUrl: 'https://credly.com'
  },
  {
    type: 'certification',
    title: 'Google Cloud Professional DevOps Engineer',
    organization: 'Google Cloud',
    duration: '2024',
    description: [
      'Advanced DevOps practices on Google Cloud Platform',
      'CI/CD pipeline design and implementation'
    ],
    skills: ['GCP', 'CI/CD', 'DevOps', 'Kubernetes'],
    verificationUrl: 'https://credly.com'
  },
  {
    type: 'certification',
    title: 'Red Hat Certified System Administrator',
    organization: 'Red Hat',
    duration: '2023',
    description: [
      'Linux system administration and automation',
      'Container orchestration with Red Hat OpenShift'
    ],
    skills: ['Linux', 'Red Hat', 'OpenShift', 'Containers'],
    verificationUrl: 'https://credly.com'
  },
  
  // Work Experience
  {
    type: 'work',
    title: 'DevOps Engineering Intern',
    organization: 'TechCorp Solutions',
    duration: 'Jun 2024 - Present',
    description: [
      'Implemented automated CI/CD pipelines reducing deployment time by 60%',
      'Managed cloud infrastructure for 50+ microservices',
      'Developed monitoring and alerting systems using Prometheus and Grafana'
    ],
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform']
  },
  {
    type: 'work',
    title: 'AI/ML Research Assistant',
    organization: 'University Research Lab',
    duration: 'Jan 2024 - May 2024',
    description: [
      'Developed machine learning models for predictive analytics',
      'Published research on automated code generation using LLMs',
      'Collaborated with cross-functional teams on AI integration projects'
    ],
    skills: ['Python', 'TensorFlow', 'OpenAI', 'Research', 'Machine Learning']
  }
];