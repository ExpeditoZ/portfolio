// main.js — nav toggle, filters, reveal & misc
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (window.lucide) lucide.replace();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.top-nav .nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
      navList.style.flexDirection = 'column';
      navList.style.gap = '12px';
      navList.style.background = 'rgba(7,9,12,.92)';
      navList.style.position = 'absolute';
      navList.style.right = '20px';
      navList.style.top = '64px';
      navList.style.padding = '14px';
      navList.style.border = '1px solid rgba(255,255,255,.06)';
      navList.style.borderRadius = '12px';
    });
  }

  // Portfolio filters
  const btns = Array.from(document.querySelectorAll('.filter-btn'));
  const projects = Array.from(document.querySelectorAll('.project'));

  function applyFilter(cat) {
    projects.forEach(p => {
      const match = cat === 'all' || p.getAttribute('data-cat') === cat;
      p.style.display = match ? '' : 'none';
    });
  }
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    applyFilter(b.getAttribute('data-filter'));
  }));
  applyFilter('all');

  // Reveal on scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section, .card, .project, .display, .section-title').forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
});
