document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category').split(' ');
          
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            gsap.from(card, {
              opacity: 0,
              scale: 0.95,
              duration: 0.4,
              ease: "power2.out"
            });
          } else {
            card.style.display = 'none';
          }
        });

        // Trigger ScrollTrigger refresh to account for layout changes
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      });
    });
  }
});
