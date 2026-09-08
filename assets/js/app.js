/**
 * Script Portofolio & Logbook Magang
 * Clean, Modern & Interactive
 * I Komang Sunarka — PT Laksita Emi Saguna
 */

let activeCategory = 'all';
let searchQuery = '';
let currentPhotoIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBanner();
  initScrollProgress();
  initBackToTop();
  initSearchAndFilter();
  initTimeline();
  initKeyboardNav();
  renderPosts();
  renderGallery();
});

/* ========================================================
   1. Dark / Light Theme Toggle
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

  container.innerHTML = filtered.map(post => `
    <article class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm clean-card flex flex-col justify-between animate-fade-in-up">
      
      <div>
        <!-- Cover Thumbnail -->
        <a href="post.html?id=${post.id}" class="block relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden group">
          <img 
            src="${post.cover}" 
            alt="${post.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <span class="absolute top-2.5 left-2.5 bg-brand-blue text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-sm">
            Minggu ${post.week}
          </span>
          <span class="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded">
            ${post.category}
          </span>
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
  `).join('');
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

    <div class="rounded-xl overflow-hidden mb-5 aspect-video bg-slate-100 dark:bg-slate-800">
      <img src="${post.cover}" alt="${post.title}" class="w-full h-full object-cover">
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
   8. Render Photo Gallery Grid
   ======================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;

  container.innerHTML = BLOG_DATA.gallery.map((item, idx) => `
    <div 
      onclick="openPhotoModal(${idx})" 
      class="group cursor-pointer bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 clean-card shadow-sm">
      <div class="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <span class="absolute top-2 left-2 bg-brand-blue text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
          ${item.category}
        </span>
        <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span class="p-2 rounded-full bg-white/90 text-slate-900 shadow">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
          </span>
        </div>
      </div>
      <div class="p-3">
        <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100 line-clamp-1 group-hover:text-brand-blue transition-colors">
          ${item.title}
        </h4>
        <p class="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
          ${item.caption}
        </p>
      </div>
    </div>
  `).join('');
}

/* ========================================================
   9. Photo Modal & Carousel Navigation
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

  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const caption = document.getElementById('modal-caption');
  const date = document.getElementById('modal-date');
  const counter = document.getElementById('modal-counter');

  if (img) img.src = item.image;
  if (title) title.textContent = item.title;
  if (caption) caption.textContent = item.caption;
  if (date) date.textContent = `Tanggal: ${item.date} • Kategori: ${item.category}`;
  if (counter) counter.textContent = `Foto ${currentPhotoIdx + 1} dari ${BLOG_DATA.gallery.length}`;
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

