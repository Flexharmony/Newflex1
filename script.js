// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    testimonials[index].classList.add('active');
    currentTestimonial = index;
  }
  
  document.querySelector('.slider-next').addEventListener('click', () => {
    let nextIndex = currentTestimonial + 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    showTestimonial(nextIndex);
  });
  
  document.querySelector('.slider-prev').addEventListener('click', () => {
    let prevIndex = currentTestimonial - 1;
    if (prevIndex < 0) prevIndex = testimonials.length - 1;
    showTestimonial(prevIndex);
  });
  
  // Auto-rotate testimonials every 5 seconds
  setInterval(() => {
    let nextIndex = currentTestimonial + 1;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    showTestimonial(nextIndex);
  }, 5000);
  
  // Sticky navigation effect
  const nav = document.querySelector('.sticky-nav');
  const navOffset = nav.offsetTop;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > navOffset) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
  
  // Form submission feedback
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      // In a real implementation, you would handle the form submission here
      // and reset the button state after success/error
      setTimeout(() => {
        submitBtn.innerHTML = 'Message Sent <i class="fas fa-check"></i>';
        setTimeout(() => {
          submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
          submitBtn.disabled = false;
        }, 2000);
      }, 1500);
    });
  }
  
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.offering-card, .gallery-item, .form-group');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on page load
});