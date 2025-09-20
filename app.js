'use strict';

// add event on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for(let i=0; i<elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  }
  else {
    elem.addEventListener(type, callback);
  }



}


// navbar toggle

const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
}

addEventOnElem(navToggler, 'click', toggleNavbar);


/// close navbar when click on any navbar links

const navlinks = document.querySelectorAll('[data-nav-link]');

const closeNavbar = function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
}

addEventOnElem(navlinks, 'click', closeNavbar);


// header active when scroll down

const header = document.querySelector('[data-header]');

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add('active') : 
  header.classList.remove('active');
}

addEventOnElem(window, 'scroll', headerActive);




var swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        600: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


// Testimonials Array (Frontend-only version)
const form = document.getElementById('testimonialForm');
const testimonialList = document.getElementById('testimonialList');
let testimonials = [];

// Submit Form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('customerName').value;
  const message = document.getElementById('customerMessage').value;

  const testimonial = { name, message };
  testimonials.unshift(testimonial); // Newest on top

  displayTestimonials();
  form.reset();
});

// Display Testimonials
function displayTestimonials() {
  testimonialList.innerHTML = '';
  testimonials.forEach(t => {
    const div = document.createElement('div');
    div.classList.add('testimonial-card');
    div.innerHTML = `<strong>${t.name}</strong><p>${t.message}</p>`;
    testimonialList.appendChild(div);
  });
}


document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const form = e.target;
  fetch(form.action, { method: 'POST', body: new FormData(form) })
  .then(response => response.text())
  .then(() => { alert("Message sent!"); form.reset(); })
  .catch(() => alert("Error sending message"));
});