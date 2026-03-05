import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">04. Experience</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="glass-card p-6 md:p-8 relative hover:border-primary/30 transition-all duration-300">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 hidden md:block animate-glow-pulse" />

              <div className="md:ml-12">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Software Engineer Intern</h3>
                    <p className="text-lg text-primary font-medium">TruMinds Software Pvt. Ltd.</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>June 2025 – September 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Gurugram, Haryana</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-primary font-mono text-sm">
                    <Briefcase size={16} />
                    <span>Frontend Development</span>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Built and implemented reusable UI components (BusinessCard, Button, FlipCard, etc.), reducing development time by <span className="text-foreground font-medium">30%</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Designed responsive mailer templates, improving consistency and delivery efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Optimized frontend performance in React/Next.js projects, cutting load times by <span className="text-foreground font-medium">20%</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Developed a fully functional Git Asset Uploader tool enabling asset upload, live preview, validation, and smooth development workflow integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>Collaborated in an agile environment, contributing to sprint planning, code reviews, and reusable design patterns</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TailwindCSS', 'JavaScript'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
