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

  // DAFTAR POSTINGAN LOGBOOK RESMI (MINGGU 1 S/D MINGGU 9 - PERIODE BERJALAN)
  posts: [
    {
      id: "minggu-09-monitoring-sistem-dan-evaluasi-mid-period",
      week: 9,
      category: "Testing Web",
      title: "Minggu 9: Monitoring Sistem Berjalan & Evaluasi Tengah Periode Magang",
      date: "19 – 23 Oktober 2026",
      status: "On Progress",
      tag: "Evaluasi Mid-Period",
      tags: ["Testing Web", "UAT", "Monitoring", "Evaluasi Mid-Period"],
      image: "assets/images/monitoring-eval.svg",
      summary: "Memasuki minggu ke-9, aktivitas difokuskan pada pendampingan uji coba pengguna (UAT), observasi respon server pada sistem yang sedang berjalan, dan evaluasi capaian magang tengah periode di PT Laksita Emi Saguna.",
      objective: "Melakukan monitoring kinerja sistem secara real-time dan evaluasi pencapaian target magang hingga minggu ke-9.",
      tasks: [
        "Pendampingan User Acceptance Testing (UAT) bersama calon pengguna sistem.",
        "Observasi stabilitas respon modul penganggaran saat pengisian serentak.",
        "Pencatatan feedback kemudahan alur dari pengguna lapangan.",
        "Penyusunan laporan evaluasi progres magang tengah periode bersama mentor."
      ],
      results: "Sistem terpantau stabil, feedback pengguna terpetakan dengan jelas, dan evaluasi tengah periode berjalan sesuai target.",
      challenges: "Menghadapi pertanyaan pengguna mengenai alur otorisasi multi-level yang membutuhkan penjelasan lugas dan sabar.",
      solutions: "Menyediakan lembar contekan ringkas (cheat sheet) alur otorisasi dari dokumen User Guide yang telah disusun.",
      learnings: "Pengujian fungsional dan teknis harus diimbangi dengan kesiapan mendampingi pengguna akhir agar adopsi sistem berjalan mulus.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/monitoring-eval.svg" alt="Monitoring Sistem & Evaluasi Mid-Period" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Memasuki minggu ke-9 pelaksanaan magang di <strong>PT Laksita Emi Saguna</strong>, kegiatan difokuskan pada pendampingan uji coba penerimaan pengguna (<em>User Acceptance Testing / UAT</em>) dan monitoring kestabilan sistem yang berjalan.
          </p>

          <p class="leading-relaxed text-justify">
            Seiring dengan capaian 43% masa magang, tahap ini menjadi momen refleksi untuk meninjau efektivitas modul yang telah diuji sejak minggu pertama. Pengamatan langsung terhadap interaksi pengguna memberikan masukan berharga mengenai aspek kenyamanan antarmuka serta kepraktisan instruksi dalam buku panduan pengguna.
          </p>

          <p class="leading-relaxed text-justify">
            Seluruh catatan lapangan dan saran perbaikan dirangkum secara terstruktur untuk dijadikan bahan koordinasi lanjutan bersama tim teknis dan pembimbing lapangan.
          </p>
        </div>
      `
    },
    {
      id: "minggu-08-rekapitulasi-bug-dan-regression-testing",
      week: 8,
      category: "Dokumentasi",
      title: "Minggu 8: Rekapitulasi Bug Report & Verifikasi Pengujian Regresi",
      date: "12 – 16 Oktober 2026",
      status: "Selesai",
      tag: "Regression Testing",
      tags: ["Dokumentasi", "Bug Tracking", "Regression Testing", "QA Review"],
      image: "assets/images/bug-report.svg",
      summary: "Menyusun matriks pelacakan bug (Bug Tracking Matrix), memvalidasi perbaikan kode oleh tim pengembang, dan menjalankan pengujian regresi untuk menjamin kestabilan modul sistem.",
      objective: "Memastikan seluruh temuan galat sebelumnya telah diperbaiki dengan tuntas tanpa memicu kendala baru pada fitur lainnya.",
      tasks: [
        "Kompilasi daftar temuan bug dan klasifikasi berdasarkan tingkat keparahan (High, Medium, Low).",
        "Eksekusi pengujian regresi (regression testing) pada modul terdampak perbaikan.",
        "Verifikasi perbaikan dropdown prodi yang tidak reset saat pergantian fakultas.",
        "Pembaruan status bug tracker menjadi 'Resolved & Verified'."
      ],
      results: "Seluruh 4 temuan bug utama berhasil lolos verifikasi regresi dengan status 100% Resolved.",
      challenges: "Menjalankan uji regresi secara menyeluruh membutuhkan ketelitian ekstra agar skenario terdahulu tetap tervalidasi.",
      solutions: "Menggunakan lembar checklist regresi terstandar sehingga setiap pengujian dapat dieksekusi secara terstruktur dan efisien.",
      learnings: "Regression testing merupakan benteng utama dalam penjaminan mutu sebelum perangkat lunak dirilis ke lingkungan produksi.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/bug-report.svg" alt="Bug Tracking & Regression Testing" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Aktivitas pada minggu ke-8 berfokus pada audit perbaikan bug dan pelaksanaan pengujian regresi. Setelah tim pengembang melakukan pembaruan kode, tugas QA adalah memastikan bahwa perbaikan tersebut menyelesaikan masalah tanpa mengorbankan fungsionalitas yang sudah berjalan baik sebelumnya.
          </p>

          <p class="leading-relaxed text-justify">
            Empat isu utama berhasil diverifikasi perbaikannya, mencakup perbaikan reset state pada dropdown hierarki unit kerja, kestabilan format nominal pada dokumen cetak, dan penanganan timeout sesi otentikasi pengguna.
          </p>
        </div>
      `
    },
    {
      id: "minggu-07-cross-browser-dan-responsivitas-antarmuka",
      week: 7,
      category: "Testing Web",
      title: "Minggu 7: Pengujian Kompatibilitas Lintas Browser & Responsivitas Antarmuka",
      date: "05 – 09 Oktober 2026",
      status: "Selesai",
      tag: "Cross-Browser",
      tags: ["Testing Web", "Cross-Browser", "Responsive UI", "Compatibility"],
      image: "assets/images/testing-browser.svg",
      summary: "Melakukan pengujian tampilan antarmuka dan interaksi fungsional sistem pada Google Chrome, Mozilla Firefox, dan Microsoft Edge pada berbagai resolusi layar.",
      objective: "Menjamin tampilan antarmuka dan fungsi interaktif web berjalan konsisten tanpa distorsi layout di berbagai browser.",
      tasks: [
        "Pengujian tata letak CSS Grid dan Flexbox pada Chrome, Firefox, dan Edge.",
        "Validasi input formulir dan komponen modal pada resolusi desktop, laptop, dan tablet.",
        "Pemeriksaan kompatibilitas fitur download file pada masing-masing mesin peramban.",
        "Dokumentasi laporan kompatibilitas lintas peramban."
      ],
      results: "Antarmuka sistem terbukti 100% responsif dan berfungsi optimal di seluruh browser target.",
      challenges: "Menemukan sedikit ketidaksinkronan rendering scrollbar default antara peramban berbasis WebKit/Chromium dan Gecko.",
      solutions: "Menerapkan standarisasi styling scrollbar modern menggunakan CSS scrollbar-width dan overflow-x clip.",
      learnings: "Konsistensi pengalaman pengguna lintas platform adalah kunci kepuasan pengguna dalam aplikasi berbasis web.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/testing-browser.svg" alt="Cross-Browser Testing" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Pada minggu ketujuh, pengujian diarahkan pada kompatibilitas lintas peramban (<em>cross-browser compatibility testing</em>). Mengingat pengguna sistem berasal dari berbagai unit kerja dengan preferensi perangkat dan peramban yang bervariasi, pengujian menyeluruh sangat diperlukan.
          </p>

          <p class="leading-relaxed text-justify">
            Hasil pengujian menunjukkan bahwa antarmuka sistem mampu beradaptasi dengan baik di seluruh peramban utama tanpa terjadi kebocoran layout maupun kegagalan eksekusi skrip interaktif.
          </p>
        </div>
      `
    },
    {
      id: "minggu-06-user-guide-pelaporan-dan-cetak-bukti",
      week: 6,
      category: "User Guide",
      title: "Minggu 6: Penyusunan Panduan Modul Pelaporan & Cetak Bukti Transaksi",
      date: "28 September – 02 Oktober 2026",
      status: "Selesai",
      tag: "User Guide",
      tags: ["User Guide", "Technical Writing", "Reporting", "PDF Export"],
      image: "assets/images/user-guide-report.svg",
      summary: "Menyusun dokumentasi teknis panduan penggunaan untuk modul pelaporan transaksi anggaran, filter rekapitulasi data, dan prosedur cetak bukti pertanggungjawaban dana.",
      objective: "Menyediakan panduan terstruktur bagi staf keuangan dan operator unit kerja dalam mencetak laporan dan rekap transaksi.",
      tasks: [
        "Penyusunan alur langkah demi langkah pemfilteran periode laporan keuangan.",
        "Pembuatan panduan pencetakan bukti kuitansi resmi berformat PDF.",
        "Instruksi ekspor data rekapitulasi pos pagu ke dalam lembar kerja Microsoft Excel.",
        "Penyusunan bab pedoman penyimpanan arsip digital."
      ],
      results: "Dokumen User Guide Modul Pelaporan selesai disusun dan siap disosialisasikan kepada unit kerja terkait.",
      challenges: "Menjelaskan parameter filter tanggal dan kategori anggaran agar tidak terjadi kekeliruan saat generate laporan.",
      solutions: "Menyertakan screenshot antarmuka dengan tanda panah panduan dan contoh kasus pengisian yang realistis.",
      learnings: "Buku panduan yang baik tidak hanya mendeskripsikan fitur, tetapi menuntun pengguna menyelesaikan alur kerja nyata dengan cepat.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/user-guide-report.svg" alt="User Guide Pelaporan & Cetak Bukti" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Minggu keenam difokuskan pada penyusunan buku panduan penggunaan modul pelaporan transaksi. Modul ini merupakan salah satu fitur vital bagi akuntabilitas tata kelola anggaran kampus, karena menghasilkan bukti fisik pertanggungjawaban belanja.
          </p>

          <p class="leading-relaxed text-justify">
            Panduan disusun dengan menyertakan petunjuk visual yang jelas, mulai dari pemilihan rentang waktu pelaporan, penentuan format keluaran (PDF / XLSX), hingga tata cara validasi tanda tangan elektronik pengesahan pejabat berwenang.
          </p>
        </div>
      `
    },
    {
      id: "minggu-05-validasi-form-dan-error-handling",
      week: 5,
      category: "Testing Web",
      title: "Minggu 5: Pengujian Validasi Formulir & Penanganan Error Transaksi",
      date: "21 – 25 September 2026",
      status: "Selesai",
      tag: "Validasi Form",
      tags: ["Testing Web", "Input Validation", "Error Handling", "Negative Testing"],
      image: "assets/images/testing-form.svg",
      summary: "Pengujian menyeluruh pada input formulir anggaran (boundary value analysis, negative input), verifikasi pesan peringatan error, dan validasi berkas upload.",
      objective: "Memastikan formulir transaksi memiliki sistem pertahanan input yang kokoh dan memberikan pesan galat yang informatif.",
      tasks: [
        "Pengujian batas maksimum dan minimum nominal belanja pada pos pagu.",
        "Uji coba input negatif (angka negatif, karakter spesial, dan data kosong).",
        "Pengujian pembatasan tipe file (MIME type) dan ukuran maksimal upload berkas TOR/RAB.",
        "Verifikasi ketepatan pesan peringatan ketika anggaran melebihi sisa pagu."
      ],
      results: "Seluruh mekanisme validasi formulir bekerja dengan handal dan pesan error ditampilkan dengan jelas tanpa kegagalan sistem.",
      challenges: "Menguji berbagai variasi input tidak valid untuk memastikan sistem tidak mengalami crash atau unhandled exception.",
      solutions: "Menyusun matriks kasus uji negatif (negative test cases) yang mencakup skenario batas atas, batas bawah, dan format data tak lazim.",
      learnings: "Validasi sisi klien (frontend) dan sisi server (backend) harus saling melengkapi untuk menjamin integritas data sistem finansial.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/testing-form.svg" alt="Validasi Form & Error Handling" class="w-full h-auto object-cover">
          </div>

          <p class="leading-relaxed text-justify">
            Pada minggu kelima, kegiatan pengujian difokuskan pada penanganan validasi input formulir transaksi. Dalam sistem informasi pengelolaan anggaran, kekeliruan input sekecil apa pun dapat berdampak fatal terhadap laporan keuangan.
          </p>

          <p class="leading-relaxed text-justify">
            Pengujian dilakukan menggunakan teknik <em>Boundary Value Analysis</em> dan <em>Equivalence Partitioning</em>. Sistem berhasil menangani seluruh upaya input di luar batas wewenang dengan memunculkan pesan peringatan yang informatif bagi pengguna tanpa memicu error fatal pada database.
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
    },
    {
      id: 5,
      title: "Pengujian Validasi Form & Penanganan Error",
      category: "Validasi Form",
      date: "21 – 25 September 2026",
      image: "assets/images/testing-form.svg",
      caption: "Pengujian boundary value analysis, batas upload berkas lampiran, dan verifikasi pesan peringatan error transaksi."
    },
    {
      id: 6,
      title: "Monitoring Sistem Berjalan & Evaluasi Mid-Period",
      category: "UAT & Monitoring",
      date: "19 – 23 Oktober 2026",
      image: "assets/images/monitoring-eval.svg",
      caption: "Pendampingan User Acceptance Testing (UAT) dan evaluasi capaian magang 43% periode berjalan di PT Laksita Emi Saguna."
    }
  ]
};
