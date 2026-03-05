import { Code, Rocket, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with best practices',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and exceptional user experience',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Thriving in agile teams with effective communication',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">01. About Me</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Full-Stack Web Developer</span> currently 
              pursuing B.Tech in Computer Science at The Technological Institute of Textile and Sciences, 
              Bhiwani. With a strong foundation in modern web technologies, I specialize in building 
              responsive, high-performance applications.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey includes hands-on experience as a <span className="text-foreground font-medium">Software Engineer Intern 
              at TruMinds</span>, where I developed reusable UI components, optimized frontend performance, 
              and collaborated in an agile environment. I'm passionate about creating seamless user 
              experiences and writing clean, efficient code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy solving algorithmic challenges on LeetCode, exploring new 
              technologies, and contributing to open-source projects. I believe in continuous learning 
              and staying updated with the latest industry trends.
            </p>

            <div className="pt-4">
              <p className="text-muted-foreground font-mono text-sm mb-3">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'TailwindCSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-border/50 bg-card/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
