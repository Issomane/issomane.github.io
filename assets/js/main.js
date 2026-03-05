/* ============================================================
   LINEAR THEME — main.js
   Minimal JS: nav scroll, mobile menu, scroll animations
   ============================================================ */

(function () {
  'use strict';

  // ── Nav scroll effect ─────────────────────────────────────
  const nav = document.getElementById('site-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile nav toggle ─────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      // Animate hamburger → X
      const spans = toggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(5.5px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-5.5px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        const spans = toggle.querySelectorAll('span');
        spans.forEach(s => s.style.transform = s.style.opacity = '');
      }
    });
  }

  // ── Scroll-triggered fade-up ──────────────────────────────
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-up').forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  // ── Code block copy button ────────────────────────────────
  document.querySelectorAll('pre').forEach((pre) => {
    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.setAttribute('aria-label', 'Copy code');
    btn.innerHTML = `
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    `;

    btn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 5px;
      padding: 5px 8px;
      cursor: pointer;
      color: rgba(255,255,255,0.4);
      transition: all 150ms ease;
      font-family: inherit;
      line-height: 1;
    `;

    btn.addEventListener('mouseenter', () => {
      btn.style.background = 'rgba(255,255,255,0.12)';
      btn.style.color = 'rgba(255,255,255,0.7)';
    });

    btn.addEventListener('mouseleave', () => {
      if (!btn.dataset.copied) {
        btn.style.background = 'rgba(255,255,255,0.07)';
        btn.style.color = 'rgba(255,255,255,0.4)';
      }
    });

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;
      try {
        await navigator.clipboard.writeText(text);
        btn.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        btn.style.color = '#10b981';
        btn.style.borderColor = 'rgba(16,185,129,0.4)';
        btn.dataset.copied = 'true';
        setTimeout(() => {
          delete btn.dataset.copied;
          btn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          `;
          btn.style.color = 'rgba(255,255,255,0.4)';
          btn.style.borderColor = 'rgba(255,255,255,0.1)';
          btn.style.background = 'rgba(255,255,255,0.07)';
        }, 2000);
      } catch (_) {}
    });

    pre.appendChild(btn);
  });

})();
