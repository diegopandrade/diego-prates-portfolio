const Experience = () => {
  const experiences = [
    {
      company: "Avalanche Studios",
      location: "Stockholm, Sweden",
      roles: [
        {
          title: "Technical Producer",
          period: "2022 - Present",
          achievements: [
            "Leading production of next-generation AAA titles with budgets exceeding $50M",
            "Implemented agile development processes reducing development time by 25%",
            "Managing cross-functional teams of 80+ developers across multiple locations",
            "Pioneered new technical workflows for real-time collaboration"
          ]
        },
        {
          title: "Senior Producer",
          period: "2019 - 2022",
          achievements: [
            "Successfully shipped 3 major titles generating $200M+ in revenue",
            "Established quality assurance protocols improving bug reduction by 40%",
            "Led technical integration of new game engines and development tools",
            "Mentored junior producers and technical staff"
          ]
        },
        {
          title: "Producer",
          period: "2017 - 2019",
          location: "New York, USA",
          achievements: [
            "Coordinated development of open-world action games",
            "Managed relationships with external vendors and contractors",
            "Optimized resource allocation across multiple concurrent projects",
            "Delivered projects on time and within budget constraints"
          ]
        }
      ]
    },
    {
      company: "Samsung - SIDIA",
      location: "São Paulo, Brazil",
      roles: [
        {
          title: "Senior Game Producer",
          period: "2014 - 2017",
          achievements: [
            "Led development of mobile gaming experiences for Samsung devices",
            "Managed cross-platform game optimization and performance",
            "Coordinated with hardware teams for gaming-focused features",
            "Delivered 10+ mobile titles with 50M+ combined downloads"
          ]
        },
        {
          title: "Game Producer",
          period: "2012 - 2014",
          achievements: [
            "Produced mobile games for Samsung's ecosystem",
            "Established QA processes for mobile game development",
            "Managed relationships with external development studios",
            "Contributed to Samsung's mobile gaming strategy"
          ]
        }
      ]
    },
    {
      company: "Square Enix",
      location: "Tokyo, Japan",
      roles: [
        {
          title: "Assistant Producer",
          period: "2015 - 2017",
          achievements: [
            "Supported production of JRPG titles for global markets",
            "Coordinated localization efforts across 8 different languages",
            "Managed QA testing phases and community feedback integration",
            "Contributed to project planning and milestone tracking"
          ]
        }
      ]
    },
    {
      company: "Hoplon Infotainment",
      location: "Florianópolis, Brazil",
      roles: [
        {
          title: "Producer",
          period: "2013 - 2014",
          achievements: [
            "Producer with expertise in both creative and technical aspects",
            "Collaborated with Square Enix on major gaming projects",
            "Led cross-functional teams in game development cycles",
            "Managed project timelines and deliverable coordination"
          ]
        },
        {
          title: "Programmer",
          period: "2012 - 2013",
          achievements: [
            "Game Developer skilled in Unity3D, C#, and AI implementation",
            "Developed core gameplay mechanics and systems",
            "Implemented AI behaviors and game logic",
            "Contributed to technical architecture decisions"
          ]
        }
      ]
    },
    {
      company: "Indie Game Collective",
      location: "São Paulo, Brazil",
      roles: [
        {
          title: "Junior Producer",
          period: "2013 - 2015",
          achievements: [
            "Produced 5 indie games from concept to market release",
            "Established development pipelines for small team efficiency",
            "Managed publishing relationships and marketing campaigns",
            "Built foundational skills in project management and team leadership"
          ]
        }
      ]
    }
  ];

  // Debug: Log the experiences structure
  console.log('Experiences data:', experiences);
  console.log('Number of experience entries:', experiences.length);
  console.log('Samsung entries:', experiences.filter(exp => exp.company.includes('Samsung')));

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
                <div className="relative z-10 w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full animate-glow-pulse" />
                </div>

                {/* Content */}
                <div className="flex-1 game-card">
                  {/* Company Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="border-l-2 border-primary/30 pl-4">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                          <h4 className="text-xl font-semibold text-foreground">{role.title}</h4>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-muted-foreground">{role.period}</p>
                            {role.location && role.location !== exp.location && (
                              <p className="text-sm text-muted-foreground">{role.location}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-3">
                          {role.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3">
                              <span className="text-primary text-lg mt-1">▸</span>
                              <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                            </div>
                          ))}
                        </div>
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
          <button className="cyber-button group">
            <span className="mr-2">📄</span>
            Download Resume
            <span className="ml-2 transition-transform group-hover:translate-x-1">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;