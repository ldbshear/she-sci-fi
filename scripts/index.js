
    // Mobile nav toggle — minimal, no external deps
    (function () {
      'use strict';
      const toggle = document.getElementById('navToggle');
      const links = document.getElementById('navLinks');
      if (!toggle || !links) return;

      toggle.addEventListener('click', function () {
        const isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.textContent = isOpen ? '✕' : '☰';
      });

      // Close menu on link click (mobile)
      links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.textContent = '☰';
        });
      });
    })();

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
