const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "diego.prates@email.com",
      link: "mailto:diego.prates@email.com",
      description: "Best for business inquiries"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 hero-gradient">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next gaming project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card group interactive-element block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl group-hover:animate-bounce">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {method.label}
                  </h3>
                  <p className="text-muted-foreground mb-1 animated-underline">{method.value}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
                <div className="text-2xl text-primary group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="game-card max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're looking to discuss a project, explore partnership opportunities, 
              or just want to connect with a fellow gaming enthusiast, I'm always open to meaningful conversations.
            </p>
            <a 
              href="mailto:diego.prates@email.com"
              className="cyber-button inline-flex items-center group"
            >
              <span className="mr-2">🚀</span>
              Start a Conversation
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Diego Prates de Andrade. Crafted with passion for gaming excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;