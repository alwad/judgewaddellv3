// Nav toggle (mobile)
const navToggle = document.getElementById('nav-toggle');
const siteNav   = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

// Dropdown toggles (mobile — click to expand)
document.querySelectorAll('.site-nav__link--parent').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.site-nav__item--dropdown');
    if (item) item.classList.toggle('is-open');
  });
});

// Sticky header shadow
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
