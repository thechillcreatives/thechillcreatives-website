// This function includes the header and footer HTML
function includeHTML() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header>
                <div class="container">
                    <nav>
                        <a href="index.html" class="logo">
                            <div class="logo-image"><img src="icon.png" alt="The Chill Creatives" class="logo-img"></div>
                            <div class="logo-text"><img src="icon2.png" alt="The Chill Creatives" class="logo-img"></div>
                        </a>
                        <ul class="nav-links">
                            <li><a href="#services">Web Services</a></li>
                            <li><a href="#video-services">Video Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <button class="hamburger-menu" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>
                    </nav>
                </div>
            </header>
        `;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h3>The Chill Creatives</h3>
                            <p>Clients worldwide with fast, affordable web development solutions.</p>
                        </div>
                        <div class="footer-column">
                            <h3>Contact Info</h3>
                            <ul>
                                <li><i class="fas fa-envelope"></i> <a href="mailto:thechillcreatives@gmail.com">thechillcreatives@gmail.com</a></li>
                                <li><i class="fas fa-phone"></i> <a href="tel:+96171614890">+961 71 614 890</a></li>
                                <li><i class="fas fa-globe"></i> Serving clients worldwide</li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Follow Us</h3>
                            <div class="social-links">
                                <a href="https://instagram.com/thechillcreatives" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2025 The Chill Creatives. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
    
    // Call the hamburger logic after the HTML is loaded
    setupHamburgerMenu();
    
    // Setup Tally button after header is loaded
    setupTallyButton();
}

// Setup Tally button functionality
function setupTallyButton() {
    const tallyButton = document.getElementById('tallyButton');
    if (tallyButton) {
        tallyButton.addEventListener('click', function(e) {
            e.preventDefault();
            openTallyForm();
        });
    }
}

// Fix hamburger menu functionality
function setupHamburgerMenu() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            body.classList.toggle("menu-open");
            // Toggle hamburger icon between bars and X
            const icon = hamburgerMenu.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                body.classList.remove("menu-open");
                const icon = hamburgerMenu.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            });
        });
    }
}

// Add intersection observer for section animations
function initAnimations() {
  const sections = document.querySelectorAll('.section');
  
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Projects filter functionality
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Event listeners for the rest of your scripts
document.addEventListener("DOMContentLoaded", function() {
    // Run header/footer inclusion
    includeHTML();
    
    // Initialize animations
    initAnimations();
    
    // Initialize project filter
    initProjectFilter();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Simple JavaScript for header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header && window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = '#fff';
    } else if (header) {
        header.style.boxShadow = 'none';
        header.style.background = '#fff';
    }
});

// Tally form function
function openTallyForm() {
    const formId = 'mByykY';
    if (typeof Tally !== 'undefined') {
        Tally.openPopup(formId, {
            layout: 'modal',
            width: 700,
            overlay: true,
            autoClose: 5000
        });
    } else {
        window.open('https://tally.so/r/mByykY', '_blank');
    }
}