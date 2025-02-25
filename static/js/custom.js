window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
  
    return () => {
      if (lastScrollY < window.scrollY && window.scrollY > 100) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
      lastScrollY = window.scrollY;
    };
  });