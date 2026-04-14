/* ===================================
   GENTLE EARTH PROJECT
   Main JS — Interactions
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Hero video playback rate ────────────────
  // Slow all hero videos to half speed for a calmer, more cinematic feel
  const heroVideos = document.querySelectorAll('.hero-video, .page-hero-video');
  heroVideos.forEach(video => {
    const setRate = () => { video.playbackRate = 0.5; };
    setRate();
    video.addEventListener('loadedmetadata', setRate);
    video.addEventListener('play', setRate);
  });

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

  // ── Contact / portal form feedback ──────────
  document.querySelectorAll('form[data-feedback]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = form.querySelector('.form-success');
      if (msg) {
        form.reset();
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
      }
    });
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
