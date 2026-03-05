import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nikhil Saini | Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Nikhil Saini - Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Building performant, scalable web applications."
        />
        <meta
          name="keywords"
          content="Nikhil Saini, Full-Stack Developer, Web Developer, React Developer, Next.js, Node.js, Frontend Developer, Software Engineer"
        />
        <meta name="author" content="Nikhil Saini" />
        <meta property="og:title" content="Nikhil Saini | Full-Stack Web Developer" />
        <meta
          property="og:description"
          content="Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Building performant, scalable web applications."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nikhilsaini.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
