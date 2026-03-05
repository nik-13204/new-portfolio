import { Code2, Server, Wrench, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux', 'Three.js'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Python'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: ['Git & GitHub', 'VS Code', 'JavaScript (ES6+)', 'Java', 'C++'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">02. Skills</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-muted/50 text-sm font-medium text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
