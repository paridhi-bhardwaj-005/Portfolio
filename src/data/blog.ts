import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable CI/CD Pipelines with Jenkins and Docker',
    excerpt: 'Learn how to create robust CI/CD pipelines that can handle enterprise-scale deployments with automated testing and monitoring.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Jenkins', 'Docker', 'CI/CD', 'DevOps'],
    slug: 'scalable-cicd-pipelines'
  },
  {
    id: '2',
    title: 'Infrastructure as Code: Terraform Best Practices',
    excerpt: 'Comprehensive guide to managing cloud infrastructure using Terraform with real-world examples and best practices.',
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['Terraform', 'AWS', 'Infrastructure', 'Cloud'],
    slug: 'terraform-best-practices'
  },
  {
    id: '3',
    title: 'Kubernetes Deployment Strategies for High Availability',
    excerpt: 'Deep dive into various Kubernetes deployment strategies and how to achieve 99.9% uptime for your applications.',
    date: '2024-01-01',
    readTime: '10 min read',
    tags: ['Kubernetes', 'DevOps', 'High Availability', 'Deployment'],
    slug: 'kubernetes-deployment-strategies'
  },
  {
    id: '4',
    title: 'Monitoring Microservices with Prometheus and Grafana',
    excerpt: 'Complete tutorial on setting up comprehensive monitoring for microservices architecture with alerting and dashboards.',
    date: '2023-12-25',
    readTime: '15 min read',
    tags: ['Prometheus', 'Grafana', 'Monitoring', 'Microservices'],
    slug: 'monitoring-microservices'
  }
];