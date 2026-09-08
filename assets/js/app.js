/**
 * Portofolio & Logbook Magang — I Komang Sunarka
 * PT Laksita Emi Saguna • S1 Ilmu Komputer Undiksha
 */

let activeCategory = 'all';
let searchQuery = '';
let currentPhotoIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollProgress();
  initBackToTop();
  initInternshipProgress();
  initOverviewStats();
  initWorkFocus();
  initSkills();
  initLearnings();
  initChallenges();
  initSearchAndFilter();
  initKeyboardNav();
  renderPosts();
  renderGallery();
});

/* ========================================================
   1. Theme Management (Dark / Light)
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
   2. Mobile Menu Navigation
   ======================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('#mobile-menu a');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ========================================================
   3. Scroll Progress & Back-to-Top
   ======================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('hidden-btn');
      btn.classList.add('visible-btn');
    } else {
      btn.classList.remove('visible-btn');
      btn.classList.add('hidden-btn');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========================================================
   4. Dynamic Internship Progress Calculation
   ======================================================== */
function initInternshipProgress() {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.author) return;

  const start = new Date(BLOG_DATA.author.startDate || "2026-08-24");
  const end = new Date(BLOG_DATA.author.endDate || "2026-12-31");
  const now = new Date();

  const totalTime = end.getTime() - start.getTime();
  const totalDays = Math.ceil(totalTime / (1000 * 60 * 60 * 24));

  let elapsedDays = 0;
  if (now > start) {
    const elapsedTime = Math.min(now.getTime() - start.getTime(), totalTime);
    elapsedDays = Math.ceil(elapsedTime / (1000 * 60 * 60 * 24));
  } else {
    // If currently previewing before start date, show recorded logged data progress (Week 3 of ~19 weeks)
    elapsedDays = 21; // 3 weeks logged
  }

  const percent = Math.min(Math.max(Math.round((elapsedDays / totalDays) * 100), 1), 100);

  const progressBar = document.getElementById('progress-bar-fill');
  const percentText = document.getElementById('progress-percent-text');
  const daysText = document.getElementById('progress-days-text');

  if (progressBar) progressBar.style.width = `${percent}%`;
  if (percentText) percentText.textContent = `${percent}% Selesai`;
  if (daysText) daysText.textContent = `${elapsedDays} dari ${totalDays} hari kalender`;
}

/* ========================================================
   5. Overview Statistics Cards
   ======================================================== */
function initOverviewStats() {
  if (typeof BLOG_DATA === 'undefined') return;

  const totalPosts = BLOG_DATA.posts ? BLOG_DATA.posts.length : 0;
  const totalScenarios = (BLOG_DATA.posts && BLOG_DATA.posts[0] && BLOG_DATA.posts[0].testing) ? BLOG_DATA.posts[0].testing.length : 14;
  const totalDocs = BLOG_DATA.gallery ? BLOG_DATA.gallery.length : 0;

  const statWeeks = document.getElementById('stat-weeks');
  const statScenarios = document.getElementById('stat-scenarios');
  const statGuides = document.getElementById('stat-guides');
  const statDocs = document.getElementById('stat-docs');

  if (statWeeks) statWeeks.textContent = `${totalPosts} Minggu`;
  if (statScenarios) statScenarios.textContent = `${totalScenarios} SN`;
  if (statGuides) statGuides.textContent = `3 Modul`;
  if (statDocs) statDocs.textContent = `${totalDocs} Catatan`;
}

/* ========================================================
   6. Render Work Focus, Skills, Learnings, Challenges
   ======================================================== */
function initWorkFocus() {
  const container = document.getElementById('work-focus-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.workFocus) return;

  container.innerHTML = BLOG_DATA.workFocus.map(item => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 clean-card flex flex-col justify-between">
      <div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/70 text-brand-blue dark:text-blue-300 text-xs font-semibold mb-3 border border-blue-200/60 dark:border-blue-800/60">
          ${item.badge}
        </div>
        <h3 class="font-bold text-base text-slate-900 dark:text-white mb-2">${item.title}</h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function initSkills() {
  const testingContainer = document.getElementById('skills-testing-list');
  const docContainer = document.getElementById('skills-doc-list');
  const domainContainer = document.getElementById('skills-domain-list');

  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.skills) return;

  if (testingContainer && BLOG_DATA.skills.testing) {
    testingContainer.innerHTML = BLOG_DATA.skills.testing.map(s => `
      <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">${s}</span>
    `).join('');
  }

  if (docContainer && BLOG_DATA.skills.documentation) {
    docContainer.innerHTML = BLOG_DATA.skills.documentation.map(s => `
      <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">${s}</span>
    `).join('');
  }

  if (domainContainer && BLOG_DATA.skills.domain) {
    domainContainer.innerHTML = BLOG_DATA.skills.domain.map(s => `
      <span class="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60">${s}</span>
    `).join('');
  }
}

function initLearnings() {
  const techList = document.getElementById('learnings-tech-list');
  const softList = document.getElementById('learnings-soft-list');

  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.learnings) return;

  if (techList && BLOG_DATA.learnings.technical) {
    techList.innerHTML = BLOG_DATA.learnings.technical.map(item => `
      <li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
        <svg class="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>${item}</span>
      </li>
    `).join('');
  }

  if (softList && BLOG_DATA.learnings.softSkills) {
    softList.innerHTML = BLOG_DATA.learnings.softSkills.map(item => `
      <li class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
        <svg class="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>${item}</span>
      </li>
    `).join('');
  }
}

function initChallenges() {
  const container = document.getElementById('challenges-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.challenges) return;

  container.innerHTML = BLOG_DATA.challenges.map((c, idx) => `
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 clean-card space-y-3">
      <div class="flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center font-mono">
          0${idx + 1}
        </span>
        <h4 class="font-bold text-sm text-slate-900 dark:text-white">Kendala & Penanganan Teknis</h4>
      </div>
      
      <div class="space-y-2 text-xs sm:text-sm">
        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
          <span class="font-bold text-slate-500 dark:text-slate-400 block text-[11px] uppercase tracking-wider mb-0.5">Kendala:</span>
          <p class="text-slate-700 dark:text-slate-200">${c.issue}</p>
        </div>

        <div class="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40">
          <span class="font-bold text-brand-blue dark:text-blue-300 block text-[11px] uppercase tracking-wider mb-0.5">Tindakan:</span>
          <p class="text-slate-700 dark:text-slate-200">${c.action}</p>
        </div>

        <div class="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/40">
          <span class="font-bold text-emerald-700 dark:text-emerald-300 block text-[11px] uppercase tracking-wider mb-0.5">Hasil:</span>
          <p class="text-slate-700 dark:text-slate-200">${c.result}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* ========================================================
   7. Logbook Search & Filter
   ======================================================== */
function initSearchAndFilter() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const tabButtons = document.querySelectorAll('#filter-tabs .tab-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.classList.toggle('hidden', searchQuery.length === 0);
      renderPosts();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.classList.add('hidden');
      searchInput.focus();
      renderPosts();
    });
  }

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
      b.className = 'tab-btn px-4 py-1.5 rounded-lg bg-brand-blue text-white shadow-sm transition-all font-semibold text-xs';
    } else {
      b.className = 'tab-btn px-4 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-all font-medium text-xs';
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
   8. Render Logbook Entries Grid
   ======================================================== */
function renderPosts() {
  const container = document.getElementById('posts-container');
  const countBadge = document.getElementById('posts-count-badge');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.posts) return;

  const filtered = BLOG_DATA.posts.filter(post => {
    const matchesCategory = (activeCategory === 'all') ||
      (post.category.toLowerCase() === activeCategory.toLowerCase()) ||
      (post.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase())));

    if (!matchesCategory) return false;

    if (!searchQuery) return true;
    const combinedText = `
      ${post.title} 
      ${post.summary} 
      ${post.category} 
      minggu ${post.week} 
      ${post.tags.join(' ')} 
      ${post.objective || ''}
      ${post.results || ''}
    `.toLowerCase();

    return combinedText.includes(searchQuery);
  });

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${filtered.length} dari ${BLOG_DATA.posts.length} entri logbook`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6">
        <svg class="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <p class="text-sm font-semibold text-slate-800 dark:text-slate-200">Belum ada logbook yang cocok dengan pencarianmu.</p>
        <p class="text-xs text-slate-400 mt-1">Coba gunakan kata kunci lain seperti "testing", "user guide", atau "minggu 1".</p>
        <button onclick="resetFilters()" class="mt-4 px-3.5 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-darkblue transition-colors">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 clean-card flex flex-col justify-between">
      <div>
        <!-- Top Meta -->
        <div class="flex items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-brand-blue text-white text-xs font-bold">
              Minggu ${post.week}
            </span>
            <span class="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200/60 dark:border-slate-700/60">
              ${post.category}
            </span>
          </div>
          <span class="text-xs text-slate-400 font-mono">${post.date}</span>
        </div>

        <!-- Title -->
        <h3 class="font-bold text-base text-slate-900 dark:text-white leading-snug mb-2 hover:text-brand-blue transition-colors">
          <a href="post.html?id=${post.id}">
            ${post.title}
          </a>
        </h3>

        <!-- Summary -->
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
          ${post.summary}
        </p>
      </div>

      <!-- Footer Tags & Link -->
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <div class="flex flex-wrap gap-1.5">
          ${post.tags.slice(0, 2).map(t => `
            <button 
              onclick="filterByTag('${t}')" 
              class="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50/70 dark:bg-blue-950/50 text-brand-blue dark:text-blue-300 hover:bg-blue-100 transition-colors">
              #${t}
            </button>
          `).join('')}
        </div>

        <a href="post.html?id=${post.id}" class="text-xs font-bold text-brand-blue dark:text-blue-400 hover:underline flex items-center gap-1 group">
          <span>Lihat Detail</span>
          <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </article>
  `).join('');
}

/* ========================================================
   9. Activity Documentation Gallery & Modal
   ======================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;

  container.innerHTML = BLOG_DATA.gallery.map((item, idx) => `
    <div 
      onclick="openPhotoModal(${idx})" 
      class="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 clean-card flex flex-col justify-between">
      
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-brand-blue dark:text-blue-300 text-[11px] font-semibold border border-blue-200/60 dark:border-blue-800/60">
            ${item.category}
          </span>
          <span class="text-[11px] text-slate-400 font-mono">${item.date}</span>
        </div>

        <h4 class="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 group-hover:text-brand-blue transition-colors mb-2">
          ${item.title}
        </h4>

        <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          ${item.caption}
        </p>
      </div>

      <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-blue dark:text-blue-400">
        <span>Buka Rincian</span>
        <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </div>
    </div>
  `).join('');
}

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

  const title = document.getElementById('modal-title');
  const caption = document.getElementById('modal-caption');
  const date = document.getElementById('modal-date');
  const counter = document.getElementById('modal-counter');

  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (date) date.textContent = `Tanggal: ${item.date} • Kategori: ${item.category}`;
  if (counter) counter.textContent = `Catatan ${currentPhotoIdx + 1} dari ${BLOG_DATA.gallery.length}`;
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
    if (photoModal && !photoModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closePhotoModal();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  });

  window.addEventListener('click', (e) => {
    const photoModal = document.getElementById('photo-modal');
    if (e.target === photoModal) closePhotoModal();
  });
}

/* ========================================================
   11. Copy URL Toast Feedback
   ======================================================== */
function copyUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("Tautan website berhasil disalin!");
  }).catch(() => {
    showToast("Gagal menyalin tautan.");
  });
}

function showToast(text) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl transition-all duration-200 opacity-0 transform translate-y-2 z-50 pointer-events-none flex items-center gap-2';
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
  }, 2200);
}

