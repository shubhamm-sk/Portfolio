document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Load Animations
    const tl = gsap.timeline();
    
    tl.from(".navbar", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    });

    tl.from(".hero h1, .hero-ashish h1", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3");

    tl.from(".hero p, .hero-ashish p, .ashish-tag", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    tl.from(".hero-actions, .stat-pills", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6");

    tl.from(".hero-visual, .hero-img-ashish", {
      x: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1");

    // Scroll Animations
    gsap.utils.toArray('section h2').forEach(heading => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray('.skill-card, .service-card, .process-item, .project-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: i % 3 * 0.1,
        ease: "power2.out"
      });
    });

    ScrollTrigger.config({ ignoreMobileResize: true });
  }
});
