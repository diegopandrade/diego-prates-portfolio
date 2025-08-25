// Game Producer Portfolio - JavaScript Functionality

class Portfolio {
    constructor() {
        this.nav = document.getElementById('navigation');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.scrollArrow = document.querySelector('.scroll-arrow');
        
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        this.sections = ['hero', 'about', 'games', 'experience', 'contact'];
        this.activeSection = 'hero';
        
        this.init();
    }
    
    init() {
        this.setupScrollHandling();
        this.setupNavigation();
        this.setupAnimations();
        this.setupButtons();
        this.observeSections();
    }
    
    setupScrollHandling() {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateNavOnScroll();
                    this.updateActiveSection();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    updateNavOnScroll() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 50) {
            this.nav.classList.add('scrolled');
            // Hide scroll arrow when scrolling down
            if (this.scrollArrow) {
                this.scrollArrow.style.opacity = '0';
                this.scrollArrow.style.pointerEvents = 'none';
            }
        } else {
            this.nav.classList.remove('scrolled');
            // Show scroll arrow when at top
            if (this.scrollArrow) {
                this.scrollArrow.style.opacity = '0.7';
                this.scrollArrow.style.pointerEvents = 'auto';
            }
        }
    }
    
    updateActiveSection() {
        const scrollTop = window.pageYOffset;
        let newActiveSection = 'hero';
        
        for (const sectionId of this.sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + scrollTop;
                
                if (scrollTop >= elementTop - 100) {
                    newActiveSection = sectionId;
                }
            }
        }
        
        if (newActiveSection !== this.activeSection) {
            this.activeSection = newActiveSection;
            this.updateNavLinks();
        }
    }
    
    updateNavLinks() {
        this.navLinks.forEach(link => {
            const section = link.getAttribute('data-section');
            if (section === this.activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setupNavigation() {
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                this.scrollToSection(sectionId);
            });
        });
        
        
        // Mobile menu (placeholder for future implementation)
        this.mobileMenuBtn.addEventListener('click', () => {
            // Future: implement mobile menu toggle
            console.log('Mobile menu clicked - implement dropdown menu');
        });
    }
    
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed nav
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    setupButtons() {
        // Scroll buttons in hero section
        const scrollButtons = document.querySelectorAll('[data-scroll]');
        scrollButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = button.getAttribute('data-scroll');
                this.scrollToSection(targetSection);
            });
        });
        
        // Contact links
        const contactCards = document.querySelectorAll('.contact-card');
        contactCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Analytics tracking could go here
                console.log('Contact method clicked:', card.href);
            });
        });
        
        // Resume download button
        const resumeButton = document.querySelector('.resume-button');
        if (resumeButton) {
            resumeButton.addEventListener('click', (e) => {
                e.preventDefault();
                // Placeholder for resume download
                console.log('Resume download requested');
                alert('Resume download functionality would be implemented here');
            });
        }
    }
    
    setupAnimations() {
        // Fade in hero content on page load
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Add stagger animation to cards
        this.addStaggerAnimation('.highlight-card', 100);
        this.addStaggerAnimation('.game-card', 150);
        this.addStaggerAnimation('.contact-card', 100);
        this.addStaggerAnimation('.timeline-item', 200);
    }
    
    addStaggerAnimation(selector, delay) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
        
        // Trigger animations when elements come into view
        this.observeElements(elements, delay);
    }
    
    observeElements(elements, delay) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * delay);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    
    observeSections() {
        // Observe sections for analytics or other purposes
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    // Analytics tracking could go here
                    console.log(`Section viewed: ${sectionId}`);
                }
            });
        }, {
            threshold: 0.5
        });
        
        this.sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                sectionObserver.observe(element);
            }
        });
    }
}

// Enhanced interactions
class PortfolioInteractions {
    constructor() {
        this.setupHoverEffects();
        this.setupKeyboardNavigation();
        this.setupLoadingStates();
    }
    
    setupHoverEffects() {
        // Game card hover effects
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.game-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.game-icon');
                if (icon) {
                    icon.style.transform = 'scale(1)';
                }
            });
        });
        
        // Button hover effects
        const buttons = document.querySelectorAll('.cyber-button, .outline-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                const arrow = button.querySelector('.button-arrow');
                if (arrow) {
                    arrow.style.transform = 'translateX(4px)';
                }
            });
            
            button.addEventListener('mouseleave', () => {
                const arrow = button.querySelector('.button-arrow');
                if (arrow) {
                    arrow.style.transform = 'translateX(0)';
                }
            });
        });
    }
    
    setupKeyboardNavigation() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Escape key to scroll to top
            if (e.key === 'Escape') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            // Arrow keys for section navigation
            if (e.key === 'ArrowDown' && e.ctrlKey) {
                e.preventDefault();
                this.navigateToNextSection();
            }
            
            if (e.key === 'ArrowUp' && e.ctrlKey) {
                e.preventDefault();
                this.navigateToPrevSection();
            }
        });
    }
    
    navigateToNextSection() {
        const sections = ['hero', 'about', 'games', 'experience', 'contact'];
        const currentIndex = sections.indexOf(portfolio.activeSection);
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        portfolio.scrollToSection(sections[nextIndex]);
    }
    
    navigateToPrevSection() {
        const sections = ['hero', 'about', 'games', 'experience', 'contact'];
        const currentIndex = sections.indexOf(portfolio.activeSection);
        const prevIndex = Math.max(currentIndex - 1, 0);
        portfolio.scrollToSection(sections[prevIndex]);
    }
    
    setupLoadingStates() {
        // Add loading states for external links
        const externalLinks = document.querySelectorAll('a[target="_blank"]');
        externalLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Add visual feedback for external links
                link.style.opacity = '0.7';
                setTimeout(() => {
                    link.style.opacity = '1';
                }, 200);
            });
        });
    }
}

// Performance optimization
class PortfolioPerformance {
    constructor() {
        this.setupLazyLoading();
        this.setupPreloadCritical();
    }
    
    setupLazyLoading() {
        // Lazy load images when they're about to enter viewport
        const images = document.querySelectorAll('img[src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Image is already loaded, just add fade-in effect
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.3s ease-out';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                    
                    // If image is already cached, show immediately
                    if (img.complete) {
                        img.style.opacity = '1';
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    setupPreloadCritical() {
        // Preload critical resources
        const criticalResources = [
            'styles.css',
            'src/assets/diego-profile-new.jpg'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
}

// Error handling and fallbacks
class PortfolioErrorHandling {
    constructor() {
        this.setupImageFallbacks();
        this.setupGracefulDegradation();
    }
    
    setupImageFallbacks() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', () => {
                // Replace broken images with placeholder
                img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                img.alt = 'Image not available';
            });
        });
    }
    
    setupGracefulDegradation() {
        // Check for JavaScript and CSS support
        document.documentElement.classList.add('js-enabled');
        
        // Fallback for browsers without Intersection Observer
        if (!('IntersectionObserver' in window)) {
            // Show all elements immediately
            const hiddenElements = document.querySelectorAll('[style*="opacity: 0"]');
            hiddenElements.forEach(element => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        }
    }
}

// Analytics and tracking (placeholder)
class PortfolioAnalytics {
    constructor() {
        this.setupEventTracking();
    }
    
    setupEventTracking() {
        // Track important user interactions
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a, button');
            if (target) {
                this.trackEvent('click', {
                    element: target.tagName,
                    text: target.textContent.trim(),
                    url: target.href || null
                });
            }
        });
        
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track milestone scrolls
                if ([25, 50, 75, 90].includes(scrollPercent)) {
                    this.trackEvent('scroll', { depth: scrollPercent });
                }
            }
        });
    }
    
    trackEvent(action, data) {
        // Placeholder for analytics implementation
        console.log('Analytics Event:', { action, data, timestamp: Date.now() });
        
        // In production, this would send to your analytics service:
        // gtag('event', action, data);
        // analytics.track(action, data);
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main portfolio functionality
    window.portfolio = new Portfolio();
    
    // Initialize enhanced interactions
    new PortfolioInteractions();
    
    // Initialize performance optimizations
    new PortfolioPerformance();
    
    // Initialize error handling
    new PortfolioErrorHandling();
    
    // Initialize analytics
    new PortfolioAnalytics();
    
    console.log('🎮 Portfolio initialized successfully!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Portfolio hidden');
    } else {
        console.log('Portfolio visible');
        // Refresh any time-sensitive content
    }
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate layouts if needed
        console.log('Window resized, layout refreshed');
    }, 250);
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Portfolio, PortfolioInteractions, PortfolioPerformance };
}