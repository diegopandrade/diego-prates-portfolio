const Experience = () => {
  const experiences = [
    {
      title: "Technical Producer",
      company: "Avalanche Studios",
      period: "2022 - Present",
      location: "Stockholm, Sweden",
      achievements: [
        "Leading production of next-generation AAA titles with budgets exceeding $50M",
        "Implemented agile development processes reducing development time by 25%",
        "Managing cross-functional teams of 80+ developers across multiple locations",
        "Pioneered new technical workflows for real-time collaboration"
      ]
    },
    {
      title: "Senior Producer",
      company: "Avalanche Studios",
      period: "2019 - 2022",
      location: "Stockholm, Sweden",
      achievements: [
        "Successfully shipped 3 major titles generating $200M+ in revenue",
        "Established quality assurance protocols improving bug reduction by 40%",
        "Led technical integration of new game engines and development tools",
        "Mentored junior producers and technical staff"
      ]
    },
    {
      title: "Producer",
      company: "Avalanche Studios",
      period: "2017 - 2019",
      location: "New York, USA",
      achievements: [
        "Coordinated development of open-world action games",
        "Managed relationships with external vendors and contractors",
        "Optimized resource allocation across multiple concurrent projects",
        "Delivered projects on time and within budget constraints"
      ]
    },
    {
      title: "Assistant Producer",
      company: "Square Enix",
      period: "2015 - 2017",
      location: "Tokyo, Japan",
      achievements: [
        "Supported production of JRPG titles for global markets",
        "Coordinated localization efforts across 8 different languages",
        "Managed QA testing phases and community feedback integration",
        "Contributed to project planning and milestone tracking"
      ]
    },
    {
      title: "Junior Producer",
      company: "Indie Game Collective",
      period: "2013 - 2015",
      location: "São Paulo, Brazil",
      achievements: [
        "Produced 5 indie games from concept to market release",
        "Established development pipelines for small team efficiency",
        "Managed publishing relationships and marketing campaigns",
        "Built foundational skills in project management and team leadership"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 hero-gradient">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through the gaming industry, from indie studios to AAA development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue to-cyber-purple opacity-50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-8 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-primary rounded-full animate-glow-pulse" />
                </div>

                {/* Content */}
                <div className="flex-1 game-card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <span className="text-primary text-lg mt-1">▸</span>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16">
          <div className="game-card max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Get the Full Story</h3>
            <p className="text-muted-foreground mb-6">
              Download my complete resume for detailed information about my experience and achievements.
            </p>
            <button className="cyber-button w-full group">
              <span className="mr-2">📄</span>
              Download Resume
              <span className="ml-2 transition-transform group-hover:translate-x-1">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;