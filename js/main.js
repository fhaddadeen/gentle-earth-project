/* ===================================
   GENTLE EARTH PROJECT
   Main JS — Interactions
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Portal tabs ─────────────────────────────
  const tabs = document.querySelectorAll('.portal-tab');
  const panels = document.querySelectorAll('.portal-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // ── Fade-in on scroll ────────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeEls.forEach(el => observer.observe(el));
  }

  // ── Contact / portal form submission ────────
  document.querySelectorAll('form[data-feedback]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const msg = form.querySelector('.form-success');
      const btn = form.querySelector('button[type="submit"]');

      // No action = UI placeholder (e.g. Sign In form) — dummy behaviour only
      if (!form.action || form.action === window.location.href) {
        form.reset();
        if (msg) { msg.style.display = 'block'; setTimeout(() => { msg.style.display = 'none'; }, 5000); }
        return;
      }

      // Disable button while submitting
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (msg) { msg.style.display = 'block'; setTimeout(() => { msg.style.display = 'none'; }, 7000); }
        } else {
          alert('Something went wrong — please try again or email us at contact@gentleearthproject.com');
        }
      } catch {
        alert('Unable to send — please check your connection and try again.');
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = btn.getAttribute('data-label') || 'Submit'; }
      }
    });

    // Store original button label for restore after submit
    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.setAttribute('data-label', btn.textContent.trim());
  });

});

/* Fade-in utility styles (injected once) */
(function injectFadeStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .fade-in { opacity: 0; transform: translateY(18px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .fade-in.visible { opacity: 1; transform: none; }
    .form-success {
      display: none;
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background: rgba(77,92,40,0.1);
      border: 1px solid rgba(77,92,40,0.25);
      border-radius: 6px;
      color: #4D5C28;
      font-size: 0.875rem;
    }
  `;
  document.head.appendChild(style);
})();
