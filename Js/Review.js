document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer
    const observerOptions = {
      root: null,
      threshold: 0.2,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    const reviews = document.querySelectorAll('.review');
    reviews.forEach(review => {
      observer.observe(review);
    });
  });
  
