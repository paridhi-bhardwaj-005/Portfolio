import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Cloud Infrastructure Automation',
    description: 'Automated AWS infrastructure deployment using Terraform and Jenkins CI/CD pipeline with monitoring and alerting.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['Terraform', 'AWS', 'Jenkins', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  },
  {
    id: '2',
    name: 'AI-Powered Code Review Bot',
    description: 'Developed an intelligent code review assistant using OpenAI APIs that analyzes pull requests and provides suggestions.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['Python', 'OpenAI', 'GitHub Actions', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    name: 'Microservices Monitoring Dashboard',
    description: 'Built a comprehensive monitoring solution for microservices architecture with real-time metrics and alerting.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['React', 'Node.js', 'Prometheus', 'Grafana', 'Docker'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://demo.com',
    featured: true
  },
  {
    id: '4',
    name: 'ML Model Deployment Platform',
    description: 'Created a platform for deploying and managing machine learning models with automated scaling and monitoring.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['Python', 'TensorFlow', 'Kubernetes', 'FastAPI', 'Redis'],
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '5',
    name: 'DevOps Automation Suite',
    description: 'Comprehensive DevOps toolkit for automated testing, deployment, and infrastructure management.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    techStack: ['Go', 'Docker', 'Ansible', 'Jenkins', 'AWS'],
    githubUrl: 'https://github.com',
    featured: false
  }
];