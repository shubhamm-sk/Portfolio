document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-num');

  if (counters.length > 0 && typeof gsap !== 'undefined') {
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      
      if (!isNaN(target)) {
        ScrollTrigger.create({
          trigger: counter,
          start: "top 90%",
          onEnter: () => {
            let obj = { value: 0 };
            gsap.to(obj, {
              value: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                counter.innerText = Math.floor(obj.value) + (counter.innerText.includes('%') ? '%' : (counter.innerText.includes('+') ? '+' : ''));
              }
            });
          },
          once: true
        });
      }
    });
  }
});
