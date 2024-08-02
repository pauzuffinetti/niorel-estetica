window.addEventListener('scroll', function() {
    const image = document.querySelector('.scroll-image');
    const scrollY = window.scrollY;
    
    // Adjust the transformation as per your need
    image.style.transform = `translateY(-${scrollY}px)`;
  });
  