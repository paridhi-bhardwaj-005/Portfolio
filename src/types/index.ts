export interface Skill {
  name: string;
  icon: string;
  category: string;
  proficiency: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  type: 'education' | 'certification' | 'work';
  title: string;
  organization: string;
  duration: string;
  description: string[];
  logo?: string;
  skills?: string[];
  verificationUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}