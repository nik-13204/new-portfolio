import { Github } from 'lucide-react';
import { Button } from './ui/button';
import wanderlustImg from '@/assets/Dev100X.png';
import teamsCloneImg from '@/assets/MS-TeamsChatApp.png';
import aiPortfolioImg from '@/assets/AI-Portfolio.png';

const projects = [
  {
    title: 'Dev100x',
subtitle: 'Developer Community & Learning Platform',
description:
  'A full-stack developer platform designed to help programmers learn, collaborate, and track their coding progress. Features include user authentication, community discussions, coding resources, and project sharing. Implemented responsive UI and secure backend APIs to enhance developer engagement and knowledge sharing.',
technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST API', 'JWT Authentication'],
    image: wanderlustImg,
    github: 'https://github.com/nik-13204/Dev100X.git',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderGradient: 'hover:border-emerald-500/50',
  },
  {
    title: 'MS Teams Clone',
    subtitle: 'Full-Stack Chat Application',
    description:
      'A secure real-time chat platform with messaging, user presence indicators, group channels, and authentication. Designed for scalability and collaborative team communication.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js'],
    image: teamsCloneImg,
    github: 'https://github.com/nik-13204/MS-Teams',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    borderGradient: 'hover:border-blue-500/50',
  },
  {
    title: 'AI Portfolio',
    subtitle: 'Interactive AI-Powered Portfolio',
    description:
      'An innovative AI-powered portfolio leveraging LangChain, Hugging Face embeddings, and OpenAI APIs. Features real-time Q&A about projects, skills, and experiences using vector search technology.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Hugging Face', 'Vector DB'],
    image: aiPortfolioImg,
    github: 'https://github.com/nik-13204/ai-portfolio',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderGradient: 'hover:border-purple-500/50',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">03. Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden transition-all duration-500 group ${project.borderGradient}`}
            >
              <div className="grid lg:grid-cols-[1.2fr,1fr] gap-0">
                {/* Project Image */}
                <div className="relative h-48 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-40`} />
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary font-mono text-sm">{project.subtitle}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full bg-muted/50 text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="glass" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
