/* ===================================
   GENTLE EARTH PROJECT
   Main JS — Interactions
   =================================== */

function showToast(message, type) {
  const toast = document.createElement('div');
  toast.className = 'gep-toast gep-toast--' + (type || 'error');
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('gep-toast--show'));
  setTimeout(() => {
    toast.classList.remove('gep-toast--show');
    setTimeout(() => toast.remove(), 400);
  }, 6000);
}

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

      // Geo lookup fires only on submit (not on page load) — GDPR-compliant
      // Legitimate interests basis: identifying geographic origin of contact enquiries.
      // Resolves in <1s on most connections; falls back silently if blocked or slow.
      const formData = new FormData(form);
      try {
        const geoTimeout = new Promise((_, reject) => setTimeout(() => reject(), 2000));
        const geoFetch   = fetch('https://ipapi.co/json/').then(r => r.json());
        const geo = await Promise.race([geoFetch, geoTimeout]);
        if (geo) {
          if (geo.ip)           formData.append('_geo_ip',       geo.ip);
          if (geo.country_name) formData.append('_geo_country',  geo.country_name);
          if (geo.city)         formData.append('_geo_city',     geo.city);
          if (geo.region)       formData.append('_geo_region',   geo.region);
          if (geo.timezone)     formData.append('_geo_timezone', geo.timezone);
          if (geo.org)          formData.append('_geo_org',      geo.org);
        }
      } catch { /* geo unavailable — form still submits cleanly */ }

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (msg) { msg.style.display = 'block'; setTimeout(() => { msg.style.display = 'none'; }, 7000); }
          if (typeof gtag === 'function') {
            gtag('event', 'form_submit', {
              form_id: form.getAttribute('action') || 'unknown',
              page: window.location.pathname
            });
          }
        } else {
          showToast('Something went wrong — please try again or email us at contact@gentleearthproject.com', 'error');
        }
      } catch {
        showToast('Unable to send — please check your connection and try again.', 'error');
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
    @media (prefers-reduced-motion: reduce) {
      .fade-in { opacity: 1; transform: none; transition: none; }
    }
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
    .gep-toast {
      position: fixed;
      bottom: 5rem;
      left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #3a1a1a;
      color: rgba(255,255,255,0.9);
      border: 1px solid rgba(200,80,80,0.4);
      border-radius: 6px;
      padding: 0.85rem 1.4rem;
      font-size: 0.875rem;
      line-height: 1.5;
      max-width: min(480px, 90vw);
      text-align: center;
      z-index: 9998;
      opacity: 0;
      transition: opacity 0.35s ease, transform 0.35s ease;
      pointer-events: none;
    }
    .gep-toast--show {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    @media (prefers-reduced-motion: reduce) {
      .gep-toast { transition: none; }
    }
  `;
  document.head.appendChild(style);
})();
