import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Docker Dashboard',
    description: 'This project is a Streamlit-based web dashboard that enables users to remotely manage Docker containers via SSH. It offers a simple, interactive interface to execute Docker commands either locally or on a remote server.',
    image: 'test',
    techStack: ['Python', 'Streamlit', 'Docker', 'SSH'],
    githubUrl: 'https://github.com/paridhi-bhardwaj-005/Docker-Dashboard#',
    liveUrl: '',
    featured: true
  },
  {
    id: '2',
    name: 'MedInsight: AI-Powered Differential Diagnosis Assistant',
    description: 'MedInsight is a smart healthcare tool that uses Gradio and Gemini AI to generate differential diagnoses from patient symptoms, vital signs, and medical reports. It provides structured, detailed reasoning and test recommendations to assist in clinical decision-making.',
    image: 'ai',
    techStack: ['Python', 'Gradio', 'Gemini AI', 'Healthcare AI', 'Machine Learning'],
    githubUrl: 'https://github.com/paridhi-bhardwaj-005/MedInsight-AI-Assistant/tree/main',
    liveUrl: '',
    featured: true
  }
];