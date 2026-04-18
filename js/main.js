/* MTZ Klíma – main.js */

// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  navLinks.classList.toggle('nyitva', open);
  burger.setAttribute('aria-expanded', String(open));
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('nyitva');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Contact form – demo visszajelzés (nincs backend)
const form = document.getElementById('kapcsolatForm');
const ertesites = document.getElementById('ertesites');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  ertesites.classList.add('látható');
  form.reset();
  setTimeout(() => ertesites.classList.remove('látható'), 6000);
});
