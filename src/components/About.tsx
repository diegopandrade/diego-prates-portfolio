const About = () => {

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 hero-gradient">About</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Turning Vision Into Reality
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Technical Producer at Avalanche Studios, I specialize in bridging the creative and technical aspects of game development. My expertise lies in transforming ambitious game concepts into polished, market-ready experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a deep understanding of both the artistic vision and technical constraints, I ensure that every project delivers exceptional quality while meeting deadlines and budget requirements. My approach combines agile methodologies with creative problem-solving to overcome the unique challenges each game presents.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive in collaborative environments where innovation meets execution, always pushing the boundaries of what's possible in interactive entertainment.
            </p>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <div className="game-card">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-xl font-semibold text-foreground mb-1">Published Games</div>
              <div className="text-muted-foreground">Across multiple platforms and genres</div>
            </div>
            <div className="game-card">
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-xl font-semibold text-foreground mb-1">Players Reached</div>
              <div className="text-muted-foreground">Global audience engagement</div>
            </div>
            <div className="game-card">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-xl font-semibold text-foreground mb-1">Industry Awards</div>
              <div className="text-muted-foreground">Recognition for excellence</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;