/* ===================================
   GENTLE EARTH PROJECT
   Shared Components — Nav & Footer
   =================================== */

const LOGO = 'images/logo.png';

const NAV_HTML = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="${LOGO}" alt="Gentle Earth Project">
    </a>
    <ul class="nav-links" id="nav-links">
      <li class="nav-item">
        <a href="index.html" class="nav-link" data-nav="home">Home</a>
      </li>
      <li class="nav-item has-dropdown">
        <a href="#" class="nav-link" data-nav="about">About Us</a>
        <ul class="dropdown">
          <li><a href="mission-vision.html">Mission &amp; Vision</a></li>
          <li><a href="our-story.html">Our Story</a></li>
          <li><a href="our-people.html">Our People</a></li>
          <li><a href="our-technology.html">Our Technology</a></li>
          <li><a href="endorsements.html">Endorsements</a></li>
          <li><a href="press.html">Press</a></li>
        </ul>
      </li>
      <li class="nav-item has-dropdown">
        <a href="#" class="nav-link" data-nav="expertise">Our Expertise</a>
        <ul class="dropdown">
          <li><a href="reforestation.html">Reforestation</a></li>
          <li><a href="afforestation.html">Afforestation</a></li>
          <li><a href="reef-forestation.html">Reef-Forestation</a></li>
          <li><a href="mangrove-delta.html">Mangrove &amp; Delta Restoration</a></li>
          <li><a href="circular-economic.html">Circular Economic Development</a></li>
          <li><a href="white-papers.html">White Papers &amp; Blogs</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="projects.html" class="nav-link" data-nav="projects">Our Projects</a>
      </li>
      <li class="nav-item has-dropdown">
        <a href="portal.html" class="nav-link" data-nav="stakeholders">Stakeholders</a>
        <ul class="dropdown">
          <li><a href="portal.html">Project Portal</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="governments.html" class="nav-link" data-nav="governments">For Governments</a>
      </li>
      <li class="nav-item">
        <a href="contact.html" class="nav-link nav-cta" data-nav="contact">Contact</a>
      </li>
    </ul>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="mobile-nav" id="mobile-nav">
  <div class="mob-item">
    <a href="index.html" class="mob-link">Home</a>
  </div>
  <div class="mob-item">
    <a href="#" class="mob-link">About Us</a>
    <div class="mob-sub">
      <a href="mission-vision.html">Mission &amp; Vision</a>
      <a href="our-story.html">Our Story</a>
      <a href="our-people.html">Our People</a>
      <a href="our-technology.html">Our Technology</a>
      <a href="endorsements.html">Endorsements</a>
      <a href="press.html">Press</a>
    </div>
  </div>
  <div class="mob-item">
    <a href="#" class="mob-link">Our Expertise</a>
    <div class="mob-sub">
      <a href="reforestation.html">Reforestation</a>
      <a href="afforestation.html">Afforestation</a>
      <a href="reef-forestation.html">Reef-Forestation</a>
      <a href="mangrove-delta.html">Mangrove &amp; Delta Restoration</a>
      <a href="circular-economic.html">Circular Economic Development</a>
      <a href="white-papers.html">White Papers &amp; Blogs</a>
    </div>
  </div>
  <div class="mob-item">
    <a href="projects.html" class="mob-link">Our Projects</a>
  </div>
  <div class="mob-item">
    <a href="portal.html" class="mob-link">Stakeholders</a>
  </div>
  <div class="mob-item">
    <a href="governments.html" class="mob-link">For Governments</a>
  </div>
  <div class="mob-item">
    <a href="contact.html" class="mob-link">Contact</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <img src="${LOGO}" alt="Gentle Earth Project">
        </div>
        <p class="footer-tagline">Developing sovereign-scale natural-capital infrastructure through science-based, regenerative environmental solutions.</p>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">About</p>
        <a href="mission-vision.html">Mission &amp; Vision</a>
        <a href="our-story.html">Our Story</a>
        <a href="our-people.html">Our People</a>
        <a href="our-technology.html">Our Technology</a>
        <a href="endorsements.html">Endorsements</a>
        <a href="press.html">Press</a>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Expertise</p>
        <a href="reforestation.html">Reforestation</a>
        <a href="afforestation.html">Afforestation</a>
        <a href="reef-forestation.html">Reef-Forestation</a>
        <a href="mangrove-delta.html">Mangrove &amp; Delta</a>
        <a href="circular-economic.html">Circular Economy</a>
        <a href="white-papers.html">White Papers</a>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Engage</p>
        <a href="projects.html">Our Projects</a>
        <a href="portal.html">Stakeholder Portal</a>
        <a href="governments.html">For Governments</a>
        <a href="contact.html">Contact</a>
        <br>
        <span style="font-size:0.75rem;color:rgba(255,255,255,0.38);display:block;margin-bottom:4px;">DIFC, Dubai, UAE</span>
        <a href="mailto:contact@gentleearthproject.com" style="font-size:0.75rem;color:rgba(255,255,255,0.5);">contact@gentleearthproject.com</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Gentle Earth Project. All rights reserved.</span>
      <span>Earth&rsquo;s Legacy &mdash; Our Promise</span>
    </div>
  </div>
</footer>
`;

const ABOUT_PAGES = ['mission-vision.html','our-story.html','our-people.html','our-technology.html','endorsements.html','press.html'];
const EXPERTISE_PAGES = ['reforestation.html','afforestation.html','reef-forestation.html','mangrove-delta.html','circular-economic.html','white-papers.html'];

function initComponents() {
  // Inject nav + mobile nav at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer at end of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Scroll shadow on nav
  const nav = document.getElementById('site-nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
  });

  // Active nav highlight
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
    const key = link.getAttribute('data-nav');
    if (
      (key === 'home'         && (page === 'index.html' || page === ''))          ||
      (key === 'about'        && ABOUT_PAGES.includes(page))                      ||
      (key === 'expertise'    && EXPERTISE_PAGES.includes(page))                  ||
      (key === 'projects'     && page === 'projects.html')                        ||
      (key === 'stakeholders' && page === 'portal.html')                          ||
      (key === 'governments'  && page === 'governments.html')                     ||
      (key === 'contact'      && page === 'contact.html')
    ) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initComponents);
