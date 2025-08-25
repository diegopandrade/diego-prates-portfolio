const Games = () => {
  const games = [
    {
      title: "Apex Legends: Breakout",
      year: "2024",
      role: "Technical Producer",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
      description: "Battle royale evolution with groundbreaking new mechanics and enhanced competitive features.",
      status: "Released",
      image: "🎯"
    },
    {
      title: "Mad Max: Fury Road - The Game",
      year: "2023",
      role: "Lead Producer",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
      description: "Open-world action adventure set in the iconic Mad Max universe with innovative vehicle combat.",
      status: "Released",
      image: "🏜️"
    },
    {
      title: "Just Cause 5: Global Chaos",
      year: "2022",
      role: "Senior Producer",
      platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
      description: "The ultimate sandbox destruction experience with next-gen physics and massive open worlds.",
      status: "Released",
      image: "💥"
    },
    {
      title: "Generation Zero: Extended",
      year: "2021",
      role: "Technical Producer",
      platforms: ["PC", "PlayStation 4", "Xbox One"],
      description: "Survival action game set in 1980s Sweden with cooperative multiplayer and robot adversaries.",
      status: "Released",
      image: "🤖"
    },
    {
      title: "Hunter: Call of the Wild - Arctic",
      year: "2020",
      role: "Producer",
      platforms: ["PC", "PlayStation 4", "Xbox One"],
      description: "Immersive hunting experience in pristine arctic environments with realistic wildlife behavior.",
      status: "Released",
      image: "🦌"
    },
    {
      title: "Project Nexus",
      year: "2025",
      role: "Executive Producer",
      platforms: ["TBA"],
      description: "Next-generation action RPG pushing the boundaries of interactive storytelling.",
      status: "In Development",
      image: "🔮"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    const icons: { [key: string]: string } = {
      "PC": "💻",
      "PlayStation 4": "🎮",
      "PlayStation 5": "🎮",
      "Xbox One": "🎮",
      "Xbox Series X/S": "🎮",
      "Nintendo Switch": "🎮",
      "TBA": "❓"
    };
    return icons[platform] || "🎮";
  };

  return (
    <section id="games" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 hero-gradient">Game Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of the interactive experiences I've helped bring to life across multiple platforms and genres.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div 
              key={index}
              className="game-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Game Icon */}
              <div className="text-6xl mb-6 text-center group-hover:animate-pulse">
                {game.image}
              </div>

              {/* Game Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-primary">{game.year}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      game.status === 'Released' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                </div>

                <p className="text-primary font-semibold">{game.role}</p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {game.description}
                </p>

                {/* Platforms */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">Available Platforms:</p>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms.map((platform, platformIndex) => (
                      <span 
                        key={platformIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                      >
                        <span>{getPlatformIcon(platform)}</span>
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;