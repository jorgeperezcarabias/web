/* main.js — RedAgraria */

// ── Año dinámico en footer ─────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Navbar: sombra al hacer scroll ────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── Navbar: menú móvil ─────────────────────────────────
const burger  = document.querySelector('.navbar__burger');
const mobileMenu = document.getElementById('mobile-menu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    const nowOpen = !isOpen;
    burger.setAttribute('aria-expanded', String(nowOpen));
    mobileMenu.hidden = !nowOpen;
    mobileMenu.setAttribute('aria-hidden', String(!nowOpen));
  });
  // Cierra el menú al pulsar un enlace
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}

// ── Animación de entrada al hacer scroll (Intersection Observer) ─
const animateEls = document.querySelectorAll(
  '.step, .profile-card, .testimonial, .hero__content, .wamock'
);
if ('IntersectionObserver' in window && animateEls.length) {
  // Añadir clase base para la animación (definida en CSS)
  animateEls.forEach(el => el.classList.add('anim-ready'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animateEls.forEach(el => observer.observe(el));
}
