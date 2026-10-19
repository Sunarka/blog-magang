/**
 * DATA PROFIL, LOGBOOK MINGGUAN & DOKUMENTASI KEGIATAN MAGANG
 * Mahasiswa: I Komang Sunarka (NIM: 2315101063)
 * Program Studi: S1 Ilmu Komputer — Universitas Pendidikan Ganesha (Undiksha)
 * Tempat Magang: PT Laksita Emi Saguna (Denpasar, Bali)
 * Periode: 24 Agustus – 31 Desember 2026
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
    address: "Jl. Himalaya Raya No 8a, Pemecutan Kaja, Denpasar, Bali",
    jobdesk: "Web Testing & Technical Documentation",
    githubRepo: "https://github.com/Sunarka/blog-magang",
    liveUrl: "https://sunarka.github.io/blog-magang/",
    bio: "Mahasiswa S1 Ilmu Komputer Universitas Pendidikan Ganesha (Undiksha) yang sedang melaksanakan Program Magang Reguler di PT Laksita Emi Saguna, Denpasar. Fokus pada Software Quality Assurance (QA) Testing web sistem informasi (SIM Keuangan Universitas Mahasaraswati Denpasar), penulisan User Guide sistem perguruan tinggi (Feeder PDDIKTI, SIM Prestasi, dan Sistem Konseling), serta dokumentasi teknis sistem."
  },

  // Fokus Pekerjaan Utama
  workFocus: [
    {
      badge: "Web Testing",
      title: "QA Testing SIM Keuangan",
      desc: "Pengujian fungsional modul Perencanaan & Pengajuan Anggaran, validasi hak akses 8 role pengguna, dan uji celah keamanan manipulasi URL (HTTP 403 Forbidden)."
    },
    {
      badge: "User Guide",
      title: "Panduan Pengguna Sistem",
      desc: "Penyusunan dokumentasi teknis panduan penggunaan sistem (Feeder PDDIKTI, SIM Prestasi Mahasiswa, dan Sistem Konseling Kampus) secara aplikatif."
    },
    {
      badge: "Documentation",
      title: "Technical Documentation & Review",
      desc: "Penyusunan matriks skenario pengujian, audit dokumentasi operasional, bug reporting, serta evaluasi alur pengguna bersama mentor lapangan."
    }
  ],

  // Kategori Skill & Tools
  skills: {
    technical: [
      "Web Testing & QA",
      "Black Box Testing",
      "Test Scenarios & Matrices",
      "HTML / CSS / JavaScript",
      "Python",
      "C++",
      "Git & GitHub"
    ],
    documentation: [
      "User Guide Drafting",
      "Technical Documentation",
      "Role Access Matrices",
      "Functional Flowcharts",
      "Bug Reporting & QA Review"
    ],
    domain: [
      "SIM Keuangan UNMAS",
      "Sistem Feeder PDDIKTI",
      "SIM Prestasi Mahasiswa",
      "Sistem Konseling Kampus",
      "Web-based Academic Systems"
    ]
  },

  // DAFTAR POSTINGAN LOGBOOK RESMI
  posts: [
    {
      id: "minggu-01-testing-sim-keuangan-unmas",
      week: 1,
      category: "Testing Web",
      title: "Minggu 1: Software QA Testing SIM Keuangan UNMAS (14 Skenario Pengujian)",
      date: "24 – 28 Agustus 2026",
      status: "Selesai",
      tag: "QA Testing",
      tags: ["QA Testing", "SIM Keuangan", "Black Box", "Role Access", "Security URL"],
      image: "assets/images/testing-simkeu.svg",
      summary: "Pelaksanaan pengujian fungsional modul Perencanaan Program & Pengajuan dari 8 role pengguna, penguncian hak akses tingkat/fakultas/prodi, keamanan URL (HTTP 403), dan validasi submit pengajuan pada SIM Keuangan Universitas Mahasaraswati Denpasar.",
      objective: "Melakukan pengujian fungsional dan validasi hak akses 8 tingkatan role pengguna pada modul Perencanaan Program & Pengajuan SIM Keuangan Universitas Mahasaraswati Denpasar.",
      tasks: [
        "Analisis alur bisnis modul Perencanaan Program & Pengajuan dana kampus.",
        "Pengujian akses dropdown Tingkatan dan Fakultas pada 8 tingkatan role pengguna.",
        "Validasi fitur penambahan Program Renstra dan item rincian belanja.",
        "Pengujian celah keamanan manipulasi ID pos pagu via URL (validasi respon HTTP 403 Forbidden).",
        "Validasi daftar pejabat verifikator dan eksekusi submit pengajuan anggaran."
      ],
      testing: [
        { code: "SN-01", role: "Rektor / WR", action: "Buka dropdown Tingkatan", expected: "Tersedia 3 opsi: Universitas, Fakultas & Prodi", status: "Passed" },
        { code: "SN-02", role: "Staf Univ", action: "Buka dropdown Tingkatan via URL", expected: "Hanya muncul opsi 'Universitas'", status: "Passed" },
        { code: "SN-03", role: "Dekan / WD", action: "Buka dropdown Tingkatan & Fakultas", expected: "Tingkatan 'Fakultas' & 'Prodi', fakultas terkunci otomatis", status: "Passed" },
        { code: "SN-04", role: "Staf Fakultas", action: "Buka dropdown Tingkatan", expected: "Hanya opsi 'Fakultas' (tidak ada prodi), fakultas terkunci", status: "Passed" },
        { code: "SN-05", role: "Koorprodi", action: "Buka dropdown Tingkatan, Fakultas, Prodi", expected: "Hanya opsi 'Prodi', fakultas & prodi terkunci", status: "Passed" },
        { code: "SN-06", role: "Koorprodi", action: "Buka pos pagu & tambah Program Renstra 2022-2026", expected: "Program berhasil tersimpan ke database", status: "Passed" },
        { code: "SN-07", role: "Koorprodi", action: "Tambah Kegiatan & Belanja hingga total pagu", expected: "Kalkulasi total nominal sesuai alokasi", status: "Passed" },
        { code: "SN-08", role: "Koorprodi", action: "Edit dan hapus rincian item belanja", expected: "Data terhapus dan pagu terhitung ulang", status: "Passed" },
        { code: "SN-09", role: "Semua Role", action: "Manipulasi ID pos di URL ke prodi lain", expected: "Ditolak sistem dengan HTTP 403 Forbidden", status: "Passed" },
        { code: "SN-10", role: "Semua Role", action: "Manipulasi ID pos di URL ke fakultas lain", expected: "Ditolak sistem dengan HTTP 403 Forbidden", status: "Passed" },
        { code: "SN-11", role: "Koorprodi", action: "Validasi daftar penerima review pengajuan", expected: "Hanya tampil Koorprodi aktif + Dekan/WD sendiri", status: "Passed" },
        { code: "SN-12", role: "Dekan", action: "Tampilkan opsi naik tingkat pengajuan universitas", expected: "Daftar penerima mencakup pejabat universitas", status: "Passed" },
        { code: "SN-13", role: "Dekan", action: "Validasi format nama pejabat universitas (LPPM/LPMI)", expected: "Format Nama + Jabatan + Unit tampil lengkap", status: "Passed" },
        { code: "SN-14", role: "Koorprodi", action: "Submit pengajuan anggaran", expected: "Status pos pagu berubah menjadi 'Menunggu'", status: "Passed" }
      ],
      results: "Seluruh 14 skenario pengujian berhasil lolos verifikasi (100% Passed) tanpa kendala fungsional maupun celah keamanan hak akses.",
      challenges: "Perlu memvalidasi respon penolakan sistem terhadap upaya manipulasi parameter URL (HTTP 403) agar pengguna tidak dapat melompati batasan wewenang antar prodi/fakultas.",
      solutions: "Melakukan pengujian parameter URL secara teliti pada setiap role serta berkoordinasi langsung dengan tim pengembang saat verifikasi perilaku sistem.",
      learnings: "Memahami standar pengujian sistem enterprise berskala kampus dan pentingnya verifikasi hak akses role di sisi server (backend enforcement).",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/testing-simkeu.svg" alt="Pengujian SIM Keuangan UNMAS" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Pada minggu pertama pelaksanaan kegiatan magang di <strong>PT Laksita Emi Saguna</strong>, saya ditugaskan untuk melakukan pengujian fungsional sistem informasi <strong>SIM Keuangan Universitas Mahasaraswati Denpasar</strong>, khususnya pada modul <em>Perencanaan Program & Pengajuan Anggaran</em>.
          </p>

          <p class="leading-relaxed text-justify">
            Pengujian ini berfokus pada validasi pembatasan wewenang (role-based access control) pada 8 tingkatan pengguna: Rektor/Wakil Rektor, Staf Universitas, Dekan/Wakil Dekan, Staf Fakultas, hingga Koorprodi dan Staf Program Studi. Setiap tingkatan role memiliki wewenang anggaran yang berbeda, sehingga sistem harus mampu mengunci dropdown pilihan sesuai identitas pengguna yang sedang login.
          </p>

          <p class="leading-relaxed text-justify">
            Selain pengujian fungsional formulir penambahan program dan item belanja, pengujian aspek keamanan juga dilakukan dengan mencoba mengubah parameter ID pos pagu secara langsung melalui URL (manipulasi parameter HTTP). Hasil pengujian membuktikan bahwa sistem keamanan telah terkonfigurasi dengan baik dengan mengembalikan respon <strong>HTTP 403 Forbidden</strong> ketika terjadi upaya akses di luar wewenang unit kerja pengguna.
          </p>

          <p class="leading-relaxed text-justify">
            Seluruh 14 skenario pengujian (SN-01 s/d SN-14) berhasil diselesaikan dengan status <strong>Passed</strong> dan dicatat secara sistematis sebagai bahan dokumentasi jaminan mutu perangkat lunak.
          </p>
        </div>
      `
    },
    {
      id: "minggu-02-user-guide-feeder-pddikti-sim-prestasi",
      week: 2,
      category: "User Guide",
      title: "Minggu 2: Pembuatan User Guide Sistem Feeder PDDIKTI, SIM Prestasi & Konseling",
      date: "31 Agustus – 04 September 2026",
      status: "Selesai",
      tag: "User Guide",
      tags: ["User Guide", "Technical Writing", "Feeder PDDIKTI", "SIM Prestasi", "Konseling"],
      image: "assets/images/user-guide-feeder.svg",
      summary: "Menyusun dokumentasi teknis panduan penggunaan (User Guide) lengkap dengan petunjuk langkah demi langkah untuk Sistem Feeder PDDIKTI, modul SIM Prestasi mahasiswa, dan Sistem Konseling kampus.",
      objective: "Menyusun panduan pengguna (User Guide) yang aplikatif dan mudah dipahami untuk memandu operasional Sistem Feeder PDDIKTI, SIM Prestasi, dan Sistem Konseling.",
      tasks: [
        "Penyusunan draf instruksi kerja modul sinkronisasi Sistem Feeder PDDIKTI.",
        "Pembuatan panduan langkah demi langkah pengajuan portofolio SIM Prestasi mahasiswa.",
        "Dokumentasi alur pendaftaran sesi Sistem Konseling dan penetapan dosen konselor.",
        "Penyusunan daftar istilah, penanganan pesan galat (error handling), dan kompilasi naskah panduan."
      ],
      results: "Tersusun draf komprehensif User Guide untuk 3 modul sistem yang siap di-review oleh mentor lapangan.",
      challenges: "Menyederhanakan alur sinkronisasi data PDDIKTI yang teknis agar mudah dipahami oleh operator akademik.",
      solutions: "Menyertakan bagan alur kerja dan petunjuk visual berupa panduan terstruktur dengan penomoran langkah yang sistematis.",
      learnings: "Penulisan teknis membutuhkan kejelasan bahasa, konsistensi terminologi, dan empati terhadap pemahaman pengguna akhir.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/user-guide-feeder.svg" alt="Penyusunan User Guide Feeder PDDIKTI & SIM Prestasi" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Melanjutkan tugas dari pembimbing lapangan pada minggu kedua, fokus kegiatan beralih pada perancangan dokumen <em>Panduan Pengguna (User Guide)</em> untuk tiga modul sistem informasi kampus: <strong>Sistem Feeder PDDIKTI</strong>, <strong>SIM Prestasi Mahasiswa</strong>, dan <strong>Sistem Konseling</strong>.
          </p>

          <p class="leading-relaxed text-justify">
            Dokumentasi ini dirancang agar operator kampus dan civitas akademika dapat mengoperasikan sistem secara mandiri tanpa mengalami kendala teknis. Pada modul Feeder PDDIKTI, panduan merinci tata cara persiapan data semester, proses inisiasi sinkronisasi, hingga pembacaan log status kirim data.
          </p>

          <p class="leading-relaxed text-justify">
            Sementara pada SIM Prestasi dan Sistem Konseling, dokumen menjelaskan alur pengunggahan sertifikat prestasi mahasiswa, proses kurasi poin oleh tim prodi, serta mekanisme pendaftaran sesi konseling bersama dosen konselor.
          </p>
        </div>
      `
    },
    {
      id: "minggu-03-review-user-guide-sim-prestasi-konseling",
      week: 3,
      category: "User Guide",
      title: "Minggu 3: Review dan Penyempurnaan Panduan SIM Prestasi & Sistem Konseling",
      date: "07 – 11 September 2026",
      status: "Selesai",
      tag: "Review & Revisi",
      tags: ["User Guide", "Review", "Sistem Konseling", "SIM Prestasi", "Quality Review"],
      image: "assets/images/user-guide-review.svg",
      summary: "Melakukan penyesuaian isi User Guide berdasarkan evaluasi alur pengguna sistem konseling, validasi batasan role konselor, dan penyiapan berkas pelaporan akhir.",
      objective: "Menyempurnakan dokumen User Guide SIM Prestasi & Sistem Konseling berdasarkan masukan review pembimbing lapangan.",
      tasks: [
        "Revisi bab tata cara pengajuan konseling dan validasi berkas portofolio prestasi mahasiswa.",
        "Sinkronisasi batasan hak akses antara konselor, mahasiswa, dan operator program studi.",
        "Pemeriksaan konsistensi format dokumen, tipografi, dan penomoran bab panduan.",
        "Sesi review berkala dan evaluasi kemajuan dokumen bersama mentor pembimbing lapangan."
      ],
      results: "Dokumen User Guide berhasil disempurnakan dan disetujui untuk digunakan sebagai panduan resmi.",
      challenges: "Memastikan seluruh skenario penggunaan khusus (edge cases) telah tercover dalam panduan penyelesaian masalah.",
      solutions: "Menambahkan bagian FAQ (Frequently Asked Questions) dan solusi cepat saat sistem mengalami kendala pengisian formulir.",
      learnings: "Proses review dan iterasi sangat krusial dalam menghasilkan dokumentasi teknis yang reliabel dan siap pakai.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/user-guide-review.svg" alt="Review dan Penyempurnaan Panduan Pengguna" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Pada minggu ketiga, aktivitas difokuskan pada penelaahan kembali (quality review) dan penyempurnaan dokumen panduan pengguna yang telah disusun pada minggu sebelumnya.
          </p>

          <p class="leading-relaxed text-justify">
            Berdasarkan sesi evaluasi bersama pembimbing lapangan di PT Laksita Emi Saguna, dilakukan penyesuaian beberapa istilah teknis serta perbaikan alur penugasan konselor pada Sistem Konseling. Langkah ini bertujuan agar instruksi kerja tidak menimbulkan kerancuan hak akses bagi pihak fakultas maupun program studi.
          </p>

          <p class="leading-relaxed text-justify">
            Dengan tuntasnya tahap revisi ini, berkas User Guide SIM Prestasi dan Sistem Konseling dinyatakan memenuhi standar dokumentasi operasional dan siap dijadikan materi sosialisasi pengguna.
          </p>
        </div>
      `
    },
    {
      id: "minggu-04-evaluasi-integrasi-dan-verifikasi-fitur",
      week: 4,
      category: "Testing Web",
      title: "Minggu 4: Evaluasi Alur Integrasi Sistem & Verifikasi Fungsionalitas Modul",
      date: "14 – 18 September 2026",
      status: "Selesai",
      tag: "Verifikasi Modul",
      tags: ["Testing Web", "Integrasi Sistem", "Verifikasi Fitur", "Data Flow"],
      image: "assets/images/evaluasi-integrasi.svg",
      summary: "Melakukan verifikasi integrasi antarmuka dan konsistensi data antara modul penganggaran dan modul pelaporan operasional kampus di PT Laksita Emi Saguna.",
      objective: "Memastikan kesinambungan data dan validitas integrasi fitur antar modul yang telah dikembangkan.",
      tasks: [
        "Uji coba alur perpindahan data antar halaman dan modul sistem.",
        "Pencatatan temuan inkonsistensi label formulir dan perilaku tombol navigasi.",
        "Verifikasi ulang skenario pengujian pasca perbaikan bug oleh tim pengembang.",
        "Penyusunan laporan ringkasan hasil pengujian berkala."
      ],
      results: "Alur integrasi modul terverifikasi berjalan lancar dan seluruh feedback perbaikan tercatat dengan rapi.",
      challenges: "Melacak dependensi antar modul yang kompleks saat data master mengalami perubahan.",
      solutions: "Membuat checklist pengujian regresi untuk memverifikasi modul terdampak secara sistematis.",
      learnings: "Pengujian regresi (regression testing) sangat penting dilakukan setelah developer melakukan perbaikan bug.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/evaluasi-integrasi.svg" alt="Evaluasi Integrasi Sistem & Verifikasi Modul" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Memasuki minggu keempat, kegiatan magang difokuskan pada pengujian integrasi alur data antar modul yang saling terhubung. Setelah tahap pengujian unit dan formulir selesai, pengujian menyeluruh (end-to-end flow) diperlukan untuk memastikan tidak terjadi anomali saat data berpindah dari modul perencanaan menuju modul belanja dan pengesahan.
          </p>

          <p class="leading-relaxed text-justify">
            Aktivitas pengujian mencakup verifikasi konsistensi nominal pagu anggaran yang tampil pada ringkasan dashboard, keakuratan notifikasi status pengajuan, serta memastikan bahwa data transaksi tercatat dengan lengkap pada riwayat audit sistem.
          </p>
        </div>
      `
    }
  ],

  // DOKUMENTASI KEGIATAN & ARSIP DOKUMENTASI MAGANG
  gallery: [
    {
      id: 1,
      title: "QA Testing SIM Keuangan UNMAS (14 Skenario)",
      category: "QA Testing",
      date: "24 – 28 Agustus 2026",
      image: "assets/images/testing-simkeu.svg",
      caption: "Pelaksanaan 14 skenario pengujian fungsional modul Perencanaan & Pengajuan Anggaran serta validasi hak akses 8 tingkatan role pengguna."
    },
    {
      id: 2,
      title: "Penyusunan User Guide Feeder PDDIKTI & SIM Prestasi",
      category: "User Guide",
      date: "31 Agustus – 04 September 2026",
      image: "assets/images/user-guide-feeder.svg",
      caption: "Dokumentasi teknis User Guide untuk modul sinkronisasi Feeder PDDIKTI, pengajuan SIM Prestasi mahasiswa, dan Sistem Konseling."
    },
    {
      id: 3,
      title: "Quality Review Panduan Pengguna & Alur Konseling",
      category: "Review & Revisi",
      date: "07 – 11 September 2026",
      image: "assets/images/user-guide-review.svg",
      caption: "Sesi evaluasi dan penyempurnaan naskah panduan pengguna bersama pembimbing lapangan di PT Laksita Emi Saguna."
    },
    {
      id: 4,
      title: "Evaluasi Integrasi Modul & Verifikasi Alur Fungsional",
      category: "Verifikasi Modul",
      date: "14 – 18 September 2026",
      image: "assets/images/evaluasi-integrasi.svg",
      caption: "Pengujian integrasi antar halaman, konsistensi data anggaran, dan verifikasi status submit pengajuan sistem."
    }
  ]
};
