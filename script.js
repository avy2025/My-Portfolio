// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Hero Text Animations
document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    tl.from(".logo", {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".nav-links a, .resume-btn", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out"
    }, "-=0.4")
    .from(".badge", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.2")
    .from(".stagger", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.4")
    .from(".hero-avatar", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    }, "-=0.8")
    .from(".ground-shape", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=1");

    // Avatar Floating Animation
    gsap.to(".avatar-img", {
        y: -20,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });

    // Avatar Shadow Sync
    gsap.to(".avatar-shadow", {
        scaleX: 0.8,
        opacity: 0.3,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    });

    // Smooth Scroll Behavior for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Scroll Effect
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
            nav.style.padding = "1rem 5%";
            nav.style.background = "rgba(11, 15, 25, 0.95)";
        } else {
            nav.style.padding = "1.5rem 5%";
            nav.style.background = "rgba(11, 15, 25, 0.8)";
        }
    });
});
