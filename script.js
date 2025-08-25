// Game Producer Portfolio - JavaScript Functionality

// Game data with detailed information
const gameData = {
    'contraband': {
        title: 'Contraband',
        year: 'TBA',
        status: 'In Development',
        role: 'Producer',
        platforms: ['💻 PC', '🎮 Xbox Series X/S'],
        description: 'Open-world co-op action game from Avalanche Studios featuring smuggling operations in a dangerous world.',
        responsibilities: [
            'Led cross-functional team coordination between development studios',
            'Managed project timelines and milestone deliveries',
            'Facilitated communication with Xbox Game Studios publishers',
            'Oversaw quality assurance and testing protocols',
            'Coordinated marketing and promotional campaign elements'
        ],
        techStack: ['Unreal Engine 5', 'C++', 'Blueprint', 'Perforce', 'JIRA', 'Confluence'],
        media: [
            { type: 'image', src: 'src/assets/games/contraband.jpg', thumb: 'src/assets/games/contraband.jpg' }
        ]
    },
    'star-wars-outlaws': {
        title: 'Star Wars Outlaws',
        year: '2024',
        status: 'Released',
        role: 'Producer',
        platforms: ['💻 PC', '🎮 PlayStation 5', '🎮 Xbox Series X/S'],
        description: 'First open-world Star Wars game where you play as scoundrel Kay Vess in the criminal underworld.',
        responsibilities: [
            'Managed development workflow for open-world content creation',
            'Coordinated with Lucasfilm Games for IP compliance and approval',
            'Led user experience testing and player feedback integration',
            'Oversaw narrative development and character progression systems',
            'Managed relationships with external technology partners'
        ],
        techStack: ['Snowdrop Engine', 'C++', 'Python', 'Perforce', 'Shotgun', 'Confluence'],
        media: [
            { type: 'image', src: 'src/assets/games/star-wars-outlaws.jpg', thumb: 'src/assets/games/star-wars-outlaws.jpg' }
        ]
    },
    'avatar-pandora': {
        title: 'Avatar: Frontiers of Pandora',
        year: '2023',
        status: 'Released',
        role: 'Producer',
        platforms: ['💻 PC', '🎮 PlayStation 5', '🎮 Xbox Series X/S'],
        description: 'First-person action-adventure game set in the Western Frontier of Pandora with stunning visuals.',
        responsibilities: [
            'Coordinated with Disney and Lightstorm Entertainment for brand alignment',
            'Managed technical implementation of advanced rendering systems',
            'Led environmental design team collaboration',
            'Oversaw performance optimization across multiple platforms',
            'Coordinated localization efforts for global release'
        ],
        techStack: ['Snowdrop Engine', 'C++', 'HLSL', 'Perforce', 'Maya', 'Substance Suite'],
        media: [
            { type: 'image', src: 'src/assets/games/avatar-pandora.jpg', thumb: 'src/assets/games/avatar-pandora.jpg' }
        ]
    },
    'tin-kuna': {
        title: 'Tin & Kuna',
        year: '2022',
        status: 'Released',
        role: 'Producer',
        platforms: ['💻 PC', '🎮 Nintendo Switch', '🎮 PlayStation 4'],
        description: 'Charming adventure platformer featuring a magical journey through beautiful hand-crafted worlds.',
        responsibilities: [
            'Led indie development team coordination and resource allocation',
            'Managed platformer mechanics design and implementation',
            'Coordinated art direction and visual style consistency',
            'Oversaw platform-specific optimization and certification',
            'Led community engagement and social media strategy'
        ],
        techStack: ['Unity', 'C#', 'Git', 'Trello', 'Photoshop', 'Audacity'],
        media: [
            { type: 'image', src: 'src/assets/games/tin-kuna.jpg', thumb: 'src/assets/games/tin-kuna.jpg' }
        ]
    },
    'idle-idol': {
        title: 'Idle Idol',
        year: '2021',
        status: 'Released',
        role: 'Producer',
        platforms: ['📱 Android', '📱 iOS'],
        description: 'K-Pop idol management game where you build your own entertainment agency and create superstar idols.',
        responsibilities: [
            'Led mobile game monetization strategy and implementation',
            'Managed user acquisition and retention optimization',
            'Coordinated with K-Pop industry consultants for authenticity',
            'Oversaw live operations and content update scheduling',
            'Led analytics implementation and player behavior analysis'
        ],
        techStack: ['Unity', 'C#', 'Firebase', 'Google Analytics', 'App Store Connect', 'Photoshop'],
        media: [
            { type: 'image', src: 'src/assets/games/idle-idol.jpg', thumb: 'src/assets/games/idle-idol.jpg' }
        ]
    },
    'holo-crimes': {
        title: 'Holo Crimes',
        year: '2020',
        status: 'Released',
        role: 'Producer',
        platforms: ['💻 PC', '🎮 PlayStation 5', '🎮 Nintendo Switch'],
        description: 'Detective mystery game featuring holographic crime scene investigation and futuristic forensics.',
        responsibilities: [
            'Led narrative design and mystery puzzle development',
            'Managed technical implementation of holographic UI systems',
            'Coordinated with law enforcement consultants for realism',
            'Oversaw voice acting direction and audio implementation',
            'Led quality assurance for complex investigation mechanics'
        ],
        techStack: ['Unreal Engine 4', 'C++', 'Blueprint', 'Wwise', 'Perforce', 'Trello'],
        media: [
            { type: 'image', src: 'src/assets/games/holo-crimes.jpg', thumb: 'src/assets/games/holo-crimes.jpg' }
        ]
    },
    'kepler-pathfinder': {
        title: 'Kepler - Pathfinder',
        year: '2019',
        status: 'Released',
        role: 'Producer',
        platforms: ['💻 PC', '🎮 PlayStation 4', '🎮 Xbox One'],
        description: 'Space exploration game where you navigate through distant worlds and uncover cosmic mysteries.',
        responsibilities: [
            'Led procedural generation system design and implementation',
            'Managed scientific accuracy consultation with space agencies',
            'Coordinated VR compatibility development and testing',
            'Oversaw multiplayer networking infrastructure',
            'Led educational content partnerships with science institutions'
        ],
        techStack: ['Unity', 'C#', 'Photon Network', 'Git', 'Blender', 'FMOD'],
        media: [
            { type: 'image', src: 'src/assets/games/kepler-pathfinder.jpg', thumb: 'src/assets/games/kepler-pathfinder.jpg' }
        ]
    },
    'sletters': {
        title: 'Sletters',
        year: '2018',
        status: 'Released',
        role: 'Producer',
        platforms: ['📱 Android', '📱 iOS', '💻 PC'],
        description: 'Innovative word puzzle game combining letter manipulation with strategic thinking and wordplay.',
        responsibilities: [
            'Led puzzle design system and difficulty balancing',
            'Managed cross-platform development and synchronization',
            'Coordinated with linguistic experts for multi-language support',
            'Oversaw accessibility features implementation',
            'Led user interface design for optimal mobile experience'
        ],
        techStack: ['Unity', 'C#', 'SQLite', 'Git', 'Adobe Creative Suite', 'TestFlight'],
        media: [
            { type: 'image', src: 'src/assets/games/sletters.jpg', thumb: 'src/assets/games/sletters.jpg' }
        ]
    },
    'go-surf': {
        title: 'Go Surf!',
        year: '2017',
        status: 'Released',
        role: 'Producer',
        platforms: ['📱 Android', '📱 iOS'],
        description: 'Relaxing endless surfing game with realistic wave physics and beautiful ocean environments.',
        responsibilities: [
            'Led physics simulation development for realistic wave mechanics',
            'Managed weather system integration and environmental effects',
            'Coordinated with professional surfers for motion capture',
            'Oversaw meditation and relaxation features implementation',
            'Led social sharing and community features development'
        ],
        techStack: ['Unity', 'C#', 'Physics2D', 'Git', 'After Effects', 'Google Play Console'],
        media: [
            { type: 'image', src: 'src/assets/games/go-surf.jpg', thumb: 'src/assets/games/go-surf.jpg' }
        ]
    },
    'like-a-boss': {
        title: 'Like a Boss!',
        year: '2016',
        status: 'Released',
        role: 'Producer',
        platforms: ['📱 Android', '📱 iOS'],
        description: 'Business management simulation where you build and manage your corporate empire from the ground up.',
        responsibilities: [
            'Led economic simulation and balance design',
            'Managed business consultant integration for realistic mechanics',
            'Coordinated data visualization and analytics dashboard',
            'Oversaw tutorial system and onboarding experience',
            'Led competitive analysis and market positioning strategy'
        ],
        techStack: ['Unity', 'C#', 'JSON', 'Git', 'Excel', 'App Store Optimization'],
        media: [
            { type: 'image', src: 'src/assets/games/like-a-boss.jpg', thumb: 'src/assets/games/like-a-boss.jpg' }
        ]
    },
    'taikodom': {
        title: 'Taikodom - Living Universe',
        year: '2008',
        status: 'Released',
        role: 'Producer',
        platforms: ['💻 PC'],
        description: 'Sci-fi MMORPG set in the 23rd century featuring space combat, ship customization, and galactic exploration.',
        responsibilities: [
            'Led server architecture design and implementation',
            'Managed player economy and in-game market systems',
            'Coordinated guild system and social features development',
            'Oversaw large-scale space battle mechanics',
            'Led community management and player feedback integration'
        ],
        techStack: ['C++', 'DirectX', 'SQL Server', 'CVS', '3ds Max', 'Photoshop'],
        media: [
            { type: 'image', src: 'src/assets/games/taikodom.jpg', thumb: 'src/assets/games/taikodom.jpg' }
        ]
    }
};

// Current gallery state
let currentGameId = '';
let currentMediaIndex = 0;

// Modal functions
function openGameModal(gameId) {
    const game = gameData[gameId];
    if (!game) return;
    
    currentGameId = gameId;
    currentMediaIndex = 0;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = game.title;
    document.getElementById('modalYear').textContent = game.year;
    document.getElementById('modalStatus').textContent = game.status;
    document.getElementById('modalRole').textContent = game.role;
    document.getElementById('modalDescription').textContent = game.description;
    
    // Set status badge class
    const statusElement = document.getElementById('modalStatus');
    statusElement.className = game.status === 'Released' ? 'info-status status-released' : 'info-status status-development';
    
    // Populate platforms
    const platformsContainer = document.getElementById('modalPlatforms');
    platformsContainer.innerHTML = game.platforms.map(platform => 
        `<span class="platform-tag">${platform}</span>`
    ).join('');
    
    // Populate responsibilities
    const responsibilitiesContainer = document.getElementById('modalResponsibilities');
    responsibilitiesContainer.innerHTML = game.responsibilities.map(responsibility => 
        `<li>${responsibility}</li>`
    ).join('');
    
    // Populate tech stack
    const techStackContainer = document.getElementById('modalTechStack');
    techStackContainer.innerHTML = game.techStack.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Setup gallery
    setupGallery(game.media);
    
    // Show modal
    document.getElementById('gameModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGameModal() {
    document.getElementById('gameModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function setupGallery(media) {
    if (!media || media.length === 0) return;
    
    // Setup main viewer
    updateGalleryViewer(media[0]);
    
    // Setup thumbnails
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    thumbnailsContainer.innerHTML = media.map((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        return `<img src="${item.thumb}" alt="Media ${index + 1}" class="gallery-thumbnail ${activeClass}" onclick="selectMedia(${index})">`;
    }).join('');
    
    // Update navigation buttons
    updateNavigationButtons(media.length);
}

function updateGalleryViewer(mediaItem) {
    const viewer = document.getElementById('galleryViewer');
    
    if (mediaItem.type === 'video') {
        viewer.innerHTML = `
            <video controls autoplay muted>
                <source src="${mediaItem.src}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        viewer.innerHTML = `<img src="${mediaItem.src}" alt="Game screenshot">`;
    }
}

function selectMedia(index) {
    const game = gameData[currentGameId];
    if (!game || !game.media[index]) return;
    
    currentMediaIndex = index;
    updateGalleryViewer(game.media[index]);
    
    // Update thumbnail active state
    document.querySelectorAll('.gallery-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function previousMedia() {
    const game = gameData[currentGameId];
    if (!game) return;
    
    currentMediaIndex = currentMediaIndex > 0 ? currentMediaIndex - 1 : game.media.length - 1;
    selectMedia(currentMediaIndex);
}

function nextMedia() {
    const game = gameData[currentGameId];
    if (!game) return;
    
    currentMediaIndex = currentMediaIndex < game.media.length - 1 ? currentMediaIndex + 1 : 0;
    selectMedia(currentMediaIndex);
}

function updateNavigationButtons(mediaCount) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (mediaCount <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        closeGameModal();
    }
}

// Keyboard navigation for modal
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('gameModal');
    if (modal.style.display === 'block') {
        switch(event.key) {
            case 'Escape':
                closeGameModal();
                break;
            case 'ArrowLeft':
                previousMedia();
                break;
            case 'ArrowRight':
                nextMedia();
                break;
        }
    }
});

// Main Portfolio Class
class Portfolio {
    constructor() {
        console.log('Portfolio constructor started');
        
        this.nav = document.getElementById('navigation');
        console.log('Nav element:', this.nav);
        
        this.navLinks = document.querySelectorAll('.nav-link');
        console.log('Nav links found:', this.navLinks.length);
        
        this.scrollArrow = document.querySelector('.scroll-arrow');
        console.log('Scroll arrow:', this.scrollArrow);
        
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        console.log('Mobile menu btn:', this.mobileMenuBtn);
        
        this.sections = ['hero', 'about', 'games', 'experience', 'contact'];
        this.activeSection = 'hero';
        
        console.log('About to call init()');
        this.init();
        console.log('Portfolio constructor completed');
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
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => {
                // Future: implement mobile menu toggle
                console.log('Mobile menu clicked - implement dropdown menu');
            });
        } else {
            console.log('Mobile menu button not found');
        }
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
        // Temporarily disabled game-card animation to fix click issues
        // this.addStaggerAnimation('.game-card', 150);
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
        // Game card hover effects (avoid conflict with modal clicks)
        const gameCards = document.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.game-icon-image');
                if (icon) {
                    icon.style.transform = 'scale(1.05)';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.game-icon-image');
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
        // Enhanced keyboard navigation (avoid conflict with modal)
        document.addEventListener('keydown', (e) => {
            // Only handle these keys if modal is not open
            const modal = document.getElementById('gameModal');
            if (!modal || modal.style.display !== 'block') {
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
    console.log('DOM Content Loaded - starting initialization');
    
    // Initialize main portfolio functionality
    try {
        window.portfolio = new Portfolio();
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Portfolio initialization failed:', error);
    }
    
    // Initialize enhanced interactions
    try {
        new PortfolioInteractions();
        console.log('PortfolioInteractions initialized');
    } catch (error) {
        console.error('PortfolioInteractions failed:', error);
    }
    
    // Initialize performance optimizations
    try {
        new PortfolioPerformance();
        console.log('PortfolioPerformance initialized');
    } catch (error) {
        console.error('PortfolioPerformance failed:', error);
    }
    
    // Initialize error handling
    try {
        new PortfolioErrorHandling();
        console.log('PortfolioErrorHandling initialized');
    } catch (error) {
        console.error('PortfolioErrorHandling failed:', error);
    }
    
    // Initialize analytics
    try {
        new PortfolioAnalytics();
        console.log('PortfolioAnalytics initialized');
    } catch (error) {
        console.error('PortfolioAnalytics failed:', error);
    }
    
    console.log('🎮 Portfolio with game modals initialized successfully!');
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
    module.exports = { Portfolio, gameData };
}