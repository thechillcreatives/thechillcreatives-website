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

// Tally form functionality
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

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', function() {
    const tallyButton = document.getElementById('tallyButton');
    if (tallyButton) {
        tallyButton.addEventListener('click', function(e) {
            e.preventDefault();
            openTallyForm();
        });
    }
});