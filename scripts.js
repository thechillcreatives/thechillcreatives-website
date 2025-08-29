// scripts.js - JavaScript for The Chill Creatives website

// Scroll animation for elements
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
            
            if (isVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check on load
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Add intersection observer for more precise animations
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    }
});

// Add subtle animation to the logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-icon');
    if (logo) {
        setInterval(() => {
            logo.style.transform = 'translateY(-3px)';
            setTimeout(() => {
                logo.style.transform = 'translateY(0)';
            }, 1000);
        }, 4000);
    }
});

// Add animation to CTA buttons on hover
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.creative-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 30px rgba(94, 129, 244, 0.4)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(94, 129, 244, 0.3)';
        });
    });
});

// Add animation to feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
});