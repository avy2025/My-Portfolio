// Generate scattered blinking dots for the background
function initDotField() {
    const field = document.getElementById('dotField');
    if (!field) return;
    
    // Clear existing dots if any
    field.innerHTML = '';
    
    const dotCount = 55;
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('span');
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDuration = (3 + Math.random() * 5) + 's';
        dot.style.animationDelay = (Math.random() * 6) + 's';
        field.appendChild(dot);
    }
}

// Intersection Observer for section animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Custom logic for smooth transition class
document.addEventListener('DOMContentLoaded', () => {
    initDotField();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
    
    console.log("Welcome to My Verse - Portfolio Initialized");
});
