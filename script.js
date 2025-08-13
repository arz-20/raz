// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const contactForm = document.getElementById('contact-form');
const modalOverlay = document.getElementById('modal-overlay');

// Gallery data
const galleryItems = [
    {
        category: 'carpet',
        image: 'img/img14.jpg',
        title: 'Luxury Living Room Carpet',
        description: 'Premium carpet installation in residential living space'
    },
    {
        category: 'vinyl',
        image: 'img/vinyl.jpg',
        title: 'Modern Vinyl Flooring',
        description: 'Waterproof vinyl planks perfect for high-traffic areas'
    },
    {
        category: 'tiles',
        image: 'img/office.avif',
        title: 'Office Lino Tiles',
        description: 'Professional linoleum tiles for commercial spaces'
    },
    {
        category: 'stairs',
        image: 'img/img5.jpg',
        title: 'Carpeted Stairs',
        description: 'Safe and comfortable stair carpet installation'
    },
    {
        category: 'vinyl',
        image: 'img/img13.jpg',
        title: 'Kitchen Vinyl',
        description: 'Easy-to-clean vinyl flooring for kitchen areas'
    },
    {
        category: 'carpet',
        image: 'img/img12.jpg',
        title: 'Bedroom Carpet',
        description: 'Cozy carpet installation for comfortable bedrooms'
    }
];

// Room data for interactive selector
const roomData = {
    kitchen: {
        title: 'Kitchen Flooring',
        description: 'Durable and easy-to-clean flooring solutions perfect for busy kitchens.',
        options: [
            {
                name: 'Luxury Vinyl',
                image: 'img/img16.avif',
                features: ['Waterproof', 'Easy maintenance', 'Scratch resistant']
            }
        ]
    },
    living: {
        title: 'Living Room Flooring',
        description: 'Comfortable and stylish flooring to make your living space inviting.',
        options: [
            {
                name: 'Plush Carpet',
                image: 'img/img16.jpg',
                features: ['Sound absorption', 'Warmth', 'Comfort underfoot']
            },
            {
                name: 'Luxury Vinyl Plank',
                image: 'img/img19.webp',
                features: ['Wood appearance', 'Pet friendly', 'Easy cleaning']
            }
        ]
    },
    bathroom: {
        title: 'Bathroom Flooring',
        description: 'Water-resistant flooring solutions designed for wet environments.',
        options: [
            {
                name: 'Vinyl Sheet',
                image: 'img/img20.webp',
                features: ['Seamless installation', 'Soft underfoot', 'Quick installation']
            }
        ]
    },
    bedroom: {
        title: 'Bedroom Flooring',
        description: 'Quiet and comfortable flooring for restful bedroom spaces.',
        options: [
            {
                name: 'Soft Carpet',
                image: 'img/img22.jpg',
                features: ['Sound dampening', 'Thermal insulation', 'Comfortable']
            },
            {
                name: 'Vinyl Plank',
                image: 'img/img21.jpg',
                features: ['Easy maintenance','Durable','Sound absorption']
            }
        ]
    },
    office: {
        title: 'Office Flooring',
        description: 'Professional-grade flooring solutions for productive work environments.',
        options: [
            {
                name: 'Tiles',
                image: 'img/img17.jpg',
                features: ['Anti-static', 'Chair-friendly', 'Professional appearance']
            },
            {
                name: 'Commercial Carpet',
                image: 'img/img23.jpg',
                features: ['Noise reduction', 'High traffic rated', 'Stain resistant']
            }
        ]
    },
    stairs: {
        title: 'Stair Flooring',
        description: 'Safe and durable stair covering solutions with anti-slip properties.',
        options: [
            {
                name: 'Carpet Runners',
                image: 'img/img7.jpg',
                features: ['Slip resistance', 'Sound absorption', 'Custom patterns']
            },
            {
                name: 'Vinyl Treads',
                image: 'img/img24.avif',
                features: ['Non-slip surface', 'Easy maintenance', 'Durable']
            }
        ]
    }
};

// Service modal data
const serviceData = {
    residential: {
        title: 'Residential Flooring Services',
        content: `
            <div class="service-details">
                <p>Transform your home with our comprehensive residential flooring solutions. We specialize in creating comfortable, beautiful, and functional flooring for every room in your house.</p>
                
                <h4>Our Residential Services Include:</h4>
                <ul>
                    <li><strong>Living Room Installations:</strong> Plush carpets, luxury vinyl planks, and hardwood alternatives</li>
                    <li><strong>Kitchen Flooring:</strong> Water-resistant vinyl, ceramic tiles, and easy-to-clean surfaces</li>
                    <li><strong>Bathroom Solutions:</strong> Waterproof options including porcelain tiles and vinyl sheets</li>
                    <li><strong>Bedroom Comfort:</strong> Soft carpeting and warm flooring options for restful spaces</li>
                    <li><strong>Hallway Durability:</strong> High-traffic solutions that maintain their beauty</li>
                </ul>

                <h4>Why Choose Us for Your Home:</h4>
                <ul>
                    <li>Free in-home consultations and measurements</li>
                    <li>Family and pet-friendly materials</li>
                    <li>Professional installation with minimal disruption</li>
                    <li>Warranty on both materials and installation</li>
                    <li>Financing options available</li>
                </ul>

                <div class="cta-section">
                    <p><strong>Ready to upgrade your home flooring?</strong></p>
                    <button onclick="scrollToSection('contact')" class="btn-primary">Get Free Quote</button>
                </div>
            </div>
        `
    },
    commercial: {
        title: 'Commercial & Office Flooring',
        content: `
            <div class="service-details">
                <p>Create a professional environment that impresses clients and supports productivity with our commercial flooring expertise.</p>
                
                <h4>Commercial Flooring Solutions:</h4>
                <ul>
                    <li><strong>Office Spaces:</strong> Lino tiles, commercial carpet, and luxury vinyl for modern workplaces</li>
                    <li><strong>Reception Areas:</strong> Impressive entrance flooring that makes a great first impression</li>
                    <li><strong>High-Traffic Zones:</strong> Durable materials designed to withstand heavy foot traffic</li>
                    <li><strong>Conference Rooms:</strong> Sound-dampening options for better acoustics</li>
                    <li><strong>Retail Spaces:</strong> Attractive and practical flooring that enhances customer experience</li>
                </ul>

                <h4>Commercial Benefits:</h4>
                <ul>
                    <li>Minimal business disruption during installation</li>
                    <li>ADA compliant options available</li>
                    <li>Low-maintenance, high-durability materials</li>
                    <li>Professional project management</li>
                    <li>Bulk pricing for large projects</li>
                </ul>

                <div class="cta-section">
                    <p><strong>Need commercial flooring solutions?</strong></p>
                    <button onclick="scrollToSection('contact')" class="btn-primary">Request Consultation</button>
                </div>
            </div>
        `
    },
    stairs: {
        title: 'Professional Stair Solutions',
        content: `
            <div class="service-details">
                <p>Safety meets style with our comprehensive stair flooring solutions. We provide secure, beautiful, and durable stair coverings for residential and commercial properties.</p>
                
                <h4>Stair Flooring Options:</h4>
                <ul>
                    <li><strong>Carpet Stairs:</strong> Luxurious runners and full-width carpet installations</li>
                    <li><strong>Vinyl Stair Covering:</strong> Water-resistant and slip-resistant vinyl treads</li>
                    <li><strong>Safety Features:</strong> Non-slip surfaces and edge protection systems</li>
                    <li><strong>Custom Runners:</strong> Decorative patterns and colors to match your decor</li>
                    <li><strong>Landing Areas:</strong> Coordinated flooring for stair landings</li>
                </ul>

                <h4>Safety & Style Features:</h4>
                <ul>
                    <li>Anti-slip textures and materials</li>
                    <li>Sound reduction for quieter foot traffic</li>
                    <li>Durable materials for high-use stairs</li>
                    <li>Professional measurement and fitting</li>
                    <li>Color and pattern coordination with existing decor</li>
                </ul>

                <div class="cta-section">
                    <p><strong>Make your stairs safe and beautiful</strong></p>
                    <button onclick="scrollToSection('contact')" class="btn-primary">Schedule Assessment</button>
                </div>
            </div>
        `
    },
    specialty: {
        title: 'Specialty Flooring Services',
        content: `
            <div class="service-details">
                <p>Beyond installation, we offer comprehensive flooring services to maintain, repair, and enhance your existing floors.</p>
                
                <h4>Specialty Services:</h4>
                <ul>
                    <li><strong>Floor Repairs:</strong> Fixing damaged sections, squeaks, and wear spots</li>
                    <li><strong>Subfloor Preparation:</strong> Ensuring proper foundation for new flooring</li>
                    <li><strong>Moisture Barriers:</strong> Protecting against humidity and water damage</li>
                    <li><strong>Custom Patterns:</strong> Unique designs and layout patterns</li>
                    <li><strong>Transition Strips:</strong> Professional transitions between different flooring types</li>
                </ul>

                <h4>Additional Services:</h4>
                <ul>
                    <li>Floor leveling and preparation</li>
                    <li>Removal of old flooring materials</li>
                    <li>Furniture moving and replacement</li>
                    <li>Post-installation cleanup</li>
                    <li>Maintenance and care instructions</li>
                </ul>

                <div class="cta-section">
                    <p><strong>Need specialized flooring work?</strong></p>
                    <button onclick="scrollToSection('contact')" class="btn-primary">Discuss Your Needs</button>
                </div>
            </div>
        `
    }
};

// Carpet animation data
const carpetData = {
    carpet: {
        title: 'Luxury Carpet Collection',
        description: 'Experience the ultimate in comfort and elegance with our premium carpet selection',
        options: [
            {
                name: 'Caret',
                image: 'img/img22.jpg',
                description: 'Ultra-soft carpet for luxury living spaces',
                features: ['Stain resistant', 'Sound dampening', 'Hypoallergenic', 'Easy maintenance'],
                price: 'contact us for pricing'
            },
            {
                name: 'Berber Elegance',
                image: 'img/img24.jpg',
                description: 'Durable loop pile carpet perfect for high-traffic areas',
                features: ['High durability', 'Fade resistant', 'Pet friendly', 'Moisture resistant'],
                price: 'contact us for pricing'
            },
        ]
    },
    vinyl: {
        title: 'Premium Vinyl Flooring',
        description: 'Waterproof, durable, and stylish vinyl options for every space',
        options: [
            {
                name: 'Luxury Vinyl Plank',
                image: 'img/pattern.jpg',
                description: 'Realistic wood look with superior durability',
                features: ['100% waterproof', 'Scratch resistant', 'Easy installation', 'Realistic wood grain'],
                price: 'contact us for pricing'
            },
            {
                name: 'Stone Look Vinyl',
                image: 'img/stone.jpg',
                description: 'Natural stone appearance with vinyl practicality',
                features: ['Slip resistant', 'Easy to clean', 'Comfortable', 'Authentic texture'],
                price: 'contact us for pricing'
            },
            {
                name: 'Designer Collection',
                image: 'img/designer.jpg',
                description: 'Unique patterns and colors for distinctive spaces',
                features: ['Designer patterns', 'Fade resistant', 'Low maintenance', 'Sound absorption'],
                price: 'contact us for pricing'
            }
        ]
    },
    tiles: {
        title: 'Professional Lino Tiles',
        description: 'Commercial-grade linoleum tiles perfect for offices and high-traffic areas',
        options: [
            {
                name: 'Commercial Grade',
                image: 'img/img23.jpg',
                description: 'Heavy-duty tiles for commercial applications',
                features: ['Anti-static', 'Chemical resistant', 'Easy replacement', 'Professional grade'],
                price: 'contact us for pricing'
            },
            {
                name: 'Decorative Patterns',
                image: 'img/office.avif',
                description: 'Stylish patterns for modern office environments',
                features: ['Modern designs', 'Color coordination', 'Durability', 'Professional appearance'],
                price: 'contact us for pricing'
            },
            {
                name: 'Eco-Friendly Options',
                image: 'img/eco.jpg',
                description: 'Sustainable linoleum for environmentally conscious spaces',
                features: ['100% natural', 'Biodegradable', 'Antimicrobial', 'Low VOC emissions'],
                price: 'contact us for pricing'
            }
        ]
    },
    hardwood: {
        title: 'Engineered Hardwood',
        description: 'Classic beauty of hardwood with modern engineering',
        options: [
            {
                name: 'Oak Collection',
                image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                description: 'Traditional oak with contemporary finishes',
                features: ['Pre-finished', 'Scratch resistant', 'Multiple stains', 'Long warranty'],
                price: '$60-120/sq ft'
            },
            {
                name: 'Exotic Species',
                image: 'https://images.unsplash.com/photo-1631679706909-fcc8ac2645da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                description: 'Unique wood species for distinctive interiors',
                features: ['Rare wood types', 'Unique grain patterns', 'Premium finish', 'Limited edition'],
                price: '$80-150/sq ft'
            },
            {
                name: 'Wide Plank',
                image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                description: 'Contemporary wide planks for modern spaces',
                features: ['7+ inch width', 'Smooth finish', 'Easy installation', 'Modern appeal'],
                price: '$70-130/sq ft'
            }
        ]
    }
};

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroShowcase();
    initRoomSelector();
    initGallery();
    initContactForm();
    initScrollEffects();
    initCarpetAnimation();
});

// Navigation functionality
function initNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Hero showcase carousel
function initHeroShowcase() {
    const showcaseItems = document.querySelectorAll('.showcase-item');
    const controlBtns = document.querySelectorAll('.control-btn');
    
    controlBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            
            // Update active states
            controlBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            showcaseItems.forEach(item => {
                item.classList.remove('active');
                if (item.dataset.type === target) {
                    item.classList.add('active');
                }
            });
        });
    });

    // Auto-rotate showcase
    let currentIndex = 0;
    const showcaseTypes = ['carpet', 'vinyl', 'tiles'];
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % showcaseTypes.length;
        const targetBtn = document.querySelector(`[data-target="${showcaseTypes[currentIndex]}"]`);
        if (targetBtn) {
            targetBtn.click();
        }
    }, 4000);
}

// Room selector functionality
function initRoomSelector() {
    const rooms = document.querySelectorAll('.room');
    const roomDetails = document.getElementById('room-details');

    rooms.forEach(room => {
        room.addEventListener('click', () => {
            const roomType = room.dataset.room;
            const data = roomData[roomType];

            // Update active room
            rooms.forEach(r => r.classList.remove('active'));
            room.classList.add('active');

            // Update room details
            roomDetails.innerHTML = `
                <div class="room-info">
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    
                    <div class="room-options">
                        ${data.options.map(option => `
                            <div class="option-card">
                                <img src="${option.image}" alt="${option.name}">
                                <h5>${option.name}</h5>
                                <ul>
                                    ${option.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    
                    <button onclick="scrollToSection('contact')" class="btn-primary" style="margin-top: 1.5rem;">Get Quote for ${data.title}</button>
                </div>
            `;
        });
    });
}

// Gallery functionality
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Populate gallery
    function displayGallery(filter = 'all') {
        const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);
        
        galleryGrid.innerHTML = filteredItems.map(item => `
            <div class="gallery-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}">
                <div class="gallery-item-info">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active filter
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Display filtered items
            displayGallery(filter);
        });
    });

    // Initial gallery display
    displayGallery();
}

// Contact form functionality
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            showNotification('Thank you! Your message has been sent. We\'ll contact you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Scroll effects and smooth scrolling
function initScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function openModal(serviceType) {
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const data = serviceData[serviceType];
    
    if (data) {
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .feature, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Carpet Animation Functions
function initCarpetAnimation() {
    console.log('Initializing carpet animation...');
    
    const flooringTriggers = document.querySelectorAll('.flooring-trigger');
    const carpetOverlay = document.getElementById('carpet-overlay');
    const carpetRoll = document.getElementById('carpet-roll');
    const closeCarpet = document.getElementById('close-carpet');
    
    console.log('Found elements:', {
        triggers: flooringTriggers.length,
        overlay: !!carpetOverlay,
        roll: !!carpetRoll,
        closeBtn: !!closeCarpet
    });
    
    if (flooringTriggers.length === 0) {
        console.error('No flooring trigger buttons found!');
        return;
    }
    
    if (!carpetOverlay || !carpetRoll || !closeCarpet) {
        console.error('Missing carpet animation elements!');
        return;
    }
    
    flooringTriggers.forEach((trigger, index) => {
        console.log(`Setting up trigger ${index}:`, trigger.dataset.type);
        trigger.addEventListener('click', (e) => {
            console.log('Carpet trigger clicked:', trigger.dataset.type);
            e.preventDefault();
            const flooringType = trigger.dataset.type;
            const flooringColor = trigger.dataset.color;
            openCarpetAnimation(flooringType, flooringColor);
        });
    });
    
    if (closeCarpet) {
        closeCarpet.addEventListener('click', closeCarpetAnimation);
    }
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && carpetOverlay && carpetOverlay.classList.contains('active')) {
            closeCarpetAnimation();
        }
    });
    
    console.log('Carpet animation initialization complete!');
}

function openCarpetAnimation(flooringType, color) {
    console.log('Opening carpet animation for:', flooringType, 'with color:', color);
    
    const carpetOverlay = document.getElementById('carpet-overlay');
    const carpetRoll = document.getElementById('carpet-roll');
    const carpetOptions = document.getElementById('carpet-options');
    const data = carpetData[flooringType];
    
    if (!data) {
        console.error('No data found for flooring type:', flooringType);
        console.log('Available carpet data keys:', Object.keys(carpetData));
        return;
    }
    
    if (!carpetOverlay || !carpetRoll || !carpetOptions) {
        console.error('Missing carpet animation elements in openCarpetAnimation');
        return;
    }
    
    console.log('Using data:', data);
    
    // Update carpet roll color based on flooring type
    const bgColor = color + '30';
    const bgColor2 = color + '60';
    const patternColor = color + '20';
    
    carpetRoll.style.background = `linear-gradient(to bottom, ${bgColor}, ${bgColor2}, ${bgColor})`;
    carpetRoll.style.backgroundImage = `
        repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            ${patternColor} 10px,
            ${patternColor} 20px
        ),
        linear-gradient(to bottom, ${bgColor}, ${bgColor2}, ${bgColor})
    `;
    
    // Populate carpet options
    carpetOptions.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        
        <div class="flooring-options-grid">
            ${data.options.map(option => `
                <div class="flooring-option-card">
                    <img src="${option.image}" alt="${option.name}">
                    <div class="flooring-option-info">
                        <h4>${option.name}</h4>
                        <p>${option.description}</p>
                        <ul class="flooring-features">
                            ${option.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                        <div class="price-range">${option.price}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="flooring-cta">
            <h3>Ready to Transform Your Space?</h3>
            <div class="flooring-cta-buttons">
                <button class="cta-btn cta-primary" onclick="closeCarpetAnimation(); scrollToSection('contact');">Get Free Quote</button>
                <button class="cta-btn cta-secondary" onclick="closeCarpetAnimation(); scrollToSection('gallery');">View Gallery</button>
            </div>
        </div>
    `;
    
    console.log('Content populated, showing overlay...');
    
    // Show overlay and start animation
    carpetOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Overlay shown, starting texture animation in 1.5s...');
    
    // Add texture animation after carpet unfurls
    setTimeout(() => {
        carpetRoll.classList.add('animated');
        console.log('Texture animation started');
    }, 1500);
}

function closeCarpetAnimation() {
    console.log('Closing carpet animation...');
    
    const carpetOverlay = document.getElementById('carpet-overlay');
    const carpetRoll = document.getElementById('carpet-roll');
    
    if (carpetRoll) {
        carpetRoll.classList.remove('animated');
    }
    
    if (carpetOverlay) {
        carpetOverlay.classList.remove('active');
    }
    
    document.body.style.overflow = 'auto';
    console.log('Carpet animation closed');
}

// Add floating animation to flooring triggers
function addFloatingAnimation() {
    const triggers = document.querySelectorAll('.flooring-trigger');
    triggers.forEach((trigger, index) => {
        trigger.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
        trigger.style.animationDelay = `${index * 0.2}s`;
    });
}

// Add CSS animation for floating effect
const floatAnimation = `
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
`;

// Inject animation CSS
const style = document.createElement('style');
style.textContent = floatAnimation;
document.head.appendChild(style);

// Initialize floating animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addFloatingAnimation, 1000);
});
