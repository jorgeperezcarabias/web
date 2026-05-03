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

// ── Saltar al contenido (foco accesible) ───────────────
const skipLink = document.querySelector('.skip-link');
const mainContent = document.getElementById('main-content');
if (skipLink && mainContent) {
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.focus({ preventScroll: true });
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ── Navbar: menú móvil ─────────────────────────────────
const burger = document.querySelector('.navbar__burger');
const mobileMenu = document.getElementById('mobile-menu');
if (burger && mobileMenu) {
  const setMenuOpen = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    mobileMenu.hidden = !open;
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('nav-mobile-open', open);
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    if (!open) burger.focus();
  };

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (burger.getAttribute('aria-expanded') !== 'true') return;
    e.preventDefault();
    setMenuOpen(false);
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
