// ── Navbar scroll effect ────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(13,17,23,0.98)'
    : 'rgba(13,17,23,0.85)';
});

// ── Mobile menu toggle ──────────────────────────────────────────────────────
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ── Contact form (demo) ─────────────────────────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => success.style.display = 'none', 4000);
}

// ── Scroll reveal (IntersectionObserver) ───────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .stat-card, .about-text, .contact-info')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card, .stat-card, .about-text, .contact-info')
    .forEach(el => {
      el.classList.add = (cls) => {
        if (cls === 'visible') {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      };
    });
});

// IntersectionObserver avec animation manuelle
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  revealObserver.observe(el);
});