// Options for the IntersectionObserver
  const options = {
    threshold: 0.5 // Trigger when 50% of the element is visible
  };
  
  // Function to trigger typed-out animation
  const initTypedOutAnimations = () => {
    const typedOutElements = document.querySelectorAll('.typed-out');
    typedOutElements.forEach(el => {
      observer.observe(el);
    });
  };
  
  // Function to trigger fade-in image animation
  const initImageAnimations = () => {
    const animatedImages = document.querySelectorAll('.animate__animated');
    animatedImages.forEach(img => {
      observer.observe(img);
    });
  };
  
  // Create IntersectionObserver instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
  
        // Check for the typed-out class to apply typed-out animation
        if (element.classList.contains('typed-out')) {
          element.classList.remove('typed-out');
          void element.offsetWidth; // Force reflow
          element.classList.add('typed-out');
        }
  
        // Check for animate__fadeInRight class to apply fade-in animation
        if (element.classList.contains('animate__fadeInRight')) {
          element.classList.remove('animate__fadeInRight');
          void element.offsetWidth; // Force reflow
          element.classList.add('animate__fadeInRight');
        }

        // Check for animate__fadeInRight class to apply fade-in animation
        if (element.classList.contains('animate__fadeInLeft')) {
            element.classList.remove('animate__fadeInLeft');
            void element.offsetWidth; // Force reflow
            element.classList.add('animate__fadeInLeft');
        }
        if (element.classList.contains('animate__fadeInUp')) {
          element.classList.remove('animate__fadeInUp');
          void element.offsetWidth; // Force reflow
          element.classList.add('animate__fadeInUp');
      }
      }
    });
  });
  
  // Initialize animations on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    initTypedOutAnimations(); // Call function for typed-out text
    initImageAnimations(); // Call function for image animations
  });
  
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}