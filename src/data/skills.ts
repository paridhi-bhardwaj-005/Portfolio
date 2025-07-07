import { Skill } from '../types';

export const skills: Skill[] = [
  // DevOps
  { name: 'Docker', icon: 'Container', category: 'DevOps', proficiency: 90 },
  { name: 'Jenkins', icon: 'GitBranch', category: 'DevOps', proficiency: 85 },
  { name: 'Kubernetes', icon: 'Network', category: 'DevOps', proficiency: 80 },
  { name: 'Terraform', icon: 'Settings', category: 'DevOps', proficiency: 85 },
  { name: 'Ansible', icon: 'Cpu', category: 'DevOps', proficiency: 75 },
  { name: 'Red Hat', icon: 'Server', category: 'DevOps', proficiency: 80 },
  
  // Cloud Platforms
  { name: 'AWS', icon: 'Cloud', category: 'Cloud', proficiency: 90 },
  { name: 'Google Cloud', icon: 'CloudRain', category: 'Cloud', proficiency: 85 },
  { name: 'Azure', icon: 'CloudSnow', category: 'Cloud', proficiency: 75 },
  
  // AI/ML
  { name: 'Python', icon: 'Brain', category: 'AI/ML', proficiency: 90 },
  { name: 'TensorFlow', icon: 'Zap', category: 'AI/ML', proficiency: 85 },
  { name: 'PyTorch', icon: 'Flame', category: 'AI/ML', proficiency: 80 },
  { name: 'OpenAI', icon: 'Sparkles', category: 'AI/ML', proficiency: 85 },
  
  // Programming Languages
  { name: 'JavaScript', icon: 'Code', category: 'Programming', proficiency: 90 },
  { name: 'TypeScript', icon: 'Code2', category: 'Programming', proficiency: 85 },
  { name: 'Go', icon: 'Zap', category: 'Programming', proficiency: 75 },
  { name: 'Java', icon: 'Coffee', category: 'Programming', proficiency: 80 },
  
  // Web Development
  { name: 'React', icon: 'Atom', category: 'Web Dev', proficiency: 90 },
  { name: 'Node.js', icon: 'Server', category: 'Web Dev', proficiency: 85 },
  { name: 'Express', icon: 'Layers', category: 'Web Dev', proficiency: 80 },
  { name: 'MongoDB', icon: 'Database', category: 'Web Dev', proficiency: 85 },
];