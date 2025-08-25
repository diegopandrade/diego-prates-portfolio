import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Games from '@/components/Games';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Games />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
