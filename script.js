    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Scroll animation for fade-up elements
    const fadeUpElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
      threshold: 0.1,
    };

    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeUpObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeUpElements.forEach((el) => {
      fadeUpObserver.observe(el);
    });