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

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initDotField();
    
    // Navigation interaction or other future JS can go here
    console.log("Welcome to My Verse - Portfolio Initialized");
});
