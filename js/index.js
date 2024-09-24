window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
      navbar.classList.add('backdrop-blur-md', 'bg-white/70');
    } else {
      navbar.classList.remove('backdrop-blur-md', 'bg-white/70');
    }
  });
  