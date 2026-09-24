/**
 * Logbook Magang — I Komang Sunarka
 * PT Laksita Emi Saguna • S1 Ilmu Komputer Undiksha
 */

let activeCategory = 'all';
let searchQuery = '';
let currentPhotoIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initSearchAndFilter();
  initKeyboardNav();
  initBackToTop();
  initInternshipProgress();
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
   2. Mobile Drawer Menu Navigation
   ======================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
  });

  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ========================================================
   3. Search & Filter
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
      b.className = 'tab-btn px-3 py-1.5 rounded-lg bg-brand-blue text-white shadow-sm font-semibold transition-all whitespace-nowrap text-xs';
    } else {
      b.className = 'tab-btn px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-all whitespace-nowrap text-xs';
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
   4. Render Logbook Entries (Responsive Mobile + Desktop)
   ======================================================== */
function renderPosts() {
  const container = document.getElementById('posts-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.posts) return;

  const filtered = BLOG_DATA.posts.filter(post => {
    const matchesCategory = (activeCategory === 'all') ||
      (post.category.toLowerCase().includes(activeCategory.toLowerCase())) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase())));

    if (!matchesCategory) return false;

    if (!searchQuery) return true;
    const combinedText = `
      ${post.title} 
      ${post.summary} 
      ${post.category} 
      minggu ${post.week} 
      ${post.tags ? post.tags.join(' ') : ''} 
    `.toLowerCase();

    return combinedText.includes(searchQuery);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 p-6">
        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Tidak ada logbook yang cocok.</p>
        <button onclick="resetFilters()" class="mt-2 px-3 py-1.5 rounded-md bg-brand-blue text-white text-xs font-medium hover:bg-brand-darkblue transition-colors">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col sm:flex-row items-stretch sm:items-center gap-4 group">
      ${post.image ? `
        <a href="post.html?id=${post.id}" class="block w-full sm:w-44 sm:h-32 h-44 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 relative">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <span class="sm:hidden absolute top-2 left-2 px-2 py-0.5 rounded-md bg-brand-blue/90 backdrop-blur-sm text-white text-[10px] font-bold font-mono">
            Minggu ${post.week}
          </span>
        </a>
      ` : ''}

      <div class="space-y-2 flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] mb-1">
            <span class="hidden sm:inline-block px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-blue-300 font-bold font-mono">
              Minggu ${post.week}
            </span>
            <span class="hidden sm:inline-block text-slate-400">•</span>
            <span class="text-slate-500 dark:text-slate-400 font-mono">${post.date}</span>
            <span class="text-slate-400">•</span>
            <span class="text-slate-600 dark:text-slate-300 font-medium">${post.category}</span>
          </div>

          <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug hover:text-brand-blue transition-colors break-words">
            <a href="post.html?id=${post.id}">
              ${post.title}
            </a>
          </h3>

          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mt-1">
            ${post.summary}
          </p>
        </div>

        <div class="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/80">
          <div class="flex flex-wrap gap-1">
            ${post.tags ? post.tags.slice(0, 3).map(t => `
              <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                #${t}
              </span>
            `).join('') : ''}
          </div>

          <a href="post.html?id=${post.id}" class="w-full sm:w-auto justify-center sm:justify-start px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 flex-shrink-0">
            <span>Baca Selengkapnya</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

/* ========================================================
   5. Gallery & Lightbox Modal
   ======================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;

  container.innerHTML = BLOG_DATA.gallery.map((item, idx) => `
    <div 
      onclick="openPhotoModal(${idx})" 
      class="cursor-pointer p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-3 group">
      
      <div>
        ${item.image ? `
          <div class="overflow-hidden rounded-xl mb-2.5 max-h-36 bg-slate-200 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
            <img src="${item.image}" alt="${item.title}" class="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300">
          </div>
        ` : ''}

        <div class="flex items-center justify-between text-[11px] mb-1">
          <span class="font-bold text-brand-blue dark:text-blue-400">${item.category}</span>
          <span class="text-slate-400 font-mono text-[10px]">${item.date}</span>
        </div>

        <h4 class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors leading-snug">
          ${item.title}
        </h4>

        <p class="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-1 leading-relaxed">
          ${item.caption}
        </p>
      </div>

      <div class="text-[11px] font-semibold text-slate-500 group-hover:text-brand-blue transition-colors flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span>Buka foto & detail</span>
        <span class="group-hover:translate-x-0.5 transition-transform">→</span>
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
  const img = document.getElementById('modal-img');
  const imgContainer = document.getElementById('modal-img-container');

  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (date) date.textContent = `${item.date} • ${item.category}`;
  if (counter) counter.textContent = `${currentPhotoIdx + 1} / ${BLOG_DATA.gallery.length}`;
  
  if (img && imgContainer) {
    if (item.image) {
      img.src = item.image;
      img.alt = item.title;
      imgContainer.classList.remove('hidden');
    } else {
      imgContainer.classList.add('hidden');
    }
  }
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
   6. Internship Dynamic Progress Tracker
   ======================================================== */
function initInternshipProgress() {
  const progressBar = document.getElementById('internship-progress-bar');
  const percentText = document.getElementById('internship-percent-text');
  const statDays = document.getElementById('stat-days');
  const statWeeks = document.getElementById('stat-weeks');
  const statPosts = document.getElementById('stat-posts');
  const statRemaining = document.getElementById('stat-remaining');
  const statusBadge = document.getElementById('internship-status-badge');

  if (!progressBar && !percentText) return;

  const startDate = new Date(2026, 7, 24, 0, 0, 0); // 24 Aug 2026
  const endDate = new Date(2026, 11, 31, 23, 59, 59); // 31 Dec 2026
  const now = new Date();

  const totalTime = endDate.getTime() - startDate.getTime();
  const totalDays = 130;
  const totalWeeks = 19;

  let elapsedDays = 0;
  let percent = 0;
  let currentWeek = 1;
  let remainingDays = totalDays;

  if (now <= startDate) {
    percent = 0;
    elapsedDays = 0;
    currentWeek = 1;
    remainingDays = totalDays;
    if (statusBadge) {
      statusBadge.textContent = 'Persiapan';
      statusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/60';
    }
  } else if (now >= endDate) {
    percent = 100;
    elapsedDays = totalDays;
    currentWeek = totalWeeks;
    remainingDays = 0;
    if (statusBadge) {
      statusBadge.textContent = 'Selesai';
      statusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60';
    }
  } else {
    const elapsedMs = now.getTime() - startDate.getTime();
    elapsedDays = Math.min(totalDays, Math.max(1, Math.floor(elapsedMs / (1000 * 60 * 60 * 24)) + 1));
    remainingDays = Math.max(0, totalDays - elapsedDays);
    percent = Math.min(100, Math.max(0, Math.round((elapsedMs / totalTime) * 100)));
    currentWeek = Math.min(totalWeeks, Math.max(1, Math.ceil(elapsedDays / 7)));
    if (statusBadge) {
      statusBadge.textContent = 'On Progress';
      statusBadge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60';
    }
  }

  if (percentText) percentText.textContent = `${percent}%`;
  if (statDays) statDays.textContent = `${elapsedDays} / ${totalDays} Hari`;
  if (statWeeks) statWeeks.textContent = `Minggu ${currentWeek} / ${totalWeeks}`;
  if (statPosts && typeof BLOG_DATA !== 'undefined' && BLOG_DATA.posts) {
    statPosts.textContent = `${BLOG_DATA.posts.length} Terverifikasi`;
  }
  if (statRemaining) statRemaining.textContent = `${remainingDays} Hari Lagi`;

  // Animate progress bar smoothly
  if (progressBar) {
    setTimeout(() => {
      progressBar.style.width = `${percent}%`;
    }, 200);
  }
}

/* ========================================================
   7. Floating Back to Top & Scroll Progress
   ======================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  const scrollBar = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Top scroll progress bar
    if (scrollBar && docHeight > 0) {
      const progress = (scrollY / docHeight) * 100;
      scrollBar.style.width = `${progress}%`;
    }

    // Back to top button visibility
    if (btn) {
      if (scrollY > 300) {
        btn.classList.remove('hidden-btn');
        btn.classList.add('visible-btn');
      } else {
        btn.classList.remove('visible-btn');
        btn.classList.add('hidden-btn');
      }
    }
  }, { passive: true });

  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ========================================================
   8. Copy URL Feedback Toast
   ======================================================== */
function copyUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("Tautan berhasil disalin!");
  }).catch(() => {
    showToast("Gagal menyalin tautan.");
  });
}

function showToast(text) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-medium px-3.5 py-2 rounded-lg shadow-lg transition-all duration-150 opacity-0 transform translate-y-2 z-50 pointer-events-none flex items-center gap-1.5';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg class="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    <span>${text}</span>
  `;
  toast.classList.remove('opacity-0', 'translate-y-2');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-2');
  }, 2000);
}
