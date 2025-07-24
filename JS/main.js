
//menu show and hide
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
    // menu show
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    //menu hidden
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

//remove menu mobile
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));


//change background header
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >=20
     ? header.classList.add('scroll-header') 
     : header.classList.remove('scroll-header');
   
};

window.addEventListener('scroll', scrollHeader);

//scroll sections active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        sectionTop = current.offsetTop - 58;
        sectionId = current.getAttribute('id');
        sectionClass = document.querySelector(
            '.nav-menu a[href*=' + sectionId + ']'
        );

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

// scroll Animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-gradient").forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: "none",
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,     
        },
    });
});

// Dark-Light Theme
window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn =document.getElementById('theme-toggle');

    function applyTheme(theme) {
        if(theme === 'light') {
            document.body.classList.add('light-theme');
            toggleBtn.classList.remove('ri-sun-line');
            toggleBtn.classList.add('ri-moon-line');
        } else {
            document.body.classList.remove('light-theme');
            toggleBtn.classList.add('ri-sun-line');
            toggleBtn.classList.remove('ri-moon-line');
        }

        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
        
    })
});

// Email JS
const contactForm = document.getElementById('contact-form');
 contactName = document.getElementById('contact-name');
 contactEmail = document.getElementById('contact-email');
 contactMessage = document.getElementById('contact-message');
 message = document.getElementById('message');

 const sendEmail = (e) => {
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        message.textContent = 'Please fill out the form';

        setTimeout(() => {
            message.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('service_uri5xcj', 'template_k6k5r9e', '#contact-form', 'dpQWVqCD1UgzyupoL')
        .then(
  () => {
    message.textContent = 'Message Sent Successfully';

    setTimeout(() => {
        message.textContent = '';
    }, 5000);
  },
  (error) => {
   alert('OOPS! Something went wrong...', error);
  },
);

    contactName.value = '';
    contactEmail.value = '';
    contactMessage.value = '';
    }
 };

 contactForm.addEventListener('submit', sendEmail);

//  scroll reveal
const sr = scrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home-content`);
sr.reveal(`.home-img-wrapper`, {delay: 500});
sr.reveal(`.home-social`, {delay: 600});
sr.reveal(`.service-card, work-card`, {interval: 100});
sr.reveal(`.skills-frontdeveloper, .resume-left, .contact-group`, {origin: 'left'});
sr.reveal(`.skills-backdeveloper`, {origin: 'left'});
sr.reveal(`.skills-designer, .resume-right, .contact-form`, {origin: 'right'});