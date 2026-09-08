# 🚀 Website Blog & Logbook Magang Undiksha (S1 Ilmu Komputer)

Website ini dibuat khusus untuk memenuhi tugas dokumentasi mingguan dan pencantuman tautan pada portal **Magang Undiksha** untuk mahasiswa:
- **Nama**: I Komang Sunarka
- **Program Studi**: S1 Ilmu Komputer
- **Fakultas**: Fakultas Teknik dan Kejuruan
- **Universitas**: Universitas Pendidikan Ganesha (Undiksha)

---

## 📂 Struktur File Proyek

```text
d:\blog/
├── index.html               # Halaman utama (Hero, Profil, Logbook, Timeline, Galeri)
├── post.html                # Halaman baca artikel lengkap
├── assets/
│   ├── css/
│   │   └── style.css        # Custom styling & animasi tema gelap/terang
│   └── js/
│       ├── posts-data.js    # Data artikel blog mingguan & konfigurasi profil
│       └── app.js           # Logika interaktif (Search, Filter, Dark Mode, Modal)
└── README.md                # Panduan penggunaan & deployment
```

---

## ✍️ Cara Menambah Postingan Artikel Baru

Untuk menambahkan logbook atau artikel minggu berikutnya, Anda hanya perlu membuka file:
👉 **`assets/js/posts-data.js`**

Tambahkan satu blok data baru di dalam array `BLOG_POSTS`, contoh:

```javascript
{
  id: "minggu-04-pengujian-sistem-uat",
  slug: "minggu-04-pengujian-sistem-uat",
  week: 4,
  title: "Minggu 4: Pengujian Sistem dan User Acceptance Test (UAT)",
  date: "2026-09-18",
  displayDate: "18 September 2026",
  category: "Testing & QA",
  tags: ["Testing", "UAT", "BugFix", "QA"],
  readTime: "5 min read",
  coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
  summary: "Melakukan pengujian fitur bersama pengguna akhir dan memperbaiki temuan bug sebelum rilis versi staging.",
  content: `
    <h3>1. Agenda Pengujian Minggu Ini</h3>
    <p>Tuliskan penjelasan kegiatan Anda di sini...</p>
  `
},
```

---

## 🌐 Cara Deploy & Mendapatkan Link Blog Gratis

Agar link blog bisa dicantumkan di portal **Magang Undiksha**, unggah website ini secara gratis menggunakan salah satu metode di bawah ini:

### 🌟 Opsi A: Deploy ke GitHub Pages (Sangat Direkomendasikan)

1. Buat repository baru di akun GitHub Anda (misal beri nama `blog-magang` atau `logbook-magang`).
2. Di terminal folder `d:\blog`, jalankan:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Blog Magang Undiksha"
   git branch -M main
   git remote add origin https://github.com/USERNAME_GITHUB_ANDA/blog-magang.git
   git push -u origin main
   ```
3. Buka repository GitHub Anda di browser $\rightarrow$ Pilih tab **Settings** $\rightarrow$ Menu **Pages** (di sidebar kiri).
4. Pada bagian **Build and deployment** > **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1-2 menit, Anda akan mendapatkan link website aktif, misalnya:
   `https://USERNAME_GITHUB_ANDA.github.io/blog-magang/`

---

### 🌟 Opsi B: Deploy ke Vercel (Paling Cepat & Otomatis)

1. Buka [https://vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik **Add New...** $\rightarrow$ **Project**.
3. Hubungkan dengan repository `blog-magang` yang telah Anda push, lalu klik **Deploy**.
4. Website akan langsung online dengan domain gratis seperti:
   `https://blog-magang-sunarka.vercel.app`

---

## 📋 Langkah Memasukkan Link ke Portal Magang Undiksha

1. Salin URL website yang sudah online (misal: `https://sunarka.github.io/blog-magang/`).
2. Buka portal [https://magang.undiksha.ac.id/cp/laporan](https://magang.undiksha.ac.id/cp/laporan).
3. Pada baris **Cantumkan Link Blog :**, klik ikon pensil biru ✏️.
4. Tempelkan (*paste*) URL blog Anda, lalu simpan.

