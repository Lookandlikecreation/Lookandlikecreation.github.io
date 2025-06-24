// Service details data
const serviceDetails = {
    'video-editing': {
        title: 'Video Editing Services',
        content: `
            <div class="service-details">
                <div class="service-package">
                    <h3>Short Form Editing</h3>
                    <ul>
                        <li>Reels and Shorts (up to 60 seconds)</li>
                        <li>Basic transitions and effects</li>
                        <li>Music and sound effects</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>Long Form Editing</h3>
                    <ul>
                        <li>Vlogs and Tutorials (3-10 minutes)</li>
                        <li>Advanced transitions and effects</li>
                        <li>Color grading and audio mixing</li>
                    </ul>
                    <p class="price">Custom pricing based on length</p>
                </div>
                <div class="service-package">
                    <h3>Add-on Services</h3>
                    <ul>
                        <li>Subtitles and captions</li>
                        <li>Custom transitions</li>
                        <li>Special effects</li>
                    </ul>
                    <p class="price">Additional charges apply</p>
                </div>
            </div>
        `
    },
    'videography': {
        title: 'Videography Services',
        content: `
            <div class="service-details">
                <div class="service-package">
                    <h3>Short Shoot</h3>
                    <ul>
                        <li>1-2 hour sessions</li>
                        <li>Basic setup and equipment</li>
                        <li>Professional lighting</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>Full Shoot</h3>
                    <ul>
                        <li>Half or full day coverage</li>
                        <li>Behind-the-scenes footage</li>
                        <li>Promotional shoots</li>
                        <li>Multiple camera setup</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
            </div>
        `
    },
    'social-media': {
        title: 'Social Media Management',
        content: `
            <div class="service-details">
                <div class="service-package">
                    <h3>Starter Plan</h3>
                    <ul>
                        <li>3 Posts per week</li>
                        <li>2 Reels per week</li>
                        <li>Engaging captions</li>
                        <li>Basic hashtag research</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>Growth Plan</h3>
                    <ul>
                        <li>12 Posts per month</li>
                        <li>8 Reels per month</li>
                        <li>Content scheduling</li>
                        <li>Advanced hashtag strategy</li>
                        <li>Performance analytics</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
            </div>
        `
    },
    'canva-design': {
        title: 'Canva Design Services',
        content: `
            <div class="service-details">
                <div class="service-package">
                    <h3>Social Media Posts</h3>
                    <ul>
                        <li>Static or animated designs</li>
                        <li>Custom templates</li>
                        <li>Brand consistency</li>
                    </ul>
                    <p class="price">Starting at ₹300/post</p>
                </div>
                <div class="service-package">
                    <h3>Posters & Flyers</h3>
                    <ul>
                        <li>Event promotions</li>
                        <li>Business announcements</li>
                        <li>Print-ready designs</li>
                    </ul>
                    <p class="price">Starting at ₹500/design</p>
                </div>
                <div class="service-package">
                    <h3>Brand Kit</h3>
                    <ul>
                        <li>Logo design</li>
                        <li>Custom templates</li>
                        <li>Color palette</li>
                        <li>Brand guidelines</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
            </div>
        `
    },
    'website-design': {
        title: 'Website Design Services',
        content: `
            <div class="service-details">
                <div class="service-package">
                    <h3>Basic Websites</h3>
                    <ul>
                        <li>Single-page design</li>
                        <li>Portfolio or resume sites</li>
                        <li>Basic contact form</li>
                        <li>Mobile responsive</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>Standard Websites</h3>
                    <ul>
                        <li>3-5 pages</li>
                        <li>Contact forms</li>
                        <li>Image galleries</li>
                        <li>SEO optimization</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>Blog/Portfolio Websites</h3>
                    <ul>
                        <li>CMS setup (WordPress)</li>
                        <li>Blog functionality</li>
                        <li>Advanced features</li>
                        <li>E-commerce options</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
            </div>
        `
    },
    'app-development': {
        title: 'App Development Services',
        content: `
            <div class="service-details">
                <div class="service-package">
                    <h3>Android App Development</h3>
                    <ul>
                        <li>Custom app development</li>
                        <li>UI/UX design</li>
                        <li>Performance optimization</li>
                        <li>App store submission</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>IOS App Development</h3>
                    <ul>
                        <li>Custom app development</li>
                        <li>UI/UX design</li>
                        <li>Performance optimization</li>
                        <li>App store submission</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
                </div>
                <div class="service-package">
                    <h3>Web App Development</h3>
                    <ul>
                        <li>Custom app development</li>
                        <li>UI/UX design</li>
                        <li>Performance optimization</li>
                        <li>Deployment and Hosting</li>
                    </ul>
                    <p class="price">Custom pricing based on requirements</p>
            </div>
        `
    }
};

// Theme Toggle Functionality
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Highlight active nav link on scroll
function highlightActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveNav);
document.addEventListener('DOMContentLoaded', highlightActiveNav);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const nav = document.querySelector('nav');
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.close-modal');

    // Service card click handlers
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            const service = serviceDetails[serviceType];

            if (service) {
                modalTitle.textContent = service.title;
                modalContent.innerHTML = service.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal when clicking the close button
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = btn.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission handling
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Here you would typically send the form data to a server
            // For now, we'll just log it and show a success message
            console.log('Form submitted:', { name, email, message });

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');

            // Reset form
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'var(--white)';
            nav.style.boxShadow = 'none';
        }
    });

    // Service Card Animations
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        serviceObserver.observe(card);
    });

    // Service Card Hover Effects
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll effect for navigation
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    initTheme();
});