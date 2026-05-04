// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Constants
const AVATAR_IMG = document.getElementById('avatar-img');
const AVATAR_CONTAINER = document.getElementById('avatar-container');
const SECTIONS = ['hero', 'about', 'projects', 'skills', 'contact'];

// Avatar State Mapping
const sectionAssets = {
    hero: 'assets/avatar/standing.png',
    about: 'assets/avatar/walking.png',
    projects: 'assets/avatar/pointing.png',
    skills: 'assets/avatar/turning.png',
    contact: 'assets/avatar/standing.png' // Default back to standing for contact
};

let currentSection = 'hero';

/**
 * Updates the avatar image with a smooth fade transition
 * @param {string} sectionId - The ID of the current section
 */
function updateAvatarImage(sectionId) {
    if (currentSection === sectionId) return; // Prevent unnecessary swaps

    const newSrc = sectionAssets[sectionId];
    if (!newSrc) return;

    currentSection = sectionId;

    // Smooth transition: Fade out -> Swap -> Fade in
    gsap.to(AVATAR_IMG, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            AVATAR_IMG.src = newSrc;
            gsap.to(AVATAR_IMG, {
                opacity: 1,
                duration: 0.2
            });
        }
    });
}

/**
 * Initialize GSAP Animations
 */
function initAnimations() {
    // 1. Section Reveal Animations
    SECTIONS.forEach((id) => {
        gsap.to(`#${id}`, {
            scrollTrigger: {
                trigger: `#${id}`,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // 2. Avatar Movement and State Change Logic
    SECTIONS.forEach((id) => {
        ScrollTrigger.create({
            trigger: `#${id}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => updateAvatarImage(id),
            onEnterBack: () => updateAvatarImage(id),
            // scrub: true is not directly applied here as state swaps are events,
            // but the movement below handles the smooth sync
        });
    });

    // 3. Avatar Horizontal Movement (Scrubbed)
    // Moves the avatar slightly as the user scrolls to create a "guiding" effect
    gsap.to(AVATAR_CONTAINER, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1 // Smoothly follow the scroll
        },
        x: (index, target) => {
            // Move left and right slightly across the entire scroll
            // This can be refined per section if needed, but a global subtle shift works well
            return -50; // Simple shift, can be pulsed or mapped to sections
        },
        ease: "none"
    });
    
    // Per-section horizontal shifts for more "active" guiding
    gsap.to(AVATAR_CONTAINER, {
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        x: -100, // Move left towards content during About
        ease: "power1.inOut"
    });

    gsap.to(AVATAR_CONTAINER, {
        scrollTrigger: {
            trigger: "#projects",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },
        x: 0, // Move back to original position during Projects
        ease: "power1.inOut"
    });

    // 4. Subtle Floating/Bounce Effect (Continuous)
    gsap.to(AVATAR_CONTAINER, {
        y: "-=15",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

// Ensure images are preloaded to avoid white flashes
function preloadImages() {
    Object.values(sectionAssets).forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Kickoff
window.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    initAnimations();
});
