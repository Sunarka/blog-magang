/**
 * Script Portofolio & Logbook Magang
 * Clean, Modern & Interactive
 * I Komang Sunarka — PT Laksita Emi Saguna
 */

let activeCategory = 'all';
let searchQuery = '';
let currentPhotoIdx = 0;
let scenarioFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBanner();
  initTypingEffect();
  initCounterAnimation();
  init3DTilt();
  initScrollProgress();
  initBackToTop();
  initSearchAndFilter();
  initTimeline();
  initScenarioExplorer();
  initKeyboardNav();
  renderPosts();
  renderGallery();
});

/* ========================================================
   1. Dynamic Typing Effect (Hero Subtitle)
   ======================================================== */
function initTypingEffect() {
  const el = document.getElementById('typing-text');
  if (!el) return;

  const phrases = [
    "Mahasiswa S1 Ilmu Komputer Undiksha",
    "Software QA Tester @ PT Laksita Emi Saguna",
    "Technical Documentation Specialist",
    "Pengujian SIM Keuangan & User Guide"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      typingSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 400; // Pause before new phrase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ========================================================
   2. Animated Number Counters
   ======================================================== */
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const duration = 1200;
        const stepTime = Math.abs(Math.floor(duration / Math.max(target, 1)));

        const timer = setInterval(() => {
          count += 1;
          el.textContent = `${count}${suffix}`;
          if (count >= target) {
            el.textContent = `${target}${suffix}`;
            clearInterval(timer);
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ========================================================
   3. Subtle 3D Card Tilt Micro-motion
   ======================================================== */
function init3DTilt() {
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ========================================================
   4. Dark / Light Theme Toggle
   ======================================================== */
function initTheme() {
  const btn = document.getElementById('theme-btn');
  const saved = localStorage.getItem('clean_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('clean_theme', isDark ? 'dark' : 'light');
    });
  }
}

/* ========================================================
   2. Populate Banner & Stats
   ======================================================== */
function initBanner() {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.author) return;

  const instansiText = document.getElementById('instansi-text');
  const alamatText = document.getElementById('alamat-text');
  const jobdeskText = document.getElementById('jobdesk-text');

  if (instansiText) instansiText.textContent = BLOG_DATA.author.company;
  if (alamatText) alamatText.textContent = BLOG_DATA.author.address;
  if (jobdeskText) jobdeskText.textContent = BLOG_DATA.author.jobdesk;
}

/* ========================================================
   3. Scroll Progress Bar & Back to Top
   ======================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  const ring = document.getElementById('back-to-top-ring');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;

    if (window.scrollY > 280) {
      btn.classList.remove('hidden-btn');
      btn.classList.add('visible-btn');
    } else {
      btn.classList.remove('visible-btn');
      btn.classList.add('hidden-btn');
    }

    if (ring) {
      const circumference = 2 * Math.PI * 18; // r=18
      const offset = circumference - progress * circumference;
      ring.style.strokeDashoffset = `${offset}`;
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========================================================
   4. Live Search & Category Filtering
   ======================================================== */
function initSearchAndFilter() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const tabButtons = document.querySelectorAll('#filter-tabs .tab-btn');

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.classList.toggle('hidden', searchQuery.length === 0);
      }
      renderPosts();
    });
  }

  // Clear search button
  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.add('hidden');
      searchInput.focus();
      renderPosts();
    });
  }

  // Category tab buttons
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.filter;
      updateFilterTabsUI();
      renderPosts();
    });
  });
}

function updateFilterTabsUI() {
  const tabButtons = document.querySelectorAll('#filter-tabs .tab-btn');
  tabButtons.forEach(b => {
    if (b.dataset.filter === activeCategory) {
      b.className = 'tab-btn px-4 py-1.5 rounded-lg bg-brand-blue text-white shadow-sm transition-all font-semibold';
    } else {
      b.className = 'tab-btn px-4 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-all font-medium';
    }
  });
}

function filterByTag(tag) {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) {
    searchInput.value = tag;
    searchQuery = tag.toLowerCase();
    if (clearBtn) clearBtn.classList.remove('hidden');
    renderPosts();

    const logbookSection = document.getElementById('logbook');
    if (logbookSection) {
      logbookSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* ========================================================
   5. Interactive Timeline / Stepper
   ======================================================== */
function initTimeline() {
  const nodes = document.querySelectorAll('.timeline-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const week = node.dataset.week;
      const searchInput = document.getElementById('search-input');
      if (searchInput && week) {
        searchInput.value = `Minggu ${week}`;
        searchQuery = `minggu ${week}`;
        const clearBtn = document.getElementById('search-clear-btn');
        if (clearBtn) clearBtn.classList.remove('hidden');
        renderPosts();

        const logbook = document.getElementById('logbook');
        if (logbook) {
          logbook.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ========================================================
   5.1 Interactive Scenario Matrix Explorer
   ======================================================== */
function initScenarioExplorer() {
  const container = document.getElementById('scenarios-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.scenarios) return;

  const filterBtns = document.querySelectorAll('#scenario-filters button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioFilter = btn.dataset.filter;
      filterBtns.forEach(b => {
        if (b.dataset.filter === scenarioFilter) {
          b.className = 'px-3 py-1 rounded-lg bg-brand-blue text-white font-semibold text-xs shadow-sm transition-all';
        } else {
          b.className = 'px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-blue font-medium text-xs transition-all';
        }
      });
      renderScenarios();
    });
  });

  renderScenarios();
}

function renderScenarios() {
  const container = document.getElementById('scenarios-container');
  const countEl = document.getElementById('scenario-count-text');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.scenarios) return;

  const filtered = BLOG_DATA.scenarios.filter(s => {
    if (scenarioFilter === 'all') return true;
    return s.type.toLowerCase() === scenarioFilter.toLowerCase();
  });

  if (countEl) {
    countEl.textContent = `${filtered.length} skenario aktif • 100% Passed`;
  }

  container.innerHTML = filtered.map((s, idx) => `
    <div class="accordion-item border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all hover:border-blue-400">
      <button 
        onclick="toggleScenario('sc-${s.code}')" 
        class="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 focus:outline-none">
        <div class="flex items-center gap-2.5 flex-1 min-w-0">
          <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-blue-300 text-[11px] font-mono font-bold border border-blue-200 dark:border-blue-800 flex-shrink-0">
            ${s.code}
          </span>
          <span class="text-xs font-bold text-slate-900 dark:text-white truncate">
            ${s.action}
          </span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
            ${s.status}
          </span>
          <svg class="accordion-chevron w-4 h-4 text-slate-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </button>
      <div id="sc-${s.code}" class="accordion-content border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-4 text-xs space-y-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Role Penguji:</span>
            <span class="font-semibold text-slate-800 dark:text-slate-200">${s.role}</span>
          </div>
          <div>
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kategori Uji:</span>
            <span class="font-semibold text-brand-blue dark:text-blue-300">${s.type}</span>
          </div>
        </div>
        <div>
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Hasil Pengujian Sistem:</span>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed font-mono text-[11px] bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 mt-1">
            ${s.result}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleScenario(id) {
  const content = document.getElementById(id);
  if (!content) return;
  const parent = content.closest('.accordion-item');
  if (parent) {
    parent.classList.toggle('active');
  }
}

/* ========================================================
   Helper: Activity Icons (Zero Dummy Photos)
   ======================================================== */
function getActivityIconSvg(type, size = "w-6 h-6") {
  switch (type) {
    case 'testing':
      return `<svg class="${size}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`;
    case 'doc':
      return `<svg class="${size}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>`;
    case 'review':
      return `<svg class="${size}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>`;
    case 'office':
      return `<svg class="${size}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>`;
    case 'mentoring':
      return `<svg class="${size}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`;
    default:
      return `<svg class="${size}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`;
  }
}

function getIconBgClass(type) {
  switch (type) {
    case 'testing':
      return 'from-blue-600 to-indigo-700 text-white';
    case 'doc':
      return 'from-sky-500 to-blue-600 text-white';
    case 'review':
      return 'from-emerald-500 to-teal-700 text-white';
    case 'office':
      return 'from-indigo-600 to-slate-800 text-white';
    case 'mentoring':
      return 'from-violet-600 to-purple-800 text-white';
    default:
      return 'from-brand-blue to-blue-800 text-white';
  }
}

/* ========================================================
   6. Render Logbook Posts Grid
   ======================================================== */
function renderPosts() {
  const container = document.getElementById('posts-container');
  const countBadge = document.getElementById('posts-count-badge');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.posts) return;

  const filtered = BLOG_DATA.posts.filter(post => {
    // Category check
    const matchesCategory = (activeCategory === 'all') ||
      (post.category.toLowerCase() === activeCategory.toLowerCase()) ||
      (post.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase())));

    if (!matchesCategory) return false;

    // Search query check
    if (!searchQuery) return true;
    const combinedText = `
      ${post.title} 
      ${post.summary} 
      ${post.category} 
      minggu ${post.week} 
      ${post.tags.join(' ')} 
      ${post.content}
    `.toLowerCase();

    return combinedText.includes(searchQuery);
  });

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${filtered.length} dari ${BLOG_DATA.posts.length} catatan`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <svg class="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <p class="text-sm font-semibold text-slate-700 dark:text-slate-300">Tidak ada catatan yang cocok</p>
        <p class="text-xs text-slate-400 mt-1">Coba kata kunci lain atau ubah filter kategori.</p>
        <button onclick="resetFilters()" class="mt-4 px-3 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-darkblue transition-colors">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => {
    const iconHtml = getActivityIconSvg(post.iconType || 'testing', 'w-10 h-10');
    const bgGradient = getIconBgClass(post.iconType || 'testing');

    return `
    <article class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm clean-card flex flex-col justify-between animate-fade-in-up">
      
      <div>
        <!-- Clean Visual Header (No Dummy Photos) -->
        <a href="post.html?id=${post.id}" class="block relative aspect-[16/8] bg-gradient-to-br ${bgGradient} overflow-hidden group flex items-center justify-center p-6">
          <div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
          
          <span class="absolute top-2.5 left-2.5 bg-white/20 backdrop-blur text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-sm border border-white/20">
            Minggu ${post.week}
          </span>
          <span class="absolute bottom-2.5 right-2.5 bg-black/40 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded">
            ${post.category}
          </span>

          <!-- Centered Clean SVG Icon -->
          <div class="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/25 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            ${iconHtml}
          </div>
        </a>

        <!-- Content -->
        <div class="p-5">
          <div class="text-[11px] text-slate-400 font-medium mb-2 flex items-center justify-between">
            <span>${post.date}</span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-800">
              Selesai
            </span>
          </div>

          <h3 class="font-bold text-base text-slate-900 dark:text-white leading-snug mb-2 hover:text-brand-blue transition-colors">
            <a href="post.html?id=${post.id}">
              ${post.title}
            </a>
          </h3>

          <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-3">
            ${post.summary}
          </p>
        </div>
      </div>

      <!-- Footer Tags & Action -->
      <div class="px-5 pb-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-3 flex items-center justify-between gap-2">
        <div class="flex flex-wrap gap-1">
          ${post.tags.slice(0, 2).map(t => `
            <button 
              onclick="filterByTag('${t}')" 
              class="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
              #${t}
            </button>
          `).join('')}
        </div>

        <div class="flex items-center gap-2">
          <!-- Quick Preview Button -->
          <button 
            onclick="openPostPreview('${post.id}')" 
            title="Lihat Pratinjau Cepat" 
            class="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-blue transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </button>

          <!-- Read Full Button -->
          <a href="post.html?id=${post.id}" class="text-xs font-bold text-brand-blue dark:text-blue-400 hover:underline flex items-center gap-0.5">
            <span>Detail</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

    </article>
    `;
  }).join('');
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  updateFilterTabsUI();
  renderPosts();
}

/* ========================================================
   7. Quick Post Preview Modal
   ======================================================== */
function openPostPreview(postId) {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.posts) return;
  const post = BLOG_DATA.posts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('preview-modal');
  const body = document.getElementById('preview-modal-body');
  if (!modal || !body) return;

  const iconHtml = getActivityIconSvg(post.iconType || 'testing', 'w-10 h-10');
  const bgGradient = getIconBgClass(post.iconType || 'testing');

  body.innerHTML = `
    <div class="flex items-center gap-2 mb-3">
      <span class="px-2.5 py-0.5 rounded-md bg-brand-blue text-white text-[11px] font-bold">Minggu ${post.week}</span>
      <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-brand-blue dark:text-blue-300 text-[11px] font-semibold">${post.category}</span>
      <span class="text-slate-400 text-xs">•</span>
      <span class="text-xs text-slate-500 dark:text-slate-400">${post.date}</span>
    </div>

    <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
      ${post.title}
    </h2>

    <div class="rounded-2xl p-6 bg-gradient-to-br ${bgGradient} text-white flex items-center justify-center mb-5 shadow-sm">
      <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center">
        ${iconHtml}
      </div>
    </div>

    <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border-l-4 border-brand-blue mb-5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
      ${post.summary}
    </div>

    <div class="post-body text-xs sm:text-sm">
      ${post.content}
    </div>

    <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <a href="post.html?id=${post.id}" class="px-4 py-2 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-brand-darkblue transition-colors flex items-center gap-1.5 shadow-sm">
        <span>Buka Halaman Lengkap</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
      <button onclick="closePostPreview()" class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
        Tutup
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePostPreview() {
  const modal = document.getElementById('preview-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

/* ========================================================
   8. Render Photo / Activity Documentation Grid
   ======================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;

  container.innerHTML = BLOG_DATA.gallery.map((item, idx) => {
    const iconHtml = getActivityIconSvg(item.iconType || 'testing', 'w-8 h-8');
    const bgGradient = getIconBgClass(item.iconType || 'testing');

    return `
    <div 
      onclick="openPhotoModal(${idx})" 
      class="group cursor-pointer bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 clean-card shadow-sm flex flex-col justify-between">
      
      <!-- Icon Graphic Card Header (No Dummy Photos) -->
      <div class="relative aspect-[4/3] bg-gradient-to-br ${bgGradient} flex items-center justify-center p-4">
        <span class="absolute top-2 left-2 bg-white/20 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-white/20">
          ${item.category}
        </span>
        
        <div class="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow">
          ${iconHtml}
        </div>

        <div class="absolute bottom-2 right-2 text-[10px] font-semibold text-white/80 bg-black/30 px-2 py-0.5 rounded backdrop-blur">
          Lihat Info
        </div>
      </div>

      <div class="p-3.5">
        <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-brand-blue transition-colors">
          ${item.title}
        </h4>
        <p class="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          ${item.caption}
        </p>
      </div>
    </div>
    `;
  }).join('');
}

/* ========================================================
   9. Activity Modal & Navigation
   ======================================================== */
function openPhotoModal(idx) {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;
  currentPhotoIdx = idx;
  updatePhotoModal();

  const modal = document.getElementById('photo-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function updatePhotoModal() {
  const item = BLOG_DATA.gallery[currentPhotoIdx];
  if (!item) return;

  const iconContainer = document.getElementById('modal-icon-container');
  const title = document.getElementById('modal-title');
  const caption = document.getElementById('modal-caption');
  const date = document.getElementById('modal-date');
  const counter = document.getElementById('modal-counter');

  const iconHtml = getActivityIconSvg(item.iconType || 'testing', 'w-16 h-16');
  const bgGradient = getIconBgClass(item.iconType || 'testing');

  if (iconContainer) {
    iconContainer.className = `w-full py-12 bg-gradient-to-br ${bgGradient} flex items-center justify-center text-white relative`;
    iconContainer.innerHTML = `
      <div class="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center shadow-xl">
        ${iconHtml}
      </div>
    `;
  }
  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (date) date.textContent = `Tanggal: ${item.date} • Kategori: ${item.category}`;
  if (counter) counter.textContent = `Dokumentasi ${currentPhotoIdx + 1} dari ${BLOG_DATA.gallery.length}`;
}

function nextPhoto() {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;
  currentPhotoIdx = (currentPhotoIdx + 1) % BLOG_DATA.gallery.length;
  updatePhotoModal();
}

function prevPhoto() {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;
  currentPhotoIdx = (currentPhotoIdx - 1 + BLOG_DATA.gallery.length) % BLOG_DATA.gallery.length;
  updatePhotoModal();
}

function closePhotoModal() {
  const modal = document.getElementById('photo-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

/* ========================================================
   10. Global Keyboard Navigation
   ======================================================== */
function initKeyboardNav() {
  window.addEventListener('keydown', (e) => {
    const photoModal = document.getElementById('photo-modal');
    const previewModal = document.getElementById('preview-modal');

    // If photo modal is open
    if (photoModal && !photoModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closePhotoModal();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }

    // If preview modal is open
    if (previewModal && !previewModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closePostPreview();
    }
  });

  // Close modals on background click
  window.addEventListener('click', (e) => {
    const photoModal = document.getElementById('photo-modal');
    const previewModal = document.getElementById('preview-modal');

    if (e.target === photoModal) closePhotoModal();
    if (e.target === previewModal) closePostPreview();
  });
}

/* ========================================================
   11. Copy URL & Toast Feedback
   ======================================================== */
function copyUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("Link berhasil disalin ke clipboard!");
  }).catch(() => {
    showToast("Gagal menyalin link.");
  });
}

function showToast(text) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl transition-all duration-200 opacity-0 transform translate-y-2 z-50 pointer-events-none flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400 dark:text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span>${text}</span>
  `;
  toast.classList.remove('opacity-0', 'translate-y-2');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-2');
  }, 2400);
}

