import { useState, useEffect } from 'react';
import profileImage from '@/assets/diego-profile-new.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker-surface via-background to-dark-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
      
      <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden glow-border">
            <img 
              src={profileImage} 
              alt="Diego Prates de Andrade - Game Producer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full opacity-20 blur-xl" />
        </div>

        {/* Name */}
        <h1 className="text-6xl font-bold mb-4 hero-gradient animate-fade-in-up">
          Diego Prates de Andrade
        </h1>

        {/* Title */}
        <p className="text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Technical Producer at{' '}
          <span className="text-primary font-semibold">Avalanche Studios</span>
        </p>

        {/* Tagline */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Crafting extraordinary gaming experiences through technical excellence and creative vision. 
          Bridging the gap between ambitious design and flawless execution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button group"
          >
            Explore My Work
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;