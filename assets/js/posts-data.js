/**
 * DATA PROFIL, LOGBOOK MINGGUAN & DOKUMENTASI FOTO MAGANG
 * Mahasiswa: I Komang Sunarka (NIM: 2315101063)
 * S1 Ilmu Komputer — Universitas Pendidikan Ganesha
 * Tempat Magang: PT Laksita Emi Saguna (Denpasar, Bali)
 */

const BLOG_DATA = {
  author: {
    name: "I Komang Sunarka",
    nim: "2315101063",
    email: "sunarka@student.undiksha.ac.id",
    program: "S1 Ilmu Komputer",
    faculty: "Fakultas Teknik dan Kejuruan",
    university: "Universitas Pendidikan Ganesha",
    avatar: "assets/images/profile.png",
    period: "24 Agustus – 31 Desember 2026",
    company: "PT Laksita Emi Saguna",
    address: "Jalan Himalaya Raya No 8a, Pemecutan Kaja, Denpasar",
    jobdesk: "Software QA Testing & Technical Documentation",
    bio: "Mahasiswa S1 Ilmu Komputer Undiksha yang sedang melaksanakan Program Magang Reguler di PT Laksita Emi Saguna. Bertanggung jawab dalam pengujian fungsional & hak akses web sistem informasi (SIM Keuangan Universitas Mahasaraswati) serta penulisan User Guide sistem kampus."
  },

  // CATATAN LOGBOOK MINGGUAN
  posts: [
    {
      id: "minggu-01-testing-sim-keuangan-unmas",
      week: 1,
      category: "Testing Web",
      title: "Minggu 1: Software QA Testing SIM Keuangan Universitas Mahasaraswati (14 Skenario Pengujian)",
      date: "24 – 28 Agustus 2026",
      readTime: "5 menit baca",
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      summary: "Pelaksanaan pengujian fungsional modul Perencanaan Program & Pengajuan dari 8 role pengguna, penguncian hak akses tingkat/fakultas/prodi, keamanan URL (HTTP 403), dan validasi submit pengajuan pada SIM Keuangan Universitas Mahasaraswati Denpasar.",
      tags: ["SIM Keuangan", "QA Testing", "Role Access", "Security URL"],
      content: `
        <h2>1. Latar Belakang & Ruang Lingkup Pengujian</h2>
        <p>
          Pada minggu pertama pelaksanaan magang di <strong>PT Laksita Emi Saguna</strong>, saya ditugaskan melakukan pengujian fungsional sistem informasi <strong>SIM Keuangan Universitas Mahasaraswati Denpasar</strong> pada modul <em>Perencanaan Program & Pengajuan</em>.
        </p>

        <div class="clean-callout">
          <strong>Fokus Pengujian:</strong> Validasi hak akses pada 8 tingkatan role (Rektor/WR, Staf Univ, Dekan/WD, Staf Fakultas, Koorprodi/Staf Prodi), penambahan program & belanja, pembatasan akses manipulasi URL (HTTP 403 Forbidden), dan alur submit pengajuan.
        </div>

        <h2>2. Rincian 14 Skenario Pengujian (SN-01 s/d SN-14)</h2>
        <p>Berikut adalah hasil dokumentasi pengujian yang telah selesai dieksekusi tanpa galat:</p>

        <ul>
          <li><strong>SN-01:</strong> Berhasil membuka dropdown Tingkatan dengan role Rektor/WR dengan hasil 3 opsi tersedia: Universitas, Fakultas & Prodi.</li>
          <li><strong>SN-02:</strong> Berhasil membuka dropdown Tingkatan dengan role Staff Universitas via URL dengan hasil hanya opsi “Universitas”.</li>
          <li><strong>SN-03:</strong> Berhasil buka dropdown Tingkatan & Fakultas dengan role Dekan/WD dengan hasil Tingkatan berisi “Fakultas” & “Prodi”; Fakultas terkunci otomatis ke fakultas sendiri.</li>
          <li><strong>SN-04:</strong> Berhasil membuka dropdown Tingkatan dengan role Staff Fakultas dengan hasil hanya opsi “Fakultas” (TIDAK ada Prodi); terkunci ke fakultas sendiri.</li>
          <li><strong>SN-05:</strong> Berhasil membuka dropdown Tingkatan, Fakultas, Prodi dengan role Koorprodi/Staff Prodi dengan hasil hanya opsi “Prodi”; Fakultas & Prodi terkunci ke milik sendiri.</li>
          <li><strong>SN-06:</strong> Berhasil membuka detail pos pagu dan menambah Program baru pada Rencana Strategis (RENSTRA UNMAS 2022–2026).</li>
          <li><strong>SN-07:</strong> Berhasil menambahkan Kegiatan & Belanja hingga total nominal sesuai dengan jumlah anggaran program.</li>
          <li><strong>SN-08:</strong> Berhasil melakukan edit dan hapus pada salah satu kegiatan atau rincian item belanja.</li>
          <li><strong>SN-09 (Security):</strong> Pengujian ganti ID pos di URL ke prodi lain menghasilkan status <strong>Ditolak 403</strong> (<em>"Anda hanya bisa mengakses pos pagu di prodi Anda sendiri."</em>).</li>
          <li><strong>SN-10 (Security):</strong> Pengujian ganti ID pos di URL ke Fakultas/prodi lain menghasilkan status <strong>Ditolak 403</strong> (<em>"Anda hanya bisa mengakses pos pagu di Fakultas Anda sendiri."</em>).</li>
          <li><strong>SN-11:</strong> Berhasil memvalidasi daftar penerima review hanya menampilkan Koorprodi prodi aktif + Dekan/WD fakultasnya (bukan koorprodi dari prodi lain).</li>
          <li><strong>SN-12:</strong> Berhasil menampilkan daftar penerima review mencakup jabatan tingkat universitas untuk opsi naik tingkat pengajuan.</li>
          <li><strong>SN-13:</strong> Berhasil menampilkan daftar pejabat tingkat universitas (termasuk kepala unit/LPPM/LPMI), lengkap dengan format nama + jabatan + unit.</li>
          <li><strong>SN-14:</strong> Berhasil melakukan submit pengajuan sehingga status pos pagu berubah menjadi <strong>"Menunggu"</strong> tanpa terjadi galat sistem.</li>
        </ul>

        <h2>3. Kesimpulan</h2>
        <p>
          Seluruh 14 skenario pengujian berhasil lolos verifikasi dan sistem telah berjalan sesuai dengan aturan bisnis penganggaran Universitas Mahasaraswati.
        </p>
      `
    },
    {
      id: "minggu-02-user-guide-feeder-sim-prestasi",
      week: 2,
      category: "User Guide",
      title: "Minggu 2: Pembuatan User Guide Sistem Feeder PDDIKTI, SIM Prestasi & Konseling",
      date: "31 Agustus – 4 September 2026",
      readTime: "4 menit baca",
      cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      summary: "Menyusun dokumentasi teknis panduan penggunaan (User Guide) lengkap dengan tangkapan layar panduan langkah demi langkah untuk Sistem Feeder PDDIKTI, SIM Prestasi, dan Sistem Konseling.",
      tags: ["User Guide", "Technical Writing", "Feeder PDDIKTI"],
      content: `
        <h2>Rangkuman Aktivitas Minggu Ke-2</h2>
        <p>
          Melanjutkan tugas dari pembimbing lapangan, minggu kedua difokuskan pada penulisan dan perancangan dokumen <em>User Guide</em> panduan pengguna sistem informasi kampus.
        </p>

        <h3>Rincian Aktivitas Harian</h3>
        <ul>
          <li><strong>Senin (31 Agt):</strong> WFH pembuatan draf User Guide untuk <strong>Sistem Feeder PDDIKTI</strong> dan modul <strong>SIM Prestasi</strong>.</li>
          <li><strong>Selasa (1 Sep):</strong> Menyusun panduan visual dan tangkapan layar alur pengajuan data prestasi mahasiswa.</li>
          <li><strong>Rabu (2 Sep):</strong> Dokumentasi panduan alur pendaftaran sesi <strong>Sistem Konseling</strong> dan penetapan dosen konselor.</li>
          <li><strong>Kamis (3 Sep):</strong> Menggabungkan dan merapikan seluruh bab User Guide menjadi dokumen panduan siap uji.</li>
        </ul>

        <div class="clean-callout">
          <strong>Pencapaian:</strong> Dokumen User Guide tersusun rapi dengan daftar isi, instruksi tombol, dan penanganan pesan error sistem.
        </div>
      `
    },
    {
      id: "minggu-03-review-user-guide-konseling",
      week: 3,
      category: "User Guide",
      title: "Minggu 3: Review dan Penyempurnaan Panduan SIM Prestasi & Sistem Konseling",
      date: "7 – 11 September 2026",
      readTime: "3 menit baca",
      cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      summary: "Melakukan penyesuaian isi User Guide berdasarkan evaluasi alur pengguna sistem konseling dan penyiapan berkas pelaporan.",
      tags: ["User Guide", "Review", "Sistem Konseling"],
      content: `
        <h2>Rangkuman Aktivitas Minggu Ke-3</h2>
        <p>
          Pada minggu ketiga, aktivitas berfokus pada penyempurnaan istilah teknis dan penyesuaian format dokumen <em>User Guide</em> SIM Prestasi & Sistem Konseling.
        </p>

        <h3>Rincian Aktivitas Harian</h3>
        <ul>
          <li><strong>Senin (7 Sep):</strong> Revisi bab tata cara pendaftaran konseling dan alur validasi berkas portofolio prestasi.</li>
          <li><strong>Selasa (8 Sep):</strong> Evaluasi kesesuaian hak akses pengguna pada dokumen panduan bersama mentor lapangan.</li>
        </ul>

        <div class="clean-callout">
          <strong>Rencana Selanjutnya:</strong> Finalisasi berkas User Guide dan persiapan pengujian modul berikutnya.
        </div>
      `
    }
  ],

  // DOKUMENTASI FOTO DI TEMPAT MAGANG (PT LAKSITA EMI SAGUNA)
  gallery: [
    {
      id: 1,
      title: "Testing Web SIM Keuangan Unmas (14 Skenario)",
      category: "QA Testing",
      date: "26 Agustus 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      caption: "Pelaksanaan pengujian 14 skenario hak akses role dan keamanan URL pada SIM Keuangan Universitas Mahasaraswati."
    },
    {
      id: 2,
      title: "Penyusunan Dokumen User Guide Sistem",
      category: "Dokumentasi",
      date: "31 Agustus 2026",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      caption: "Menyusun draf panduan penggunaan modul SIM Prestasi dan Sistem Feeder PDDIKTI."
    },
    {
      id: 3,
      title: "Kantor & Meja Kerja PT Laksita Emi Saguna",
      category: "Lingkungan Kantor",
      date: "3 September 2026",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      caption: "Suasana kantor PT Laksita Emi Saguna di Jalan Himalaya Raya No 8a, Pemecutan Kaja, Denpasar."
    },
    {
      id: 4,
      title: "Sesi Koordinasi & Review Hasil Pengujian",
      category: "Mentoring",
      date: "8 September 2026",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      caption: "Sesi evaluasi hasil testing SIM Keuangan dan draf User Guide bersama mentor pembimbing lapangan."
    }
  ]
};
