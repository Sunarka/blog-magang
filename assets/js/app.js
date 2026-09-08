/**
 * Script Portofolio & Logbook Magang
 * Clean & Modern Sandhika Galih Style
 * I Komang Sunarka — PT Laksita Emi Saguna
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBanner();
  initFilterTabs();
  renderPosts();
  renderGallery();
});

/* Dark / Light Theme Toggle */
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

/* Populate Banner Data */
function initBanner() {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.author) return;

  const instansiText = document.getElementById('instansi-text');
  const alamatText = document.getElementById('alamat-text');
  const jobdeskText = document.getElementById('jobdesk-text');

  if (instansiText) instansiText.textContent = BLOG_DATA.author.company;
  if (alamatText) alamatText.textContent = BLOG_DATA.author.address;
  if (jobdeskText) jobdeskText.textContent = BLOG_DATA.author.jobdesk;
}

/* Filter Tabs */
let activeFilter = 'all';

function initFilterTabs() {
  const tabButtons = document.querySelectorAll('#filter-tabs .tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;

      // Update button active styles
      tabButtons.forEach(b => {
        b.className = 'tab-btn px-4 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-brand-blue transition-all';
      });
      btn.className = 'tab-btn px-4 py-1.5 rounded-lg bg-brand-blue text-white shadow-sm transition-all';

      renderPosts();
    });
  });
}

/* Render Logbook Posts Grid */
function renderPosts() {
  const container = document.getElementById('posts-container');
  if (!container || typeof BLOG_DATA === 'undefined' || !BLOG_DATA.posts) return;

  const filtered = BLOG_DATA.posts.filter(post => {
    if (activeFilter === 'all') return true;
    return post.category.toLowerCase() === activeFilter.toLowerCase() ||
           post.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 text-center text-xs text-slate-400">
        Belum ada catatan logbook pada kategori ini.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <article class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm clean-card flex flex-col justify-between">
      
      <div>
        <!-- Cover Thumbnail -->
        <a href="post.html?id=${post.id}" class="block relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <img 
            src="${post.cover}" 
            alt="${post.title}" 
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
          <span class="absolute top-2.5 left-2.5 bg-brand-blue text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-sm">
            Minggu ${post.week}
          </span>
          <span class="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-0.5 rounded">
            ${post.category}
          </span>
        </a>

        <!-- Content -->
        <div class="p-5">
          <div class="text-[11px] text-slate-400 font-medium mb-2">
            <span>${post.date}</span>
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
      <div class="px-5 pb-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2 pt-3 flex items-center justify-between">
        <div class="flex flex-wrap gap-1">
          ${post.tags.slice(0, 2).map(t => `<span class="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-brand-blue dark:text-blue-300">#${t}</span>`).join('')}
        </div>

        <a href="post.html?id=${post.id}" class="text-xs font-bold text-brand-blue dark:text-blue-400 hover:underline flex items-center gap-1">
          <span>Baca Detail</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>

    </article>
  `).join('');
}

/* Render Photo Gallery Grid */
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

/* Lightbox Modal Functions */
function openPhotoModal(idx) {
  if (typeof BLOG_DATA === 'undefined' || !BLOG_DATA.gallery) return;
  const item = BLOG_DATA.gallery[idx];
  const modal = document.getElementById('photo-modal');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const caption = document.getElementById('modal-caption');
  const date = document.getElementById('modal-date');

  if (modal && img && title && caption && item) {
    img.src = item.image;
    title.textContent = item.title;
    caption.textContent = item.caption;
    date.textContent = `Tanggal: ${item.date} • Kategori: ${item.category}`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closePhotoModal() {
  const modal = document.getElementById('photo-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('photo-modal');
  if (e.target === modal) {
    closePhotoModal();
  }
});

/* Copy URL Toast */
function copyUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast("Link blog berhasil disalin!");
  }).catch(() => {
    showToast("Gagal menyalin link.");
  });
}

function showToast(text) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 right-5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl transition-all duration-200 opacity-0 transform translate-y-2 z-50 pointer-events-none';
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.classList.remove('opacity-0', 'translate-y-2');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-2');
  }, 2200);
}
