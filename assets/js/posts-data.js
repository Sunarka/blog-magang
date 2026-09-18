/**
 * DATA PROFIL, LOGBOOK MINGGUAN & DOKUMENTASI FOTO MAGANG
 * Mahasiswa: I Komang Sunarka (NIM: 2315101063)
 * Program Studi: S1 Ilmu Komputer — Universitas Pendidikan Ganesha (Undiksha)
 * Tempat Magang: PT Laksita Emi Saguna (Denpasar, Bali)
 * Periode: 2026
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
    period: "Magang Undiksha 2026",
    company: "PT Laksita Emi Saguna",
    address: "Jl. Himalaya Raya No 8a, Pemecutan Kaja, Denpasar, Bali",
    jobdesk: "Pengembangan Modul SIMRS, UI/UX SSO UNMAS, User Guide & Katalog Sistem",
    githubRepo: "https://github.com/Sunarka/blog-magang",
    liveUrl: "https://sunarka.github.io/blog-magang/",
    bio: "Mahasiswa S1 Ilmu Komputer Universitas Pendidikan Ganesha (Undiksha) yang sedang melaksanakan Program Magang di PT Laksita Emi Saguna, Denpasar. Fokus pada penyusunan modul Sistem Informasi Manajemen Rumah Sakit (SIMRS), perancangan UI/UX Single Sign-On (SSO) UNMAS, penyusunan User Guide SIMAK & Sistem Pembayaran multirole, serta pembuatan Katalog Aplikasi Terintegrasi."
  },

  // Fokus Pekerjaan Utama
  workFocus: [
    {
      badge: "System Module",
      title: "Penyusunan Modul SIMRS",
      desc: "Menyusun modul deskriptif dan operasional sistem manajemen rumah sakit secara komprehensif, membedah arsitektur informasi dan fitur utama sistem."
    },
    {
      badge: "UI/UX Design",
      title: "Desain UI SSO Satu UNMAS",
      desc: "Merancang transformasi antarmuka Landing Page, Halaman Login, dan Portal Utama Single Sign-On untuk kemudahan akses civitas akademika."
    },
    {
      badge: "Documentation",
      title: "User Guide Multirole & Katalog",
      desc: "Menyusun panduan pengguna teknis SIMAK (4 role), Sistem Pembayaran (integrasi Bank BPD & BNI), serta Katalog Aplikasi Terintegrasi."
    }
  ],

  // Kategori Skill & Tools
  skills: {
    technical: [
      "HTML / CSS / JavaScript",
      "UI/UX Design (Figma & Canva)",
      "Technical Writing & Documentation",
      "System Architecture Mapping",
      "Quality Assurance & Testing"
    ],
    documentation: [
      "User Guide Multirole (Mahasiswa, Dosen, Prodi, Fakultas, Admin)",
      "Modul SIMRS Terstruktur",
      "Katalog Aplikasi Perguruan Tinggi Terintegrasi",
      "Alur Rekonsiliasi Perbankan (Bank BPD & BNI)",
      "Manajemen Cloud Storage Google Drive"
    ],
    domain: [
      "Sistem Informasi Manajemen Rumah Sakit (SIMRS)",
      "SIMAK (Sistem Informasi Manajemen Akademik) UNMAS",
      "Single Sign-On (SSO) Satu UNMAS",
      "Sistem Informasi Pembayaran Terintegrasi",
      "Ekosistem Platform Digital Kampus"
    ]
  },

  // DAFTAR POSTINGAN BLOG LENGKAP (6 KONTEN RESMI DARI RISSA NURMALASARI / PORTOFOLIO MAGANG)
  posts: [
    {
      id: "blog1-magang-pt-laksita-emi-saguna",
      week: 1,
      category: "SIMRS & SSO",
      title: "MAGANG UNDIKSHA 2026 : PT LAKSITA EMI SAGUNA",
      date: "08 Maret 2026",
      status: "Selesai",
      tag: "PT Laksita Emi Saguna",
      tags: ["PT Laksita Emi Saguna", "SIMRS", "UI/UX SSO", "TRPL Undiksha"],
      image: "assets/images/laksita.png",
      summary: "Bagi sebagian besar mahasiswa, program magang bukan sekadar kewajiban akademik, melainkan jembatan krusial yang mempertemukan teori perkuliahan dengan dinamika dunia kerja yang sesungguhnya di PT Laksita Emi Saguna.",
      objective: "Mengenal lingkungan kerja profesional di PT Laksita Emi Saguna, memulai pengerjaan Modul SIMRS, dan merancang antarmuka awal Single Sign-On (SSO) UNMAS.",
      tasks: [
        "Orientasi dan pengenalan alur kerja di PT Laksita Emi Saguna, Denpasar Utara.",
        "Analisis kebutuhan pembuatan Modul Sistem Informasi Manajemen Rumah Sakit (SIMRS).",
        "Perancangan aspek visual dan pengalaman pengguna (UI/UX) untuk Landing Page SSO UNMAS.",
        "Pembuatan antarmuka Halaman Login yang simpel dan responsif.",
        "Penyusunan dashboard Halaman Portal sebagai pusat akses layanan terpadu kampus."
      ],
      results: "Draf awal kerangka Modul SIMRS berhasil dipetakan, dan desain UI awal untuk Landing Page, Login, dan Portal SSO UNMAS berhasil diselesaikan.",
      challenges: "Menyusun modul dokumentasi yang komprehensif menuntut pemahaman mendalam mengenai alur bisnis rumah sakit agar setiap instruksi jelas dan akurat.",
      solutions: "Melakukan pendalaman alur bisnis klinis dan berkonsultasi secara intensif dengan pembimbing lapangan.",
      learnings: "Seorang praktisi IT harus mahir dalam mendokumentasikan sistem yang kompleks agar teknologi tersebut dapat digunakan secara optimal oleh masyarakat.",
      content: `
        <div class="space-y-5">
          <div class="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <img src="assets/images/laksita.png" alt="PT Laksita Emi Saguna" class="w-full h-auto object-cover">
          </div>
          
          <p class="leading-relaxed text-justify">
            Bagi sebagian besar mahasiswa, program magang bukan sekadar kewajiban akademik, melainkan jembatan krusial yang mempertemukan teori perkuliahan dengan dinamika dunia kerja yang sesungguhnya. Pengalaman berharga inilah yang sedang saya rasakan saat berkesempatan mengikuti kegiatan Magang UNDIKSHA 2026 di <strong>PT Laksita Emi Saguna</strong>. Sebagai mahasiswa Teknologi Rekayasa Perangkat Lunak (TRPL), kesempatan ini menjadi momentum penting untuk mendalami terkait pengembangan perangkat lunak secara menyeluruh mulai dari perancangan antarmuka hingga memastikan kualitas sistem melalui pengujian yang ketat.
          </p>

          <p class="leading-relaxed text-justify">
            PT Laksita Emi Saguna merupakan sebuah perusahaan yang bergerak di bidang penyediaan Solusi Digital Terintegrasi dan konsultansi Teknologi Informasi. Berlokasi di Denpasar Utara, Bali. Perusahaan ini fokus pada pengembangan sistem informasi berskala besar, termasuk <strong>Sistem Informasi Manajemen Rumah Sakit (SIMRS)</strong>.
          </p>

          <p class="leading-relaxed text-justify">
            Saat ini, fokus utama saya adalah <strong>Pembuatan Modul Sistem Informasi Manajemen Rumah Sakit (SIMRS)</strong>. Berbeda dengan modul program, modul yang saya kerjakan adalah sebuah panduan operasional sistem yang disusun secara sistematis layaknya sebuah buku. Proses ini masih dalam tahap pengerjaan aktif. Menyusun modul dokumentasi seperti ini menuntut pemahaman mendalam mengenai alur bisnis rumah sakit agar setiap instruksi dalam modul tersebut dapat memandu pengguna dengan jelas dan akurat serta dapat memberikan informasi secara rinci.
          </p>

          <p class="leading-relaxed text-justify">
            Di sisi lain, saya juga telah menyelesaikan tahap awal untuk proyek <strong>Pembaruan Desain UI Single Sign-On (SSO) UNMAS</strong>. Pada proyek ini, saya berperan dalam merancang aspek visual dan pengalaman pengguna (UI/UX). Beberapa bagian yang telah selesai saya kerjakan meliputi:
          </p>

          <ul class="list-disc list-inside space-y-2 pl-2 text-slate-700 dark:text-slate-300">
            <li><strong>Landing Page:</strong> Merancang wajah utama sistem yang memberikan kesan pertama profesional.</li>
            <li><strong>Halaman Login:</strong> Membuat antarmuka autentikasi yang simpel, aman, dan intuitif.</li>
            <li><strong>Halaman Portal:</strong> Menyusun dashboard utama pusat akses berbagai layanan akademik kampus.</li>
          </ul>

          <p class="leading-relaxed text-justify">
            Saat ini, proyek SSO UNMAS sedang menunggu instruksi atau tugas selanjutnya, sehingga saya dapat mengalihkan fokus kembali sepenuhnya untuk menyelesaikan penyusunan modul SIMRS. Melalui kegiatan ini, saya mengasah kemampuan dalam menyusun dokumen strategis dan operasional yang terstruktur. Pengalaman di PT Laksita Emi Saguna membuktikan bahwa seorang praktisi IT juga harus mahir dalam mendokumentasikan sistem yang kompleks agar teknologi tersebut dapat digunakan secara optimal oleh masyarakat. Perjalanan magang ini masih terus berlanjut. Setiap tantangan dalam menyusun narasi panduan SIMRS maupun detail visual SSO UNMAS menjadi modal berharga bagi saya untuk menjadi lulusan yang kompeten dan siap berkarya.
          </p>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/blog1.jpeg" alt="Momen Kebersamaan di Sela Pengerjaan Modul SIMRS dan SSO UNMAS" class="max-w-full md:max-w-lg mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Momen Kebersamaan di Sela Pengerjaan Modul SIMRS dan SSO UNMAS</p>
          </div>
        </div>
      `
    },
    {
      id: "blog2-pembuatan-modul-simrs-desain-ui-sso",
      week: 2,
      category: "SIMRS & SSO",
      title: "Magang Undiksha 2026 : Pembuatan Modul SIMRS dan Desaign UI SSO Satu Unmas",
      date: "06 April 2026",
      status: "Selesai",
      tag: "Magang Undiksha 2026",
      tags: ["Modul SIMRS", "UI Design", "SSO UNMAS", "User Guide", "Katalog"],
      image: "assets/images/modul.jpg",
      summary: "Menjalani program Magang UNDIKSHA di PT Laksita Emi Saguna memberikan saya pengalaman mendalam tentang pengelolaan sistem informasi secara profesional, penuntasan Modul SIMRS, dan perancangan UI SSO UNMAS.",
      objective: "Menuntaskan penyusunan Modul SIMRS deskriptif, merampungkan tahap awal desain UI SSO UNMAS, serta persiapan transisi ke pembuatan User Guide & Katalog Sistem.",
      tasks: [
        "Membedah komponen arsitektur informasi dan fitur utama SIMRS ke dalam narasi deskriptif baku.",
        "Menyelesaikan transformasi estetika Landing Page, Login, dan Portal Utama SSO UNMAS.",
        "Memilih skema warna, tipografi, dan tata letak UI yang meningkatkan efisiensi navigasi civitas akademika.",
        "Menyiapkan transisi ke tanggung jawab baru: Penyusunan User Guide Satu UNMAS & Katalog Sistem."
      ],
      results: "Modul SIMRS selesai disusun 100% dan seluruh mockup UI SSO Satu UNMAS rampung untuk tahap pengujian.",
      challenges: "Menerjemahkan logika perangkat lunak yang rumit ke dalam bahasa Indonesia yang baku dan mudah dicerna tanpa ambiguitas.",
      solutions: "Melakukan analisis mendalam terhadap alur bisnis klinis dan menstrukturkan dokumen dalam bab-bab tematik yang jelas.",
      learnings: "Kompetensi IT tidak hanya diuji dari aspek pemrograman, tetapi juga kemahiran mendokumentasikan sistem kompleks dan merancang solusi visual solutif.",
      content: `
        <div class="space-y-5">
          <p class="leading-relaxed text-justify">
            Menjalani program Magang UNDIKSHA 2026 di PT Laksita Emi Saguna memberikan saya pengalaman mendalam tentang bagaimana sebuah sistem informasi dikelola secara profesional. Sebagai mahasiswa Teknologi Rekayasa Perangkat Lunak (TRPL), saya memahami bahwa sebuah sistem informasi yang kompleks memerlukan jembatan komunikasi yang baik agar dapat dipahami oleh penggunanya. Oleh karena itu, saya telah melakukan fokus dan ketelitian dalam menuntaskan penyusunan <strong>Modul Sistem Informasi Manajemen Rumah Sakit (SIMRS)</strong>. Berbeda dengan panduan teknis yang berisi langkah-langkah penggunaan, modul yang saya kerjakan merupakan sebuah dokumen deskriptif yang disusun secara sistematis untuk memberikan gambaran menyeluruh mengenai arsitektur informasi dan fitur-fitur utama dalam sistem tersebut.
          </p>

          <p class="leading-relaxed text-justify">
            Dalam proses pengerjaannya, tugas saya adalah membedah setiap komponen sistem dan menuangkannya ke dalam narasi yang informatif. Saya melakukan analisis mendalam terhadap alur bisnis rumah sakit untuk memastikan bahwa setiap deskripsi yang saya tulis akurat dan mampu merepresentasikan kecanggihan sistem SIMRS secara utuh. Tantangan utama dalam pekerjaan ini adalah bagaimana menerjemahkan logika perangkat lunak yang rumit ke dalam bahasa Indonesia yang baku dan mudah dicerna, sehingga pembaca baik dari kalangan teknis maupun manajemen rumah sakit dapat memperoleh informasi yang rinci tanpa mengalami ambiguitas. Keberhasilan menyelesaikan modul ini menjadi pencapaian penting bagi saya dalam mengasah kemampuan dokumentasi strategis di dunia industri.
          </p>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/modul.jpg" alt="Dokumentasi Pembuatan Modul SIMRS" class="max-w-full md:max-w-sm mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Dokumentasi Pembuatan Modul SIMRS</p>
          </div>

          <p class="leading-relaxed text-justify">
            Sejalan dengan selesainya modul SIMRS, saya juga telah merampungkan tahap awal untuk proyek <strong>Pembaruan Desain UI Single Sign-On (SSO) UNMAS</strong>. Pada proyek ini, peran saya berfokus pada perancangan aspek visual dan pengalaman pengguna (UI/UX) untuk menciptakan wajah baru yang lebih modern, profesional, dan fungsional. Pekerjaan saya mencakup transformasi estetika pada Landing Page sebagai kesan pertama pengguna, penyederhanaan antarmuka pada halaman Login untuk menjamin kemudahan autentikasi, hingga penyusunan tata letak pada halaman portal utama sebagai pusat akses layanan kampus. Setiap elemen visual, mulai dari pemilihan warna hingga tipografi, saya pertimbangkan secara matang guna memastikan bahwa antarmuka yang dihasilkan tidak hanya memanjakan mata, tetapi juga meningkatkan efisiensi navigasi bagi seluruh civitas akademika.
          </p>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/uisso.jpg" alt="Dokumentasi Pembuatan Desain UI SSO Satu Unmas" class="max-w-full md:max-w-sm mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Dokumentasi Pembuatan Desain UI SSO Satu Unmas</p>
          </div>

          <p class="leading-relaxed text-justify">
            Saat ini, seluruh tanggung jawab pada tahap awal desain SSO UNMAS telah selesai dan sedang menunggu instruksi atau penugasan selanjutnya dari tim pengembang. Dengan tuntasnya kedua tugas besar ini, saya merasa telah melangkah lebih jauh dalam memahami dinamika kerja seorang praktisi IT profesional. Pengalaman di PT Laksita Emi Saguna membuktikan bahwa kompetensi seorang lulusan TRPL tidak hanya diuji melalui kemampuan teknis, tetapi juga melalui kemahiran dalam mendokumentasikan sistem yang kompleks dan merancang solusi visual yang solutif.
          </p>

          <p class="leading-relaxed text-justify">
            Setelah berhasil menuntaskan modul SIMRS dan desain SSO UNMAS tersebut, saat ini saya telah mulai melangkah ke tanggung jawab berikutnya. Fokus kerja saya kini beralih pada penyusunan <strong>User Guide Satu Unmas</strong> serta pembuatan <strong>Katalog sistem</strong>. Tugas baru ini menjadi fase lanjutan yang penting untuk memastikan bahwa seluruh hasil rancangan dan sistem yang dikembangkan dapat dipahami dan digunakan dengan baik oleh para pengguna di lingkungan kampus.
          </p>
        </div>
      `
    },
    {
      id: "blog3-user-guide-simak-unmas-multirole",
      week: 3,
      category: "User Guide",
      title: "Magang Undiksha 2026 : Penyusunan Panduan Pengguna (User Guide) Sistem Informasi Manajemen Akademik (SIMAK) UNMAS Berdasarkan Multirole",
      date: "29 Mei 2026",
      status: "Selesai",
      tag: "Magang Undiksha 2026",
      tags: ["User Guide", "SIMAK UNMAS", "Multirole", "Mahasiswa", "Dosen", "Prodi", "Fakultas"],
      image: "assets/images/b3.1.png",
      summary: "Penyusunan dokumen Panduan Pengguna (User Guide) untuk layanan Sistem Informasi Manajemen Akademik (SIMAK) UNMAS yang diklasifikasikan ke dalam 4 role pengguna utama: Mahasiswa, Dosen, Operator Prodi, dan Operator Fakultas.",
      objective: "Menyusun panduan operasional teknis SIMAK UNMAS yang aplikatif dan mudah dipahami sesuai hak akses masing-masing dari 4 role pengguna.",
      tasks: [
        "Penyusunan User Guide SIMAK Role Mahasiswa (pemetaan menu akademik utama & KRS mandiri).",
        "Penyusunan User Guide SIMAK Role Dosen (administrasi perkuliahan & validasi bimbingan akademik).",
        "Penyusunan User Guide SIMAK Role Operator Prodi (manajemen data internal, kontrol transaksi semester, pelaporan).",
        "Penyusunan User Guide SIMAK Role Operator Fakultas (pengawasan konsolidasi multi-prodi & laporan statistik)."
      ],
      results: "Tersusun lengkap 4 dokumen fisik User Guide SIMAK berbasis multirole siap uji dan siap distribusikan ke kampus.",
      challenges: "Membedakan batasan hak akses dan alur kerja antar tingkatan role secara presisi agar tidak terjadi tumpang tindih panduan.",
      solutions: "Menyusun matriks hak akses dan melengkapi setiap instruksi dengan tangkapan layar beranotasi langkah demi langkah.",
      learnings: "Panduan multirole yang terstruktur menjembatani fungsionalitas sistem baru dengan end-user secara mandiri dan transparan.",
      content: `
        <div class="space-y-6">
          <p class="leading-relaxed text-justify">
            Setelah menyelesaikan tahapan analisis, perancangan antarmuka pengguna (UI Design), serta pengembangan modul Sistem Informasi Manajemen Rumah Sakit (SIMRS) pada tahap sebelumnya, fokus aktivitas beralih pada aspek implementasi operasional sistem akademik. Salah satu instrumen krusial dalam menjembatani fungsionalitas sistem baru dengan pengguna akhir (end-user) adalah ketersediaan dokumentasi teknis yang aplikatif berupa <strong>Panduan Pengguna (User Guide)</strong>.
          </p>

          <p class="leading-relaxed text-justify">
            Pada tahap ini, telah diselesaikan penyusunan dokumen Panduan Pengguna untuk layanan <strong>Sistem Informasi Manajemen Akademik (SIMAK) Universitas Mahasaraswati (UNMAS) Denpasar</strong>. Penyusunan ini diklasifikasikan secara spesifik ke dalam 4 role pengguna utama yang memiliki hak akses serta alur kerja berbeda di dalam ekosistem layanan SIMAK, yaitu: <strong>Mahasiswa, Dosen, Operator Program Studi (Prodi), dan Operator Fakultas</strong>.
          </p>

          <p class="leading-relaxed text-justify font-medium text-slate-900 dark:text-white">
            Sebagai bukti penyelesaian tugas pada tahap ini, seluruh struktur dan materi panduan operasional untuk masing-masing role selesai disusun. Berikut adalah bukti fisik dokumen yang merepresentasikan progres kerja saya berdasarkan tiap role pengguna:
          </p>

          <!-- 1. Role Mahasiswa -->
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex flex-col md:flex-row items-center gap-5">
            <div class="flex-1 space-y-2 text-justify">
              <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                1. Panduan Pengguna: Role Mahasiswa
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Progres yang diselesaikan meliputi penyusunan dokumen instruksi kerja untuk pengguna mahasiswa. Fokusnya mencakup pemetaan menu akademik utama pada Layanan SIMAK secara garis besar agar mahasiswa dapat menggunakan sistem secara mandiri.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="assets/images/b3.1.png" alt="Panduan Role Mahasiswa" class="w-48 sm:w-52 h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            </div>
          </div>

          <!-- 2. Role Dosen -->
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex flex-col md:flex-row-reverse items-center gap-5">
            <div class="flex-1 space-y-2 text-justify">
              <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                2. Panduan Pengguna: Role Dosen
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Progres yang diselesaikan adalah penyusunan panduan dari sisi pengajar (dosen). Pekerjaan ini memuat alur administrasi perkuliahan utama serta proses validasi akademik mahasiswa bimbingan pada Layanan SIMAK secara umum.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="assets/images/b3.2.png" alt="Panduan Role Dosen" class="w-48 sm:w-52 h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            </div>
          </div>

          <!-- 3. Role Operator Prodi -->
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex flex-col md:flex-row items-center gap-5">
            <div class="flex-1 space-y-2 text-justify">
              <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                3. Panduan Pengguna: Role Operator Prodi
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Progres yang diselesaikan mencakup penyusunan instruksi kerja teknis untuk tingkat program studi. Berfokus pada pemetaan fungsi manajemen data internal, kontrol transaksi semester, dan pelaporan akademik pada Layanan SIMAK.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="assets/images/b3.3.png" alt="Panduan Role Operator Prodi" class="w-48 sm:w-52 h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            </div>
          </div>

          <!-- 4. Role Operator Fakultas -->
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 flex flex-col md:flex-row-reverse items-center gap-5">
            <div class="flex-1 space-y-2 text-justify">
              <h4 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                4. Panduan Pengguna: Role Operator Fakultas
              </h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Pada role fakultas, panduan ditujukan untuk pengawasan berskala fakultas. Dokumentasi teknis mencakup pemantauan konsolidasi data akademik dari berbagai prodi, hingga penarikan laporan statistik performa akademik fakultas.
              </p>
            </div>
            <div class="flex-shrink-0">
              <img src="assets/images/b3.4.png" alt="Panduan Role Operator Fakultas" class="w-48 sm:w-52 h-auto rounded-xl shadow-md border border-slate-200 dark:border-slate-700">
            </div>
          </div>

          <p class="leading-relaxed text-justify mt-4">
            Melalui penyusunan dokumen multirole yang terstruktur ini, diharapkan alur operasional akademik pada SIMAK UNMAS dapat berjalan lebih optimal, transparan, dan memudahkan masing-masing aktor dalam menjalankan hak aksesnya secara mandiri.
          </p>
        </div>
      `
    },
    {
      id: "blog4-user-guide-sistem-pembayaran-multirole",
      week: 4,
      category: "User Guide",
      title: "Magang Undiksha 2026 : Penyelesaian Dokumen Panduan Pengguna (User Guide) Sistem Informasi Pembayaran Berdasarkan Multirole",
      date: "05 Juni 2026",
      status: "Selesai",
      tag: "Magang Undiksha 2026",
      tags: ["User Guide", "Sistem Pembayaran", "Bank BPD", "Bank BNI", "Google Drive", "Multirole"],
      image: "assets/images/b4.png",
      summary: "Melanjutkan pemetaan sistem akademik sebelumnya, fokus pekerjaan saat ini adalah menyelesaikan dokumentasi teknis berupa Panduan Pengguna (User Guide) Layanan Sistem Pembayaran UNMAS berbasis multirole serta rekonsiliasi integrasi mitra perbankan Bank BPD dan Bank BNI.",
      objective: "Menyelesaikan dokumen Panduan Pengguna Sistem Pembayaran UNMAS, menyelaraskan alur rekonsiliasi transaksi Bank BPD & Bank BNI, serta mengarsipkan berkas di Google Drive.",
      tasks: [
        "Penyusunan Panduan Sistem Pembayaran untuk User Mahasiswa.",
        "Penyusunan Panduan Sistem Pembayaran untuk Operator Program Studi (Prodi).",
        "Penyusunan Panduan Sistem Pembayaran untuk Operator Fakultas.",
        "Pemetaan prosedur rekonsiliasi teknis perbankan (Bank BPD & Bank BNI).",
        "Finalisasi dan sinkronisasi file dokumen ke repositori cloud storage (Google Drive) perusahaan."
      ],
      results: "Seluruh berkas panduan pembayaran multirole telah selesai, diekspor ke PDF/DOCX, dan tersinkronisasi rapi di Google Drive.",
      challenges: "Menyelaraskan prosedur pembayaran antara dua mitra perbankan (Bank BPD yang sudah tuntas dan Bank BNI yang masih penyesuaian lanjutan).",
      solutions: "Membuat pemisahan bab yang jelas untuk masing-masing kanal pembayaran dan mendokumentasikan status integrasi secara transparan.",
      learnings: "Manajemen arsip digital cloud storage mempercepat koordinasi teknis dan mempermudah sosialisasi sistem baru.",
      content: `
        <div class="space-y-5">
          <p class="leading-relaxed text-justify">
            Melanjutkan pemetaan sistem akademik sebelumnya, fokus pekerjaan saat ini adalah menyelesaikan dokumentasi teknis berupa <strong>Panduan Pengguna (User Guide) Layanan Sistem Pembayaran UNMAS</strong>. Dokumen ini disusun untuk memberikan panduan alur transaksi finansial dan verifikasi data bagi tiga peran (multirole) utama yang telah diselesaikan.
          </p>

          <p class="leading-relaxed text-justify">
            Selain berfokus pada alur pengguna, penyusunan panduan ini juga diselaraskan dengan tahap rekonsiliasi teknis pada mitra perbankan, yaitu <strong>Bank BPD dan Bank BNI</strong>. Penyesuaian ini diperlukan guna memastikan bahwa prosedur transaksi dan metode pembayaran melalui kedua bank tersebut dapat terpetakan secara akurat, sinkron, dan mudah dipahami oleh seluruh aktor terkait tanpa menimbulkan ambiguitas data keuangan.
          </p>

          <p class="leading-relaxed text-justify">
            Sebagai bukti penyelesaian kerja serta manajemen penyimpanan arsip proyek secara digital, seluruh dokumen panduan yang telah rampung kini telah diunggah ke repositori cloud storage (Google Drive) perusahaan. Berikut adalah bukti manajemen file dan status pengunggahan dokumen secara umum:
          </p>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/b4.png" alt="Repositori Penyimpanan Dokumen Panduan Sistem Pembayaran di Google Drive" class="max-w-full md:max-w-lg mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Repositori Penyimpanan Dokumen Panduan Sistem Pembayaran di Google Drive</p>
          </div>

          <p class="leading-relaxed text-justify">
            Progres yang diselesaikan meliputi manajemen file dan finalisasi dokumen ke dalam Google Drive. Seluruh berkas telah diekspor ke dalam format standar (seperti .pdf atau .docx) dan disusun secara rapi berdasarkan peruntukan pengguna, yang terdiri dari:
          </p>

          <ul class="list-disc list-inside space-y-2 pl-2 text-slate-700 dark:text-slate-300">
            <li>Dokumen Panduan untuk User Mahasiswa.</li>
            <li>Dokumen Panduan untuk Operator Program Studi (Prodi).</li>
            <li>Dokumen Panduan untuk Operator Fakultas.</li>
          </ul>

          <p class="leading-relaxed text-justify">
            Dengan tersusunnya seluruh dokumen panduan untuk Layanan Sistem Pembayaran serta selesainya proses sinkronisasi data ke Google Drive pada ketiga peran utama ini, maka target pekerjaan pada tahapan dokumentasi teknis tersebut telah selesai dilaksanakan dengan beres.
          </p>

          <p class="leading-relaxed text-justify">
            Terkait integrasi perbankan, saat ini alur pembayaran melalui Bank BPD telah berhasil dipetakan sepenuhnya, sementara untuk jalur Bank BNI masih dalam tahap penyesuaian lanjutan. Penyimpanan terpusat di Google Drive ini dilakukan untuk mempermudah distribusi dokumen serta mempercepat koordinasi teknis sisa penyesuaian bersama pihak bank terkait, guna mendukung kelancaran fase pengujian, sosialisasi, dan implementasi sistem pembayaran baru di lingkungan UNMAS pada tahap berikutnya.
          </p>
        </div>
      `
    },
    {
      id: "blog5-user-guide-simak-administrator-monev-dpl",
      week: 5,
      category: "SIMAK Administrator",
      title: "Magang Undiksha 2026 : Penyelesaian Panduan Pengguna (User Guide) SIMAK – Role Administrator dan Rencana Tahap Selanjutnya",
      date: "12 Juni 2026",
      status: "Selesai",
      tag: "Magang Undiksha 2026",
      tags: ["User Guide", "Administrator", "SIMAK", "Monev DPL", "Katalog Aplikasi"],
      image: "assets/images/b5.1.jpeg",
      summary: "Melanjutkan rangkaian dokumentasi operasional sebelumnya, fokus pekerjaan pada fase ini telah berhasil menyelesaikan penyusunan Panduan Pengguna (User Guide) SIMAK UNMAS khusus untuk Role Administrator, serta menerima kunjungan monev dari DPL.",
      objective: "Menyusun dokumen panduan tata kelola tertinggi SIMAK untuk Role Administrator, mendampingi evaluasi monitoring DPL, dan merencanakan pembuatan katalog aplikasi.",
      tasks: [
        "Finalisasi struktur dokumen panduan tingkat administrator (konfigurasi global, master data, log audit).",
        "Penyesuaian sinkronisasi fungsi kontrol administrasi dengan pembaruan fitur sistem.",
        "Pendampingan kegiatan Monitoring dan Evaluasi (Monev) Magang oleh Dosen Pembimbing Lapangan (DPL).",
        "Inisiasi penyusunan dokumen rancangan Katalog Aplikasi Perguruan Tinggi Terintegrasi."
      ],
      results: "User Guide SIMAK Administrator tuntas, arahan strategis dari DPL diperoleh, dan kerangka katalog aplikasi mulai disusun.",
      challenges: "Menjaga sinkronisasi panduan administratif di tengah penyempurnaan fitur di lapangan.",
      solutions: "Melakukan penyesuaian teknis berkala dan berkonsultasi dengan DPL serta pembimbing teknis perusahaan.",
      learnings: "Katalog aplikasi memegang peranan krusial sebagai peta keterhubungan data antar-modul dan standarisasi Single Sign-On (SSO).",
      content: `
        <div class="space-y-5">
          <p class="leading-relaxed text-justify">
            Melanjutkan rangkaian dokumentasi operasional sebelumnya, fokus pekerjaan pada fase ini telah berhasil menyelesaikan penyusunan <strong>Panduan Pengguna (User Guide) SIMAK UNMAS khusus untuk Role Administrator</strong>. Sebagai pemegang hak akses tertinggi dalam ekosistem SIMAK, panduan untuk role ini dirancang secara umum untuk memastikan kontrol tata kelola sistem dapat berjalan dengan baik.
          </p>

          <p class="leading-relaxed text-justify">
            Meskipun draf utama dokumen panduan telah rampung, saat ini prosesnya masih berjalan beriringan dengan beberapa penyesuaian teknis pada sistem operasional di lapangan. Penyesuaian ini diperlukan guna memastikan fungsi kontrol administrasi tetap sinkron dengan pembaruan fitur sistem yang sedang berjalan.
          </p>

          <p class="leading-relaxed text-justify">
            Berikut adalah bukti fisik berupa screenshot halaman cover dan struktur daftar isi dokumen yang telah disusun secara umum:
          </p>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/b5.1.jpeg" alt="Cover dan Struktur Dokumen User Guide SIMAK Role Administrator" class="max-w-full md:max-w-lg mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Cover dan Struktur Dokumen User Guide SIMAK Role Administrator</p>
          </div>

          <p class="leading-relaxed text-justify">
            Progres yang diselesaikan meliputi finalisasi struktur dokumen panduan tingkat administrator. Berkas ini disusun secara terstruktur yang mencakup pemetaan fungsi konfigurasi global, pengelolaan master data utama, serta pengawasan log aktivitas sistem secara garis besar. Dengan tersusunnya dokumen panduan untuk Role Administrator ini, maka target pekerjaan pada tahapan dokumentasi teknis SIMAK berbasis multi-role secara umum telah diselesaikan dengan beres. Dokumen ini disiapkan sebagai acuan dasar manajemen kontrol, sembari menyelesaikan beberapa sisa penyesuaian akhir pada sistem sebelum siap digunakan sepenuhnya oleh tim teknis.
          </p>

          <p class="leading-relaxed text-justify">
            Di sela-sela proses finalisasi dokumen panduan pengguna ini, tim magang juga menerima kunjungan monitoring dan evaluasi langsung dari <strong>Dosen Pembimbing Lapangan (DPL)</strong>. Kunjungan ini bertujuan untuk meninjau sejauh mana progres implementasi sistem SIMAK yang telah dikerjakan, sekaligus memberikan arahan strategis terkait penyusunan dokumen teknis agar sesuai dengan standar akademis dan kebutuhan institusi.
          </p>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/b5.2.jpeg" alt="Kegiatan Monitoring dan Evaluasi Magang oleh Dosen Pembimbing Lapangan (DPL)" class="max-w-full md:max-w-xl mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Kegiatan Monitoring dan Evaluasi Magang oleh Dosen Pembimbing Lapangan (DPL)</p>
          </div>

          <p class="leading-relaxed text-justify">
            Setelah dokumen panduan fungsi operasional SIMAK selesai disusun, langkah berikutnya adalah <strong>pembuatan katalog aplikasi</strong> dari sistem tersebut. Latar belakang pembuatan katalog ini berperan penting karena sistem utama yang dibangun memiliki beberapa layanan. Katalog ini berfungsi sebagai dokumen acuan resmi untuk memetakan seluruh modul aplikasi yang ada, memastikan aliran data antar-sistem berjalan lancar, serta menghindari kerancuan fungsi. Melalui pemetaan yang jelas, pengawasan hak akses pengguna dan pemeliharaan sistem ke depannya dapat dilakukan secara lebih terstruktur dan efisien.
          </p>

          <p class="leading-relaxed text-justify">
            Secara umum, dokumen katalog ini nantinya akan memuat daftar inventaris seluruh sub-aplikasi yang aktif, deskripsi fungsi dasar masing-masing sistem, serta peta keterhubungan data antar-modul. Penyusunan ini dipersiapkan secara sistematis agar seluruh pengembangan ekosistem digital kampus dapat terdokumentasi dengan baik dan jelas pada tahap berikutnya.
          </p>
        </div>
      `
    },
    {
      id: "blog6-katalog-aplikasi-perguruan-tinggi-terintegrasi",
      week: 6,
      category: "Katalog",
      title: "Magang Undiksha 2026 : Katalog Aplikasi Perguruan Tinggi Terintegrasi",
      date: "29 Juni 2026",
      status: "Selesai",
      tag: "Magang Undiksha 2026",
      tags: ["Katalog Aplikasi", "Single Sign-On", "Terintegrasi", "Tata Kelola Kampus", "Finalisasi"],
      image: "assets/images/b6.1.jpeg",
      summary: "Sebagai kelanjutan dari selesainya User Guide pada Layanan SIMAK dan Sistem Pembayaran, penyusunan Katalog Aplikasi Terintegrasi ini memegang peranan krusial untuk menyatukan seluruh layanan ke dalam satu platform terpusat.",
      objective: "Menghasilkan dokumen resmi Katalog Aplikasi Perguruan Tinggi Terintegrasi untuk memetakan ekosistem digital kampus dan unifikasi akses Single Sign-On (SSO).",
      tasks: [
        "Penyusunan Cover Resmi Dokumen Integrated University Digital Platform.",
        "Pemetaan daftar inventaris sub-aplikasi dan layanan yang saling terhubung.",
        "Visualisasi alur Single Sign-On (SSO) dan unifikasi hak akses civitas akademika.",
        "Finalisasi dan publikasi dokumen katalog aplikasi terintegrasi."
      ],
      results: "Dokumen Katalog Aplikasi Perguruan Tinggi Terintegrasi selesai disusun dan menjadi acuan resmi arsitektur digital perguruan tinggi.",
      challenges: "Merangkum integrasi beragam sub-layanan kampus ke dalam format katalog yang elegan, jelas, dan mudah dipahami oleh pihak eksekutif maupun teknis.",
      solutions: "Membuat tata letak visual representatif dengan pembagian dua bagian esensial: Cover Resmi Identitas Visual dan Rincian Fitur Utama Terintegrasi.",
      learnings: "Penyusunan katalog yang rapi menjamin rekam jejak digital dan siklus akademik terdokumentasi dengan baik secara berkelanjutan.",
      content: `
        <div class="space-y-5">
          <p class="leading-relaxed text-justify">
            Sebagai kelanjutan dari selesainya User Guide pada Layanan SIMAK dan Sistem Pembayaran, penyusunan <strong>Katalog Aplikasi Terintegrasi</strong> ini memegang peranan yang sangat krusial. Mengingat sistem utama yang dibangun mencakup berbagai sub-layanan, katalog ini berfungsi sebagai dokumen acuan resmi untuk menyatukan seluruh layanan akademik dan administrasi ke dalam satu platform terpusat.
          </p>

          <p class="leading-relaxed text-justify">
            Melalui pemetaan ini, institusi dapat menghindari kerancuan fungsi, memastikan unifikasi akses pengguna yang aman melalui mekanisme Single Sign-On (SSO), serta mengoptimalkan efisiensi pemeliharaan sistem secara berkelanjutan.
          </p>

          <p class="leading-relaxed text-justify font-medium text-slate-900 dark:text-white">
            Dalam publikasi dokumen final ini, visualisasi utama difokuskan pada dua bagian esensial, yaitu:
          </p>

          <ul class="list-disc list-inside space-y-2 pl-2 text-slate-700 dark:text-slate-300">
            <li><strong>Cover Resmi Dokumen:</strong> Bagian awal dokumen yang memuat identitas visual dari Integrated University Digital Platform sebagai representasi modernisasi tata kelola kampus.</li>
            <li><strong>Fitur Utama:</strong> Bagian inti yang menyajikan daftar inventaris layanan-layanan yang saling terhubung.</li>
          </ul>

          <div class="my-6 text-center space-y-2">
            <div class="inline-block overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md">
              <img src="assets/images/b6.1.jpeg" alt="Dokumentasi Hasil Pembuatan Katalog Aplikasi Perguruan Tinggi" class="max-w-full md:max-w-xl mx-auto h-auto rounded-xl">
            </div>
            <p class="text-xs text-slate-400 italic">Dokumentasi hasil pembuatan katalog aplikasi perguruan tinggi</p>
          </div>

          <p class="leading-relaxed text-justify">
            Dengan selesainya penyusunan katalog aplikasi terintegrasi ini, seluruh rekam jejak digital dan siklus akademik di lingkungan perguruan tinggi telah terdokumentasi dengan baik secara sistematis.
          </p>
        </div>
      `
    }
  ],

  // DOKUMENTASI KEGIATAN & ARSIP FOTO MAGANG
  gallery: [
    {
      id: 1,
      title: "PT Laksita Emi Saguna & SIMRS",
      category: "Magang",
      date: "08 Maret 2026",
      image: "assets/images/laksita.png",
      caption: "Momen kebersamaan dan orientasi awal magang di PT Laksita Emi Saguna, Jalan Himalaya Raya No 8a, Denpasar, Bali."
    },
    {
      id: 2,
      title: "Dokumentasi Pembuatan Modul SIMRS & Desain UI SSO",
      category: "Modul & UI",
      date: "06 April 2026",
      image: "assets/images/modul.jpg",
      caption: "Penyusunan modul deskriptif SIMRS dan perancangan antarmuka Landing Page, Login, dan Portal SSO Satu UNMAS."
    },
    {
      id: 3,
      title: "User Guide SIMAK UNMAS Multirole (4 Role)",
      category: "User Guide",
      date: "29 Mei 2026",
      image: "assets/images/b3.1.png",
      caption: "Penyusunan dokumen panduan operasional teknis SIMAK UNMAS untuk Role Mahasiswa, Dosen, Operator Prodi, dan Operator Fakultas."
    },
    {
      id: 4,
      title: "User Guide Sistem Pembayaran & Google Drive",
      category: "User Guide",
      date: "05 Juni 2026",
      image: "assets/images/b4.png",
      caption: "Dokumentasi panduan sistem pembayaran multirole, rekonsiliasi Bank BPD & BNI, serta pengarsipan cloud storage di Google Drive."
    },
    {
      id: 5,
      title: "Monev DPL & User Guide Role Administrator",
      category: "Monev & Admin",
      date: "12 Juni 2026",
      image: "assets/images/b5.2.jpeg",
      caption: "Kunjungan monitoring evaluasi DPL di tempat magang serta finalisasi User Guide SIMAK tingkat Administrator."
    },
    {
      id: 6,
      title: "Katalog Aplikasi Perguruan Tinggi Terintegrasi",
      category: "Katalog",
      date: "29 Juni 2026",
      image: "assets/images/b6.1.jpeg",
      caption: "Publikasi dokumen katalog aplikasi terintegrasi sebagai peta resmi platform digital kampus berbasis Single Sign-On (SSO)."
    }
  ]
};
