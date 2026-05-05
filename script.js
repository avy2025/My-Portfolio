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
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
            AVATAR_IMG.src = newSrc;
            gsap.to(AVATAR_IMG, {
                opacity: 1,
                duration: 0.25,
                ease: "power2.inOut"
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

    // 2. Avatar State Change Logic
    SECTIONS.forEach((id) => {
        ScrollTrigger.create({
            trigger: `#${id}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => updateAvatarImage(id),
            onEnterBack: () => updateAvatarImage(id),
            // Prevent multiple rapid triggers
            fastScrollEnd: true,
            preventOverlaps: true
        });
    });

    // 3. Avatar Horizontal Movement (Scrubbed)
    // Moves the avatar slightly as the user scrolls to create a "guiding" effect
    // Limit horizontal movement to 50–80px max for a natural feel
    gsap.to(AVATAR_CONTAINER, {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2 // Smoother following
        },
        x: (index, target) => {
            return -60; // Subtle consistent shift
        },
        ease: "none"
    });
    
    // Section-specific minor adjustments to keep it dynamic but subtle
    gsap.to(AVATAR_CONTAINER, {
        scrollTrigger: {
            trigger: "#projects",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        },
        x: -80, // Slightly more movement in Projects but still within range
        ease: "sine.inOut"
    });

    // 4. Subtle Floating/Bounce Effect (Continuous)
    gsap.to(AVATAR_CONTAINER, {
        y: -10,
        duration: 1.2,
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
