let currentIndex = 0;
const slides = document.querySelectorAll(".testimonial-card");
const slider = document.querySelector(".testimonial-slider");
const dots = document.querySelectorAll(".nav-dot");

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function setSlide(index) {
  showSlide(index);
}

setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

// Modal Functions
function openModal() {
  document.getElementById("appointmentModal").style.display = "block";
  body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("appointmentModal").style.display = "none";
  body.style.overflow = "auto";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("appointmentModal");
  if (event.target == modal) {
    closeModal();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 1s ease-in";
      card.style.opacity = "1";
    }, 100);
  });
});

// Success Popup
function showSuccessPopup() {
  const popup = document.getElementById("success-popup");
  popup.style.display = "block";
  body.style.overflow = "hidden";
}

function closePopup() {
  const popup = document.getElementById("success-popup");
  popup.style.display = "none";
  body.style.overflow = "auto";
}

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const updateCount = () => {
    const increment = target / speed;
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
}

document.addEventListener("DOMContentLoaded", function () {
  let counters = document.querySelectorAll(".counter");
  let speed = 2000;

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-count");
    let start = 0;
    let duration = Math.floor(speed / target);

    let animate = () => {
      if (start < target) {
        start += Math.ceil(target / 100);
        counter.innerText = start > target ? target : start;
        setTimeout(animate, duration);
      }
    };

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(counter);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      navLinks.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });
});

// Testimonials
document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.transition = "opacity 1s ease-in";
      card.style.opacity = "1";
    }, 100);
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
});

// Add animation on scroll
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(
    ".service-card, .achievement-card"
  );
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
});






// document.addEventListener('DOMContentLoaded', function() {
//   const footer = document.querySelector('footer');
  
//   // Intersection Observer for scroll-triggered animation
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               footer.style.opacity = '1';
//           }
//       });
//   }, { threshold: 0.1 });

//   observer.observe(footer);

//   // Track developer link clicks
//   const devLink = document.querySelector('.developer-link');
//   devLink.addEventListener('click', function() {
//       console.log('Developer LinkedIn clicked - Kritagya Jaiswal');
//       // Add your analytics tracking code here
//       // Example: gtag('event', 'click', { 'event_category': 'Footer', 'event_label': 'Developer LinkedIn' });
//   });

//   // Add subtle parallax effect on scroll
//   window.addEventListener('scroll', function() {
//       const scrolled = window.pageYOffset;
//       const decoCircles = document.querySelectorAll('.deco-circle');
      
//       decoCircles.forEach((circle, index) => {
//           const speed = 0.05 * (index + 1);
//           circle.style.transform = `translateY(${scrolled * speed}px)`;
//       });
//   });
// });