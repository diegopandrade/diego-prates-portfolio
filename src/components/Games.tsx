const Games = () => {
  const games = [
    {
      title: "Contraband",
      year: "TBA",
      role: "Producer",
      platforms: ["PC", "Xbox Series X/S"],
      description: "Open-world co-op action game from Avalanche Studios featuring smuggling operations in a dangerous world.",
      status: "In Development",
      image: "📦"
    },
    {
      title: "Star Wars Outlaws",
      year: "2024",
      role: "Producer",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
      description: "First open-world Star Wars game where you play as scoundrel Kay Vess in the criminal underworld.",
      status: "Released",
      image: "⭐"
    },
    {
      title: "Avatar: Frontiers of Pandora",
      year: "2023",
      role: "Producer",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
      description: "First-person action-adventure game set in the Western Frontier of Pandora with stunning visuals.",
      status: "Released",
      image: "🌿"
    },
    {
      title: "Tin & Kuna",
      year: "2022",
      role: "Producer",
      platforms: ["PC", "Nintendo Switch", "PlayStation 4"],
      description: "Charming adventure platformer featuring a magical journey through beautiful hand-crafted worlds.",
      status: "Released",
      image: "screenshot",
      imageUrl: "/src/assets/games/tin-kuna-screenshot.jpg"
    },
    {
      title: "Idle Idol",
      year: "2021",
      role: "Producer",
      platforms: ["Android", "iOS"],
      description: "K-Pop idol management game where you build your own entertainment agency and create superstar idols.",
      status: "Released",
      image: "🎤"
    },
    {
      title: "Holo Crimes",
      year: "2020",
      role: "Producer",
      platforms: ["PC", "PlayStation 5", "Nintendo Switch"],
      description: "Detective mystery game featuring holographic crime scene investigation and futuristic forensics.",
      status: "Released",
      image: "🔍"
    },
    {
      title: "Kepler - Pathfinder",
      year: "2019",
      role: "Producer",
      platforms: ["PC", "PlayStation 4", "Xbox One"],
      description: "Space exploration game where you navigate through distant worlds and uncover cosmic mysteries.",
      status: "Released",
      image: "🚀"
    },
    {
      title: "Sletters",
      year: "2018",
      role: "Producer",
      platforms: ["Android", "iOS", "PC"],
      description: "Innovative word puzzle game combining letter manipulation with strategic thinking and wordplay.",
      status: "Released",
      image: "📝"
    },
    {
      title: "Go Surf!",
      year: "2017",
      role: "Producer",
      platforms: ["Android", "iOS"],
      description: "Relaxing endless surfing game with realistic wave physics and beautiful ocean environments.",
      status: "Released",
      image: "🏄"
    },
    {
      title: "Like a Boss!",
      year: "2016",
      role: "Producer",
      platforms: ["Android", "iOS"],
      description: "Business management simulation where you build and manage your corporate empire from the ground up.",
      status: "Released",
      image: "💼"
    },
    {
      title: "Taikodom - Living Universe",
      year: "2008",
      role: "Producer",
      platforms: ["PC"],
      description: "Sci-fi MMORPG set in the 23rd century featuring space combat, ship customization, and galactic exploration.",
      status: "Released",
      image: "🌌"
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
      "Android": "📱",
      "iOS": "📱",
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
              className="game-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Game Icon/Image */}
              <div className="mb-6 text-center">
                {game.imageUrl ? (
                  <img 
                    src={game.imageUrl} 
                    alt={`${game.title} screenshot`}
                    className="w-full h-32 object-cover rounded-lg border border-border/50"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const fallback = target.nextElementSibling as HTMLElement;
                      target.style.display = 'none';
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                ) : (
                  <div className="text-6xl">{game.image}</div>
                )}
                {game.imageUrl && (
                  <div className="text-6xl hidden">{game.image}</div>
                )}
              </div>

              {/* Game Info */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-foreground">
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
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;