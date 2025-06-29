// Typed.js animations
var typed = new Typed('#element', {
  strings: [
    'Welcome to My Portfolio!',
    'I\'m Jatin, a Web Developer who loves clean code and making websites look pixel-perfect.',
    'I believe in working with patience and diligence when I have to code with JavaScript.',
    'Explore, click around, and let\'s build something awesome together!'
  ],
  typeSpeed: 50,
  loop: true,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 500,
});

var typed1 = new Typed('#element1', {
  strings: ['Web Developer', 'Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver'],
  typeSpeed: 100,
  loop: true,
  backSpeed: 50,
  backDelay: 1500,
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', function() {
  siteNav.classList.toggle('active');
  
  // Animate hamburger icon
  if (siteNav.classList.contains('active')) {
    menuToggle.classList.add('bx-x');
    menuToggle.classList.remove('bx-menu');
  } else {
    menuToggle.classList.add('bx-menu');
    menuToggle.classList.remove('bx-x');
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('active');
    menuToggle.classList.add('bx-menu');
    menuToggle.classList.remove('bx-x');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.site-nav a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Header background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(10, 14, 26, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(59, 132, 249, 0.1)';
  } else {
    header.style.background = 'rgba(10, 14, 26, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.skill-item, .project-card');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Form submission handling
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const button = this.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Reset button after 3 seconds (form will redirect via Formspree)
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 3000);
  });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.intro-image img');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Skills hover effect enhancement
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-15px) scale(1.05)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Project card tilt effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// Loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Prevent form resubmission
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}