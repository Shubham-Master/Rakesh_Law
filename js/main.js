/* ═══════════════════════════════════════════════
   MAIN.JS — All interactions
═══════════════════════════════════════════════ */

(function() {
  'use strict';

  /* ─── NAV STUCK STATE ───────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('stuck', window.scrollY > 40);
    }, { passive: true });
  }

  /* ─── SCROLL REVEAL ─────────────────────────── */
  const revealElements = document.querySelectorAll('.fi, .fi-l, .fi-r');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ─── ANIMATED COUNTERS ─────────────────────── */
  function animateCount(el, target) {
    let current = 0;
    const step = () => {
      current += Math.ceil(target / 35);
      if (current >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = current;
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        if (target) animateCount(entry.target, target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

  /* ─── HERO PARALLAX ─────────────────────────── */
  const heroBg = document.querySelector('.hero-bg-img');
  if (heroBg) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, 800);
          heroBg.style.transform = `translateY(${y * 0.3}px) scale(1.05)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ─── MASKED PHONE REVEAL ───────────────────── */
  // Phone parts split to discourage scrapers
  const _phoneParts = ['91', '8340', '588597'];
  window.revealPhone = function() {
    const display = document.getElementById('ph-d');
    const button = document.querySelector('#ph-w .rbtn');
    if (!display || !button) return;

    const fullNumber = '+' + _phoneParts.join('');
    const formatted = fullNumber.slice(0, 4) + ' ' + fullNumber.slice(4, 9) + ' ' + fullNumber.slice(9);

    display.innerHTML = `<a href="tel:${fullNumber}">${formatted}</a>`;
    display.classList.add('revealed');
    button.remove();
  };

  /* ─── MASKED EMAIL REVEAL ───────────────────── */
  const _emailParts = ['rak', 'zids', '@', 'gma', 'il', '.com'];
  window.revealEmail = function() {
    const display = document.getElementById('em-d');
    const button = document.querySelector('#em-w .rbtn');
    if (!display || !button) return;

    const address = _emailParts.join('');
    display.innerHTML = `<a href="mailto:${address}">${address}</a>`;
    display.classList.add('revealed');
    button.remove();
  };

  /* ─── CONTACT FORM → WHATSAPP ───────────────── */
  window.submitWA = function() {
    const name = document.getElementById('fn').value.trim() || 'N/A';
    const phone = document.getElementById('fp').value.trim() || 'N/A';
    const matter = document.getElementById('fm').value || 'N/A';
    const desc = document.getElementById('fd').value.trim() || 'N/A';

    const message = `Namaskar Advocate Rakesh Kumar \n\nNaam: ${name}\nPhone: ${phone}\nMamla: ${matter}\nVivaran: ${desc}\n\nKripaya guide karein.`;

    const url = 'https://wa.me/918340588597?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
  };

  /* ─── KEYBOARD ACCESSIBILITY ────────────────── */
  // Allow Enter to submit form when textarea/inputs focused
  document.querySelectorAll('.c-form input, .c-form select').forEach(el => {
    el.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        window.submitWA();
      }
    });
  });

})();
