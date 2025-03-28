// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission alert (for demo purposes)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully! (This is a demo)');
    this.reset();
});

// Initialize Tilt.js for 3D tilt effect (already included via CDN)
$(document).ready(function() {
    $('.hero-content').tilt({
        maxTilt: 20,
        speed: 400,
        perspective: 500
    });
    $('.contact-form').tilt({
        maxTilt: 10,
        speed: 200,
        perspective: 300
    });
});
