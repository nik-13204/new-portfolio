import { GraduationCap, Award, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'The Technological Institute of Textile and Sciences',
    location: 'Bhiwani, Haryana',
    period: '2022 – 2026',
    gpa: '74.2% (till 6th Sem)',
    current: true,
  },
  {
    degree: '12th Class (Non-Medical)',
    institution: 'Little Hearts Public School',
    location: 'Bhiwani, Haryana',
    period: '2021 – 2022',
    gpa: '87.4%',
    current: false,
  },
  {
    degree: '10th Class',
    institution: 'Little Hearts Public School',
    location: 'Bhiwani, Haryana',
    period: '2019 – 2020',
    gpa: '81%',
    current: false,
  },
];

const achievements = [
  {
    title: '3rd Place - Mock Placement Event',
    description: 'Secured 3rd place in Mavericks Society Mock Placement Event (aptitude & coding) at TIT&S',
    date: 'August 2024',
    icon: Trophy,
  },
  {
    title: 'Certificate of Excellence',
    description: 'Java and Data Structures & Algorithms (DSA) from Apna College',
    icon: Award,
  },
  {
    title: 'MERN Full Stack Certification',
    description: 'Completed certification from Apna College, building 3 mini projects and 1 major project',
    icon: Award,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4">05. Education</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={item.degree} className="relative pl-12">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-4 top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
                        item.current ? 'bg-primary animate-glow-pulse' : 'bg-muted-foreground'
                      }`}
                    />

                    <div className="glass-card p-5 hover:border-primary/30 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">{item.degree}</h4>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary text-sm mb-1">{item.institution}</p>
                      <p className="text-muted-foreground text-sm mb-2">{item.location}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="text-muted-foreground">{item.period}</span>
                        <span className="text-foreground font-medium">GPA: {item.gpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <Trophy className="text-primary" />
              Achievements & Certifications
            </h3>

            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      {item.date && (
                        <p className="text-primary font-mono text-xs mt-2">{item.date}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
