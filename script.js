/* ============================================================
   KAELITH — script.js
   Reads from siteData (config.js) and builds the whole page.
   ============================================================ */

'use strict';

(function () {

  // ── 1. SEO meta from config ────────────────────────────────
  document.querySelector('meta[name="description"]').setAttribute('content', siteData.seo.description);
  document.querySelector('meta[name="keywords"]').setAttribute('content', siteData.seo.keywords);
  document.querySelector('meta[property="og:description"]').setAttribute('content', siteData.seo.description);

  // ── 2. HERO ────────────────────────────────────────────────
  document.getElementById('heroTitle').textContent    = siteData.title;
  document.getElementById('heroSubtitle').textContent = siteData.subtitle;
  document.getElementById('navLogo').textContent      = siteData.title;
  document.title = `${siteData.title} — ${siteData.subtitle}`;

  // Hero background image (set via config.js heroBackground)
  const heroBg = document.getElementById('heroBg');
  if (siteData.heroBackground) {
    heroBg.style.backgroundImage = `url('${siteData.heroBackground}')`;
  }

  // ── 3. WORK GRID ───────────────────────────────────────────
  const grid = document.getElementById('workGrid');

  siteData.images.forEach((src, i) => {
    const item = document.createElement('article');
    item.className = 'work__item';
    item.setAttribute('role', 'listitem');
    // data-index used for stagger delay
    item.setAttribute('data-index', i);

    const img = document.createElement('img');
    img.src     = src;
    img.alt     = siteData.altText[i] || `Portfolio image ${i + 1}`;
    img.className = 'work__img';
    img.loading = 'lazy';
    img.decoding = 'async';

    const caption = document.createElement('div');
    caption.className = 'work__caption';
    const captionText = document.createElement('p');
    captionText.textContent = siteData.captions[i] || '';
    caption.appendChild(captionText);

    item.appendChild(img);
    item.appendChild(caption);
    grid.appendChild(item);
  });

  // ── 4. ABOUT ───────────────────────────────────────────────
  const a = siteData.about;
  document.getElementById('aboutIntro').textContent       = a.intro;
  document.getElementById('aboutDescription').textContent = a.description;

  const meta = document.getElementById('aboutMeta');
  const metaItems = [
    { label: 'DOB',      value: a.dob },
    { label: 'Based In', value: a.location },
  ];
  metaItems.forEach(({ label, value }) => {
    if (!value) return;
    const row = document.createElement('div');
    row.className = 'about__meta-item';
    row.innerHTML = `<span class="about__meta-label">${label}</span>
                     <span class="about__meta-value">${value}</span>`;
    meta.appendChild(row);
  });

  // ── 5. SERVICES ────────────────────────────────────────────
  const servicesGrid = document.getElementById('servicesGrid');

  siteData.services.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = `${i * 0.12}s`;
    card.innerHTML = `
      <span class="service-card__icon" aria-hidden="true">${s.icon}</span>
      <h3 class="service-card__title">${s.title}</h3>
      <p  class="service-card__desc">${s.description}</p>
    `;
    servicesGrid.appendChild(card);
  });

  // ── 6. CONTACT ─────────────────────────────────────────────
  const c = siteData.contact;

  // Render headline (wrap last word in <em> for style)
  const words = c.headline.split(' ');
  const last  = words.pop();
  document.getElementById('contactHeadline').innerHTML =
    `${words.join(' ')} <em>${last}</em>`;

  const btnWrap = document.getElementById('contactButtons');

  // Instagram button
  const igBtn = document.createElement('a');
  igBtn.href      = c.instagram;
  igBtn.target    = 'kaelith_co';
  igBtn.rel       = 'noopener noreferrer';
  igBtn.className = 'btn btn--instagram';
  igBtn.setAttribute('aria-label', 'Instagram profile');
  igBtn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.602.333 3.635 1.3 2.668 2.267 2.465 3.44 2.407 4.718 2.349 5.998 2.335 6.406 2.335 12c0 5.594.014 6.002.072 7.282.058 1.278.261 2.451 1.228 3.418.967.967 2.14 1.17 3.418 1.228C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.451-.261 3.418-1.228.967-.967 1.17-2.14 1.228-3.418.058-1.28.072-1.688.072-7.282 0-5.594-.014-6.002-.072-7.282-.058-1.278-.261-2.451-1.228-3.418C19.398.333 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
    Instagram
  `;
  btnWrap.appendChild(igBtn);

  // WhatsApp button
  const waBtn = document.createElement('a');
  waBtn.href      = c.whatsapp;
  waBtn.target    = '+91 8627829711';
  waBtn.rel       = 'noopener noreferrer';
  waBtn.className = 'btn btn--whatsapp';
  waBtn.setAttribute('aria-label', 'WhatsApp contact');
  waBtn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
    WhatsApp
  `;
  btnWrap.appendChild(waBtn);

  // ── 7. FOOTER YEAR ─────────────────────────────────────────
  document.getElementById('year').textContent = new Date().getFullYear();

  // ══════════════════════════════════════════════════════════
  //  SCROLL REVEAL (IntersectionObserver)
  // ══════════════════════════════════════════════════════════
  const revealEls = document.querySelectorAll('.reveal');
  const gridItems = document.querySelectorAll('.work__item');

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObs.observe(el));

  // Stagger grid items
  const gridObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = parseInt(entry.target.getAttribute('data-index'), 10) || 0;
        entry.target.style.transitionDelay = `${(idx % 3) * 0.1}s`;
        entry.target.classList.add('visible');
        gridObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  gridItems.forEach(el => gridObs.observe(el));

  // Service cards (re-query after DOM build)
  const cardObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        cardObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.service-card').forEach(el => cardObs.observe(el));

  // ══════════════════════════════════════════════════════════
  //  NAV — sticky glass style on scroll
  // ══════════════════════════════════════════════════════════
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ══════════════════════════════════════════════════════════
  //  PARALLAX — hero background on scroll
  // ══════════════════════════════════════════════════════════
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (heroBg) {
      heroBg.style.transform = `scale(1.06) translateY(${y * 0.18}px)`;
    }
  }, { passive: true });

  // ══════════════════════════════════════════════════════════
  //  CUSTOM CURSOR
  // ══════════════════════════════════════════════════════════
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  let mx = 0, my = 0, rx = 0, ry = 0;
  let rafId;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states: enlarge ring on interactive elements
  const hoverTargets = 'a, button, .work__item, .service-card, .btn';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // ══════════════════════════════════════════════════════════
  //  FILM GRAIN (canvas)
  // ══════════════════════════════════════════════════════════
  const canvas = document.getElementById('grainCanvas');
  const ctx    = canvas.getContext('2d');

  function resizeGrain() {
    canvas.width  = window.innerWidth  * 0.5; // half-res for perf
    canvas.height = window.innerHeight * 0.5;
  }
  resizeGrain();
  window.addEventListener('resize', resizeGrain, { passive: true });

  function renderGrain() {
    const w = canvas.width, h = canvas.height;
    const imageData = ctx.createImageData(w, h);
    const buf = imageData.data;
    for (let i = 0; i < buf.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      buf[i]   = v;
      buf[i+1] = v;
      buf[i+2] = v;
      buf[i+3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(renderGrain);
  }
  renderGrain();

})();
