import { ArrowDown, Github, Linkedin, Mail, Code2, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/10 rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm mb-8">
            <Code2 size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Hi, I'm <span className="gradient-text">Nikhil Saini</span>
        </h1>

        <p 
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 font-medium animate-slide-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Full-Stack Web Developer
        </p>

        <p 
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          Crafting performant, scalable web applications with React, Next.js, and Node.js. 
          Passionate about clean code, modern UI/UX, and turning ideas into impactful digital experiences.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="glass" size="xl" asChild>
            <a href="/Nikhil_Saini_Resume.pdf" download>
              <Download size={18} />
              Resume
            </a>
          </Button>
        </div>

        <div 
          className="flex items-center justify-center gap-6 animate-slide-up"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <a
            href="https://github.com/nik-13204"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.2)]"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/nikhil-saini-1627a0368"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.2)]"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:nikhilsaini1704@gmail.com"
            className="p-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(175_80%_50%/0.2)]"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
