/**
 * Logbook Magang — I Komang Sunarka
 * PT Laksita Emi Saguna • S1 Ilmu Komputer Undiksha
 */

let activeCategory = 'all';
let searchQuery = '';
let currentPhotoIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
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
   2. Search & Filter
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
      b.className = 'tab-btn px-3 py-1 rounded-lg bg-brand-blue text-white shadow-sm font-semibold transition-all text-xs';
    } else {
      b.className = 'tab-btn px-3 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-all text-xs';
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
   3. Render Logbook Entries (Clean Human Card Style)
   ======================================================== */
function renderPosts() {
  const container = document.getElementById('posts-container');
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
    `.toLowerCase();

    return combinedText.includes(searchQuery);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-8 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 p-6">
        <p class="text-xs font-semibold text-slate-700 dark:text-slate-300">Tidak ada logbook yang cocok.</p>
        <button onclick="resetFilters()" class="mt-2 px-3 py-1 rounded-md bg-brand-blue text-white text-xs font-medium hover:bg-brand-darkblue transition-colors">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-1.5 flex-1">
        <div class="flex items-center gap-2 text-[11px]">
          <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/80 text-brand-blue dark:text-blue-300 font-bold font-mono">
            Minggu ${post.week}
          </span>
          <span class="text-slate-400">•</span>
          <span class="text-slate-500 dark:text-slate-400 font-mono">${post.date}</span>
          <span class="text-slate-400">•</span>
          <span class="text-slate-600 dark:text-slate-300 font-medium">${post.category}</span>
        </div>

        <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug hover:text-brand-blue transition-colors">
          <a href="post.html?id=${post.id}">
            ${post.title}
          </a>
        </h3>

        <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
          ${post.summary}
        </p>

        <div class="flex flex-wrap gap-1 pt-1">
          ${post.tags.map(t => `
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              #${t}
            </span>
          `).join('')}
        </div>
      </div>

      <a href="post.html?id=${post.id}" class="self-end sm:self-center px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1 flex-shrink-0">
        <span>Baca Detail</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </a>
    </article>
  `).join('');
}

/* ========================================================
   4. Gallery & Modal
   ======================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;

  container.innerHTML = BLOG_DATA.gallery.map((item, idx) => `
    <div 
      onclick="openPhotoModal(${idx})" 
      class="cursor-pointer p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between space-y-2 group">
      
      <div>
        <div class="flex items-center justify-between text-[11px] mb-1">
          <span class="font-bold text-brand-blue dark:text-blue-400">${item.category}</span>
          <span class="text-slate-400 font-mono text-[10px]">${item.date}</span>
        </div>

        <h4 class="font-bold text-xs text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
          ${item.title}
        </h4>

        <p class="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-1 leading-relaxed">
          ${item.caption}
        </p>
      </div>

      <div class="text-[11px] font-semibold text-slate-500 group-hover:text-brand-blue transition-colors flex items-center gap-1 pt-1">
        <span>Buka catatan</span>
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

  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (date) date.textContent = `${item.date} • ${item.category}`;
  if (counter) counter.textContent = `${currentPhotoIdx + 1} / ${BLOG_DATA.gallery.length}`;
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
   5. Copy URL
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
