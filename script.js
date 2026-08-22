// =========================================
// 1. MOBILE HAMBURGER MENU
// =========================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

// Toggle menu on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// =========================================
// 2. NAVBAR BACKGROUND ON SCROLL
// =========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =========================================
// 3. TYPING ANIMATION (HERO SECTION)
// =========================================
const textToType = "BCA Student | Web Developer | AI & Prompt Engineering Enthusiast";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Adjust typing speed here
    }
}

// Start typing when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 500); // Initial delay
});

// =========================================
// 4. SCROLL REVEAL ANIMATIONS
// =========================================
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once
        }
    });
};

const revealOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// =========================================
// 5. PROJECT FILTERING
// =========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            // Smooth fade out logic
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    // Trigger reflow
                    void card.offsetWidth;
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.display = 'none';
                }
            }, 300); // matches transition time
        });
    });
});

// =========================================
// 6. ACTIVE NAVIGATION LINK ON SCROLL
// =========================================
const sections = document.querySelectorAll('section, header');
const navLiA = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 150)) { // Offset for navbar
            current = section.getAttribute('id');
        }
    });

    navLiA.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

// =========================================
// 7. BACK TO TOP BUTTON
// =========================================
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================================
// 8. AUTOMATIC FOOTER YEAR
// =========================================
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    // Explicitly set to 2026 based on requirements context
    yearSpan.textContent = "2026"; 
}