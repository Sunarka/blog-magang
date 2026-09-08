/**
 * DATA PROFIL, LOGBOOK MINGGUAN & DOKUMENTASI FOTO MAGANG
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
    startDate: "2026-08-24",
    endDate: "2026-12-31",
    period: "24 Agustus – 31 Desember 2026",
    company: "PT Laksita Emi Saguna",
    address: "Jl. Himalaya Raya No 8a, Pemecutan Kaja, Denpasar, Bali",
    jobdesk: "Software QA Testing & Technical Documentation",
    githubRepo: "https://github.com/Sunarka/blog-magang",
    liveUrl: "https://sunarka.github.io/blog-magang/",
    bio: "Mahasiswa S1 Ilmu Komputer Universitas Pendidikan Ganesha (Undiksha) yang sedang melaksanakan Program Magang Reguler di PT Laksita Emi Saguna, Denpasar. Fokus pada pengujian fungsional web (Software QA), verifikasi hak akses berbasis peran (RBAC), pengujian keamanan URL, serta penyusunan panduan pengguna (User Guide) teknis untuk sistem informasi perguruan tinggi."
  },

  // 3 Fokus Pekerjaan Utama
  workFocus: [
    {
      badge: "Quality Assurance",
      title: "Software QA & Web Testing",
      desc: "Melakukan pengujian black box fungsional, verifikasi RBAC (Role-Based Access Control) multi-tingkat (Universitas, Fakultas, Prodi), serta pengujian keamanan manipulasi parameter ID URL (HTTP 403 isolation)."
    },
    {
      badge: "Documentation",
      title: "User Guide & Manual Book",
      desc: "Menyusun buku panduan pengguna langkah demi langkah (step-by-step), tangkapan layar beranotasi, dan instruksi penanganan galat untuk modul Sistem Feeder PDDIKTI, SIM Prestasi, dan Konseling."
    },
    {
      badge: "Technical Reporting",
      title: "Dokumentasi & Pelaporan Teknis",
      desc: "Mendokumentasikan matriks skenario pengujian, pelaporan bug, validasi alur review pejabat kampus, dan pembuatan jurnal logbook kegiatan berkala untuk pemantauan pembimbing dan kampus."
    }
  ],

  // Kategori Skill & Tools
  skills: {
    testing: [
      "Black Box Testing",
      "RBAC Multi-Level Verification",
      "URL Tampering & Isolation Check",
      "Boundary & Form Validation",
      "Test Matrix & Scenario Design"
    ],
    documentation: [
      "Technical User Guide Writing",
      "Step-by-Step Flowcharting",
      "UI Screenshot Annotation",
      "Standard Operating Procedure (SOP)",
      "Error Handling Walkthrough"
    ],
    domain: [
      "SIM Keuangan Kampus (Unmas)",
      "Feeder PDDIKTI Integration",
      "SIM Prestasi Mahasiswa",
      "Sistem Konseling Akademik",
      "Alur Penganggaran RENSTRA"
    ]
  },

  // Pembelajaran & Refleksi
  learnings: {
    technical: [
      "Memahami penerapan RBAC ketat pada aplikasi enterprise kampus di mana manipulasi URL ID wajib menghasilkan status HTTP 403.",
      "Merancang matriks uji komprehensif yang mencakup skenario positif, pengujian batas, dan alur bertingkat (Universitas, Fakultas, Prodi).",
      "Menyusun dokumentasi teknis yang mudah dipahami oleh pengguna non-teknis melalui struktur visual dan instruksi bertahap."
    ],
    softSkills: [
      "Komunikasi asertif saat mendiskusikan temuan pengujian dan klarifikasi alur kerja bersama pembimbing lapangan.",
      "Manajemen waktu dan kedisiplinan pencatatan logbook mingguan secara terstruktur dan transparan.",
      "Ketelitian dalam meninjau setiap interaksi UI serta konsistensi terminologi dalam dokumen User Guide."
    ]
  },

  // Kendala & Solusi Nyata
  challenges: [
    {
      issue: "Memastikan isolasi data antar prodi pada SIM Keuangan agar akun pengusul tidak dapat mengubah pos pagu milik prodi lain melalui modifikasi parameter URL.",
      action: "Menjalankan skenario pengujian SN-09 & SN-10 dengan menyuntikkan ID pos pagu prodi/fakultas lain pada endpoint, memvalidasi respons sistem.",
      result: "Sistem berhasil merespons dengan HTTP 403 Forbidden dan menampilkan pesan peringatan yang sesuai."
    },
    {
      issue: "Menyederhanakan alur pendaftaran sesi konseling pada modul User Guide agar mahasiswa dan konselor memahami transisi status dengan cepat.",
      action: "Membuat diagram alur (step-by-step flowchart) disertai cuplikan antarmuka dan penanda nomor tahapan pada setiap tombol aksi.",
      result: "Dokumen User Guide menjadi lebih komunikatif dan memangkas kebingungan alur penugasan dosen konselor."
    }
  ],

  // CATATAN LOGBOOK MINGGUAN LENGKAP & TERSTRUKTUR
  posts: [
    {
      id: "minggu-01-testing-sim-keuangan-unmas",
      week: 1,
      category: "Testing Web",
      title: "Minggu 1: Software QA Testing SIM Keuangan Universitas Mahasaraswati (14 Skenario Pengujian)",
      date: "24 – 28 Agustus 2026",
      status: "Selesai",
      summary: "Pelaksanaan pengujian fungsional modul Perencanaan Program & Pengajuan dari 8 role pengguna, penguncian hak akses tingkat/fakultas/prodi, keamanan URL (HTTP 403), dan validasi submit pengajuan pada SIM Keuangan Universitas Mahasaraswati Denpasar.",
      tags: ["SIM Keuangan", "QA Testing", "Role Access", "Security URL", "Unmas"],
      objective: "Memverifikasi integritas fungsional dan keamanan otorisasi Role-Based Access Control (RBAC) pada modul Perencanaan Program & Pengajuan SIM Keuangan Universitas Mahasaraswati.",
      tasks: [
        "Mempelajari dokumen spesifikasi modul Perencanaan Program & Pengajuan Pos Pagu Anggaran.",
        "Menyusun dan mengeksekusi 14 skenario uji black box (SN-01 sampai SN-14).",
        "Menguji pembatasan hak akses dropdown Tingkatan dan Fakultas pada role Rektor, Dekan, Koorprodi, dan Staf.",
        "Melakukan penetration test ringan pada parameter ID pos pagu di URL untuk memastikan isolasi data prodi/fakultas.",
        "Mendokumentasikan hasil pengujian dan menyusun laporan status lolos (100% Passed)."
      ],
      testing: [
        { code: "SN-01", role: "Rektor / WR", type: "Role Access", action: "Buka dropdown Tingkatan dengan akun Rektor/WR", expected: "3 opsi tersedia: Universitas, Fakultas, & Prodi", actual: "3 opsi tampil lengkap sesuai rancangan", status: "PASSED" },
        { code: "SN-02", role: "Staff Universitas", type: "Role Access", action: "Buka dropdown Tingkatan via URL dengan role Staf Univ", expected: "Hanya opsi Universitas yang ditampilkan", actual: "Hanya opsi Universitas yang muncul", status: "PASSED" },
        { code: "SN-03", role: "Dekan / WD", type: "Role Access", action: "Buka dropdown Tingkatan & Fakultas dengan role Dekan/WD", expected: "Tingkatan berisi Fakultas & Prodi; Fakultas terkunci otomatis", actual: "Tingkatan Fakultas & Prodi muncul; Fakultas terkunci", status: "PASSED" },
        { code: "SN-04", role: "Staff Fakultas", type: "Role Access", action: "Buka dropdown Tingkatan dengan role Staf Fakultas", expected: "Hanya opsi Fakultas (TIDAK ada Prodi); terkunci ke fakultas sendiri", actual: "Hanya opsi Fakultas; fakultas terkunci", status: "PASSED" },
        { code: "SN-05", role: "Koorprodi / Staf", type: "Role Access", action: "Buka dropdown Tingkatan, Fakultas, Prodi dengan role Prodi", expected: "Hanya opsi Prodi; Fakultas & Prodi terkunci ke milik sendiri", actual: "Terkunci ke Prodi & Fakultas sendiri", status: "PASSED" },
        { code: "SN-06", role: "Pengusul Anggaran", type: "Functional", action: "Buka detail pos pagu & tambah Program baru", expected: "Program baru berhasil tersimpan pada RENSTRA UNMAS 2022–2026", actual: "Program berhasil masuk ke daftar pos pagu", status: "PASSED" },
        { code: "SN-07", role: "Pengusul Anggaran", type: "Functional", action: "Tambah Kegiatan & Rincian Belanja", expected: "Item belanja tersimpan dan nominal terakumulasi otomatis", actual: "Rincian item belanja berhasil dan nominal sesuai", status: "PASSED" },
        { code: "SN-08", role: "Pengusul Anggaran", type: "Functional", action: "Edit dan hapus salah satu kegiatan/belanja", expected: "Data diperbarui dan total kalkulasi pos langsung terupdate", actual: "Kalkulasi otomatis terupdate tanpa galat", status: "PASSED" },
        { code: "SN-09", role: "Security / URL", type: "Security", action: "Manipulasi ganti ID pos di URL ke Prodi lain", expected: "Ditolak HTTP 403 (Hanya bisa akses pos prodi sendiri)", actual: "Akses ditolak dengan pesan 403 Forbidden", status: "PASSED" },
        { code: "SN-10", role: "Security / URL", type: "Security", action: "Manipulasi ganti ID pos di URL ke Fakultas lain", expected: "Ditolak HTTP 403 (Hanya bisa akses pos fakultas sendiri)", actual: "Akses ditolak dengan pesan 403 Forbidden", status: "PASSED" },
        { code: "SN-11", role: "Reviewer Flow", type: "Workflow", action: "Validasi daftar penerima review untuk pengajuan prodi", expected: "Hanya menampilkan Koorprodi aktif + Dekan/WD fakultasnya", actual: "Daftar penerima review sesuai hierarki prodi", status: "PASSED" },
        { code: "SN-12", role: "Reviewer Flow", type: "Workflow", action: "Opsi naik tingkat pengajuan universitas", expected: "Daftar penerima review memuat pejabat tingkat universitas", actual: "Pejabat tingkat universitas tertampil", status: "PASSED" },
        { code: "SN-13", role: "Reviewer Flow", type: "Workflow", action: "Tampilan daftar pejabat universitas (LPPM/LPMI)", expected: "Format Nama + Jabatan + Unit tertampil lengkap dan akurat", actual: "Format nama, jabatan, dan unit tampil presisi", status: "PASSED" },
        { code: "SN-14", role: "Submission", type: "Workflow", action: "Submit final pengajuan pos pagu anggaran", expected: "Status pos pagu berubah 'Menunggu' & terkunci dari modifikasi", actual: "Status berubah menjadi 'Menunggu' tanpa error", status: "PASSED" }
      ],
      results: "Seluruh 14 skenario pengujian berhasil dieksekusi dengan status PASSED 100%. Sistem SIM Keuangan telah menerapkan isolasi otorisasi yang solid baik di sisi UI maupun backend validator.",
      challenges: "Perlu ketelitian tinggi dalam berpindah akun dari 8 tingkatan role berbeda untuk menguji konsistensi tampilan form dan validasi backend.",
      solutions: "Membuat tabel matriks kredensial pengujian dan menguji setiap skenario secara berurutan menggunakan sesi browser terisolasi.",
      learnings: "Pentingnya pengujian sisi server (backend validation) selain validasi antarmuka klien untuk mencegah serangan ID manipulation pada URL."
    },
    {
      id: "minggu-02-user-guide-feeder-sim-prestasi",
      week: 2,
      category: "User Guide",
      title: "Minggu 2: Pembuatan User Guide Sistem Feeder PDDIKTI, SIM Prestasi & Konseling",
      date: "31 Agustus – 4 September 2026",
      status: "Selesai",
      summary: "Menyusun dokumentasi teknis panduan penggunaan (User Guide) lengkap dengan tangkapan layar panduan langkah demi langkah untuk Sistem Feeder PDDIKTI, SIM Prestasi, dan Sistem Konseling.",
      tags: ["User Guide", "Technical Writing", "Feeder PDDIKTI", "SIM Prestasi"],
      objective: "Menghasilkan dokumen panduan pengguna (User Guide) yang jelas, terstandarisasi, dan mudah dipahami oleh operator, dosen, serta mahasiswa.",
      tasks: [
        "Penyusunan draf panduan teknis operasional Sistem Feeder PDDIKTI (sinkronisasi data mahasiswa & nilai).",
        "Pembuatan panduan antarmuka pengajuan dan validasi data portofolio pada modul SIM Prestasi.",
        "Dokumentasi alur pendaftaran sesi konseling mahasiswa dan penetapan dosen konselor.",
        "Pengambilan serta anotasi tangkapan layar antarmuka sistem untuk setiap langkah operasional.",
        "Penggabungan draf panduan ke dalam dokumen terpadu siap uji."
      ],
      results: "Tersusun 3 dokumen User Guide terpisah dengan struktur yang rapi (Daftar Isi, Prasyarat Akun, Langkah Operasional, dan Troubleshooting Pesan Galat).",
      challenges: "Menjelaskan istilah teknis sinkronisasi database Feeder PDDIKTI ke dalam bahasa prosedural yang mudah diikuti oleh staf administrasi akademik.",
      solutions: "Menggunakan ilustrasi alur kerja (workflow diagram) dan panduan visual langkah-demi-langkah dengan penanda nomor.",
      learnings: "Menulis dokumentasi teknis membutuhkan empati terhadap pengguna akhir non-teknis agar instruksi tidak multitafsir."
    },
    {
      id: "minggu-03-review-user-guide-konseling",
      week: 3,
      category: "User Guide",
      title: "Minggu 3: Review dan Penyempurnaan Panduan SIM Prestasi & Sistem Konseling",
      date: "7 – 11 September 2026",
      status: "Sedang Berjalan",
      summary: "Melakukan penyesuaian isi User Guide berdasarkan evaluasi alur pengguna sistem konseling, validasi kesesuaian hak akses bersama mentor lapangan, dan penyiapan berkas pelaporan.",
      tags: ["User Guide", "Review", "Sistem Konseling", "Evaluasi"],
      objective: "Menyempurnakan dokumen User Guide modul SIM Prestasi dan Konseling berdasarkan masukan pembimbing lapangan serta memastikan konsistensi navigasi.",
      tasks: [
        "Revisi bab tata cara pendaftaran konseling dan alur validasi berkas portofolio prestasi mahasiswa.",
        "Evaluasi kesesuaian hak akses pengguna (Role Mahasiswa vs Konselor vs Admin) pada dokumen panduan bersama mentor.",
        "Penyesuaian istilah glosarium agar selaras dengan pedoman operasional baku institusi.",
        "Pemeriksaan kualitas visual tangkapan layar beresolusi tinggi pada dokumen panduan."
      ],
      results: "Draf User Guide Sistem Konseling telah diperbarui dengan alur revisi terkini dan disetujui untuk pengujian tahap berikutnya.",
      challenges: "Perubahan beberapa alur transisi status konseling yang memerlukan pembaruan tangkapan layar dan deskripsi aksi.",
      solutions: "Melakukan koordinasi langsung dengan tim pengembang untuk memastikan alur antarmuka yang paling mutakhir.",
      learnings: "Dokumentasi teknis harus dirancang fleksibel agar mudah dimutakhirkan seiring iterasi pembaruan perangkat lunak."
    }
  ],

  // DOKUMENTASI KEGIATAN DI TEMPAT MAGANG
  gallery: [
    {
      id: 1,
      title: "Software QA Testing SIM Keuangan (14 Skenario)",
      category: "QA Testing",
      date: "26 Agustus 2026",
      caption: "Pelaksanaan pengujian fungsional dan validasi hak akses role (RBAC) pada modul Perencanaan Program & Pengajuan SIM Keuangan Universitas Mahasaraswati Denpasar."
    },
    {
      id: 2,
      title: "Penyusunan User Guide Feeder PDDIKTI & SIM Prestasi",
      category: "Dokumentasi",
      date: "31 Agustus 2026",
      caption: "Menyusun draf panduan teknis operasional sistem, pembuatan tangkapan layar beranotasi, dan penulisan panduan langkah demi langkah untuk pengguna sistem."
    },
    {
      id: 3,
      title: "Aktivitas Teknis di PT Laksita Emi Saguna",
      category: "Lingkungan Magang",
      date: "3 September 2026",
      caption: "Pelaksanaan aktivitas magang di kantor PT Laksita Emi Saguna, Jalan Himalaya Raya No 8a, Pemecutan Kaja, Denpasar, Bali."
    },
    {
      id: 4,
      title: "Sesi Koordinasi & Evaluasi Pengujian",
      category: "Mentoring",
      date: "8 September 2026",
      caption: "Konsultasi dan review berkala bersama pembimbing lapangan mengenai laporan temuan uji SIM Keuangan dan pemutakhiran draf User Guide."
    }
  ]
};
