export const profile = {
  name: "Alfin Aqila Muzaki",
  handle: "heyfiinnn_",
  tagline: "Cave retia socialia.",
  role: "Cybersecurity & Cyber Intelligence Analyst | Offensive Security | OSINT Researcher",
  bio: "Cybersecurity & Cyber Intelligence Analyst yang berkontribusi untuk Ditressiber Polda Jateng — fokus di Offensive Security, Cyber Security, dan Cybercrime Investigation. Lulusan Teknik Informatika Udinus, IPK 3.51.",
  about: [
    "Saya Alfin Aqila Muzaki, seorang Cybersecurity & Cyber Intelligence Analyst dengan fokus pada Offensive Security, Cyber Security, dan Cybercrime Investigation. Saya menggabungkan security assessment, digital forensics, OSINT, threat monitoring, relationship mapping, serta pengembangan teknologi untuk mendukung kebutuhan keamanan siber dan analisis intelijen.",
    "Saya mengerjakan berbagai proyek dan kebutuhan di bidang cybersecurity dan cyber intelligence, baik untuk lingkungan pemerintahan maupun di luar pemerintahan, dengan fokus pada keamanan sistem, analisis ancaman, monitoring server dan media sosial, digital forensics, serta pengumpulan dan analisis informasi dari berbagai platform.",
    "Saya juga mengembangkan secara end-to-end sistem berbasis web untuk mendukung kebutuhan Ditressiber Polda Jawa Tengah dalam pelaporan, monitoring, dan analisis kejahatan siber di wilayah Polda Jawa Tengah. Sistem ini mencakup pelaporan dan monitoring kasus, entity mapping untuk memvisualisasikan keterkaitan antara kasus, pelaku, akun, dan entitas terkait, serta generate dan download laporan secara otomatis untuk kebutuhan pimpinan.",
    "Selain pengembangan sistem, saya juga terlibat dalam aktivitas keamanan siber di lingkungan kepolisian, dengan fokus pada patroli siber, monitoring server, monitoring media sosial, serta keamanan web dan sistem. Dalam implementasinya, sistem dan analisis yang dilakukan dapat mendukung berbagai kebutuhan seperti pemantauan kasus judi online, penipuan lintas platform, serta social media monitoring pada saat demonstrasi maupun peristiwa sensitif, sehingga informasi yang dikumpulkan dapat dipantau, dianalisis, dan dipetakan secara lebih terstruktur.",
    "Saya merupakan lulusan Teknik Informatika Universitas Dian Nuswantoro (Udinus) Semarang dengan IPK 3.51. Di luar aktivitas profesional, saya aktif di komunitas Semarang Cyber Security dan berbagai kegiatan berbagi pengetahuan di bidang cybersecurity, termasuk sharing session mengenai ancaman terorisme siber bersama BNPT dan sejumlah instansi pemerintah lainnya.",
    "Di luar cybersecurity, saya memiliki ketertarikan pada software engineering, automation, dan data. Saya mengembangkan berbagai proyek personal seperti automation tools dan self-hosted monitoring stack, serta mengerjakan pengembangan sistem untuk kebutuhan kantor, keuangan, web, software, hingga mobile application. Saya juga memiliki pengalaman dalam pengelolaan dan analisis data.",
    "Selain itu, saya menjalankan trading sebagai aktivitas sampingan dengan pendekatan technical dan fundamental analysis, sekaligus terus mengeksplorasi berbagai hal baru di bidang teknologi dan financial market.",
  ],
  location: "Semarang, Jawa Tengah, Indonesia",
  telegram: "https://t.me/xZINuHQEe_bot",
  github: "https://github.com/AlfinAqilaMuzaki",
  linkedin: "https://www.linkedin.com/in/alfinaqilamuzaki/",
  email: "alfindoangudeh@gmail.com",
};

export const expertise: { area: string; description: string }[] = [
  {
    area: "Offensive Security",
    description: "Penetration testing, vulnerability assessment, red teaming, security testing, serta analisis keamanan menggunakan tools seperti Nmap, Wireshark, dan Burp Suite.",
  },
  {
    area: "Cyber Security",
    description: "Digital forensics, server monitoring, system hardening, security automation, serta pengembangan monitoring stack menggunakan Wazuh, Grafana, dan berbagai tools pendukung lainnya.",
  },
  {
    area: "Cybercrime Investigation & Intelligence",
    description: "OSINT, social media monitoring, network & relationship mapping, multi-platform intelligence gathering, serta analisis keterkaitan antar entitas menggunakan tools seperti Maltego dan Sherlock.",
  },
];

export const activities: {
  slug: string; title: string; date: string; tags: string[]; image: string; excerpt: string;
  content: { heading: string; body: string }[];
}[] = [
  {
    slug: "patroli-siber-digital-investigation",
    title: "Patroli Siber × Digital Investigation",
    date: "Agu 2026",
    tags: ["Cyber Patrol", "Digital Investigation", "OSINT"],
    image: "/activities/patroliXosint.jpg",
    excerpt: "Kegiatan Patroli Siber dan Digital Investigation bersama tim Ditressiber Polda Jawa Tengah — pemantauan media sosial, digital profiling, hingga OSINT untuk penanganan kejahatan siber.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Kegiatan Patroli Siber dan Digital Investigation ini dilaksanakan bersama IPTU Doni Prasetyawan, S.H., M.H., Brigpol Simon Pujo Pamungkas, S.H., M.H., dan Briptu Radit Saputra, S.H. Kegiatan ini meliputi pemantauan media sosial, digital profiling terhadap target, serta pemanfaatan teknik Open Source Intelligence (OSINT) guna mendukung pengumpulan informasi, analisis data digital, dan penanganan kejahatan siber di lingkungan Ditressiber Polda Jawa Tengah.",
      },
      {
        heading: "Apa itu OSINT?",
        body: "OSINT adalah metode pengumpulan & analisis informasi dari sumber terbuka dan legal — media sosial, situs publik, domain, forum, hingga rekam jejak digital — diproses dengan metodologi sistematis biar hasilnya akurat dan bisa dipertanggungjawabkan.",
      },
      {
        heading: "Tujuan Kegiatan",
        body: "Mendeteksi dini aktivitas mencurigakan di ruang digital, memetakan pola & jaringan target, serta mendukung investigasi kejahatan siber dengan data yang valid.",
      },
      {
        heading: "Pemanfaatan",
        body: "Monitoring media sosial buat kenali indikasi ancaman, digital profiling buat gambaran menyeluruh soal target, dan OSINT multi-platform buat menggali & verifikasi informasi sebelum dianalisis.",
      },
      {
        heading: "Tantangan",
        body: "Volume data yang besar dan tersebar di banyak platform butuh metodologi yang rapi. Validitas sumber juga krusial — setiap temuan harus di-cross-check dari beberapa sumber independen.",
      },
      {
        heading: "Kesimpulan",
        body: "OSINT jadi tulang punggung investigasi kejahatan siber modern — bukan cuma soal mengumpulkan data, tapi menyusunnya jadi insight yang bisa ditindaklanjuti.",
      },
    ],
  },
  {
    slug: "pemaparan-web-stpa",
    title: "Pemaparan Web Sistem Pelaporan STPA & Analisis Kejahatan Siber",
    date: "Agu 2026",
    tags: ["STPA", "Full-Stack", "Presentasi"],
    image: "/activities/stpa.jpg",
    excerpt: "Pemaparan web Sistem Pelaporan STPA dan Analisis Kejahatan Siber di hadapan seluruh anggota Ditressiber Polda Jawa Tengah, didampingi mentor dan Wadir Ditressiber.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Pemaparan Web Sistem Pelaporan STPA dan Analisis Kejahatan Siber di hadapan seluruh anggota Ditressiber Polda Jawa Tengah. Kegiatan ini didampingi oleh IPTU Doni Prasetyawan, S.H., M.H. selaku mentor serta mendapat arahan dari Wakil Direktur Ditressiber Polda Jawa Tengah, AKBP Robert Sihombing, S.H., M.H.",
      },
      {
        heading: "Latar Belakang",
        body: "STPA dikembangkan untuk menjawab kebutuhan pengelolaan laporan kejahatan siber yang sebelumnya masih manual dan tersebar, sehingga menyulitkan proses analisis dan pengambilan keputusan yang cepat.",
      },
      {
        heading: "Tentang Sistem",
        body: "Sistem ini dikembangkan sebagai inovasi untuk mendukung pengelolaan pelaporan, analisis data, dan penyajian informasi yang efektif, akurat, dan terintegrasi — mencakup dashboard investigator, early warning, hingga entity mapping untuk melihat keterkaitan antar kasus dan pelaku.",
      },
      {
        heading: "Kesimpulan",
        body: "Pemaparan ini jadi langkah awal sosialisasi STPA ke seluruh anggota Ditressiber, sekaligus bentuk dukungan teknologi terhadap kerja investigasi kejahatan siber di wilayah Polda Jawa Tengah.",
      },
    ],
  },
  {
    slug: "social-media-monitoring",
    title: "Social Media Monitoring",
    date: "Agu 2026",
    tags: ["Social Media Monitoring", "Pengembangan Sistem"],
    image: "/activities/monitor.jpg",
    excerpt: "Pengembangan Sistem Kejahatan Siber bersama IPTU Doni Prasetyawan dan AKP Rusman Sugiarto di lingkungan Ditressiber Polda Jawa Tengah.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Pengembangan Sistem Kejahatan Siber bersama IPTU Doni Prasetyawan, S.H., M.H. dan AKP Rusman Sugiarto, S.H. di lingkungan Ditressiber Polda Jawa Tengah. Kegiatan ini merupakan bagian dari proses perancangan dan penyempurnaan sistem guna mendukung pengelolaan pelaporan, analisis data, serta penyajian informasi yang lebih efektif, akurat, dan terintegrasi.",
      },
      {
        heading: "Fokus Pembahasan",
        body: "Diskusi difokuskan pada penyempurnaan alur pengelolaan pelaporan dan analisis data, termasuk masukan langsung dari mentor dan pimpinan soal kebutuhan operasional di lapangan.",
      },
      {
        heading: "Kesimpulan",
        body: "Sesi pengembangan ini jadi bagian dari iterasi berkelanjutan untuk memastikan sistem yang dibangun benar-benar sesuai kebutuhan penyidik dan pimpinan di Ditressiber Polda Jawa Tengah.",
      },
    ],
  },
  {
    slug: "server-configuration-lab-siber-jateng",
    title: "Server Configuration — Lab Siber Jateng",
    date: "Agu 2026",
    tags: ["Server", "Infrastruktur", "DevSecOps"],
    image: "/activities/lab.jpg",
    excerpt: "Konfigurasi server di Laboratorium Siber Jawa Tengah sebagai bagian dari pengembangan dan optimalisasi infrastruktur teknologi informasi.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Konfigurasi server di Laboratorium Siber Jawa Tengah sebagai bagian dari pengembangan dan optimalisasi infrastruktur teknologi informasi. Kegiatan ini bertujuan memastikan sistem berjalan secara optimal, aman, dan andal guna mendukung operasional, pengelolaan data, serta pengembangan layanan dan aplikasi di lingkungan Ditressiber Polda Jawa Tengah.",
      },
      {
        heading: "Ruang Lingkup Pekerjaan",
        body: "Mencakup penataan jaringan dan perangkat rack server, konfigurasi koneksi antar perangkat, hingga pengecekan kesiapan sistem sebelum digunakan untuk mendukung operasional Lab Siber.",
      },
      {
        heading: "Kesimpulan",
        body: "Konfigurasi server yang rapi dan terdokumentasi jadi fondasi penting supaya infrastruktur di Lab Siber Jateng tetap andal buat mendukung layanan dan aplikasi yang berjalan di atasnya.",
      },
    ],
  },
  {
    slug: "fgd-relevansi-harmonisasi-uu-ite-kuhp-baru",
    title: "FGD Ditressiber & Jajaran Polda Jateng — Relevansi & Harmonisasi UU ITE dalam Era KUHP Baru",
    date: "Agu 2026",
    tags: ["FGD", "UU ITE", "KUHP Baru"],
    image: "/activities/forum.jpg",
    excerpt: "Forum Group Discussion Ditressiber bersama jajaran Polda Jawa Tengah membahas relevansi dan harmonisasi UU ITE dalam implementasi KUHP Baru.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Forum Group Discussion (FGD) yang diselenggarakan oleh Ditressiber bersama jajaran Polda Jawa Tengah sebagai sarana diskusi dan penguatan pemahaman mengenai relevansi serta harmonisasi Undang-Undang Informasi dan Transaksi Elektronik (UU ITE) dalam implementasi KUHP Baru.",
      },
      {
        heading: "Tujuan Forum",
        body: "Kegiatan ini menjadi wadah bertukar pandangan, memperkuat koordinasi, serta meningkatkan kesiapan personel dalam menghadapi dinamika penegakan hukum di bidang siber.",
      },
      {
        heading: "Kesimpulan",
        body: "FGD ini jadi langkah penting buat menyamakan pemahaman personel Ditressiber dan jajaran Polda Jateng soal penerapan UU ITE di era KUHP Baru, sekaligus memperkuat kesiapan penegakan hukum siber ke depannya.",
      },
    ],
  },
  {
    slug: "sharing-session-bnpt-radikalisme-terorisme-siber",
    title: "Perkembangan Ancaman Intoleransi, Radikalisme, dan Terorisme di Ruang Siber serta Strategi Penanggulangannya",
    date: "Agu 2024",
    tags: ["BNPT", "Counterterrorism", "OSINT"],
    image: "/activities/bnpt.jpg",
    excerpt: "Sharing session bersama Semarang Cyber Security dan Badan Nasional Penanggulangan Terorisme (BNPT) membahas perkembangan ancaman intoleransi, radikalisme, dan terorisme di ruang siber serta strategi penanggulangannya.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Berkesempatan bergabung bersama rekan-rekan anggota Semarang Cyber Security dalam sesi knowledge-sharing bareng perwakilan Badan Nasional Penanggulangan Terorisme (BNPT), mengangkat tema \"Perkembangan Ancaman Intoleransi, Radikalisme, dan Terorisme di Ruang Siber serta Strategi Penanggulangannya\".",
      },
      {
        heading: "Topik yang Dibahas",
        body: "Dalam sesi ini, kami bertukar perspektif soal Open Source Intelligence (OSINT), cyber patrol, investigasi digital, kejahatan siber yang berkaitan dengan terorisme, hingga lanskap ancaman siber yang terus berkembang — sekaligus menekankan pentingnya kolaborasi dalam menghadapi tantangan keamanan siber.",
      },
      {
        heading: "Mengapa Ini Penting",
        body: "Ruang siber jadi salah satu medium yang rentan dimanfaatkan buat menyebarkan paham intoleransi, radikalisme, hingga aktivitas terorisme — mulai dari propaganda, rekrutmen, sampai pendanaan. Makanya deteksi dini lewat OSINT dan cyber patrol, dibarengi kolaborasi lintas komunitas dan instansi, jadi kunci buat mencegah eskalasi ancaman ini sebelum berdampak lebih luas.",
      },
      {
        heading: "Kesimpulan",
        body: "Kegiatan ini jadi kesempatan berharga buat berbagi ilmu, bertukar ide, dan memperkuat kolaborasi antara komunitas cybersecurity dengan instansi pemerintah dalam menanggulangi ancaman intoleransi, radikalisme, dan terorisme di ruang siber.",
      },
    ],
  },
  {
    slug: "fks-sinergi-infrastruktur-telekomunikasi-ketahanan-siber-kalimantan-ikn",
    title: "FKS Sinergi Penguatan Infrastruktur Telekomunikasi & Ketahanan Siber — Kalimantan & IKN",
    date: "Agu 2026",
    tags: ["FKS", "Ketahanan Siber", "Kemenko Polhukam"],
    image: "/activities/fds.jpg",
    excerpt: "Forum Koordinasi dan Sinkronisasi bersama Kementerian Koordinator Bidang Politik dan Keamanan RI membahas sinergi penguatan infrastruktur telekomunikasi dan ketahanan siber di wilayah Kalimantan dan Ibu Kota Nusantara.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Forum Koordinasi dan Sinkronisasi (FKS) membahas Sinergi Penguatan Infrastruktur Telekomunikasi dan Ketahanan Siber di Wilayah Kalimantan dan Ibu Kota Nusantara, diselenggarakan bersama Kementerian Koordinator Bidang Politik dan Keamanan Republik Indonesia (Coordinating Ministry for Political and Security Affairs).",
      },
      {
        heading: "Fokus Pembahasan",
        body: "Diskusi difokuskan pada penguatan pertahanan siber — mulai dari detect, analyze, respond, hingga prevent & destroy — serta pentingnya mengenali aset dan ancaman (know your asset, know your enemy) dalam menghadapi cyber kill chain, khususnya untuk mendukung pembangunan infrastruktur telekomunikasi di Kalimantan dan IKN.",
      },
      {
        heading: "Kesimpulan",
        body: "Forum ini jadi bagian penting dari upaya sinkronisasi lintas instansi buat memastikan infrastruktur telekomunikasi dan ketahanan siber di wilayah strategis Kalimantan dan IKN terbangun dengan fondasi keamanan yang kuat sejak awal.",
      },
    ],
  },
  {
    slug: "semarang-cyber-security-komunitas",
    title: "Anggota — Semarang Cyber Security",
    date: "Agu 2024",
    tags: ["Community", "Cybersecurity", "Knowledge Sharing"],
    image: "/activities/scs.jpg",
    excerpt: "Aktif sebagai anggota Semarang Cyber Security, komunitas cybersecurity yang fokus pada pembelajaran, sharing knowledge, dan pengembangan skill di berbagai bidang keamanan siber.",
    content: [
      {
        heading: "Tentang Komunitas",
        body: "Semarang Cyber Security adalah komunitas cybersecurity yang fokus pada pembelajaran, sharing knowledge, dan pengembangan skill di berbagai bidang keamanan siber. Komunitas ini membahas topik-topik seperti digital security, cyber defense, digital forensics, cybercrime, Open Source Intelligence (OSINT), threat intelligence, cloud security, web security, malware analysis, incident response, dan bidang keamanan siber lainnya yang terus berkembang.",
      },
      {
        heading: "Peran & Aktivitas",
        body: "Semarang Cyber Security mulai terbentuk sejak Agustus 2024, dan sejak awal berdirinya hingga sekarang aktif menjalankan berbagai sesi diskusi, sharing session, dan kolaborasi lintas instansi pemerintah, serta kerja sama dan kolaborasi dengan berbagai komunitas cybersecurity lain.",
      },
      {
        heading: "Kesimpulan",
        body: "Komunitas ini jadi ruang penting buat terus belajar dan berkembang di dunia cybersecurity, sekaligus memperluas jaringan kolaborasi antar praktisi keamanan siber di Semarang dan sekitarnya.",
      },
    ],
  },
  {
    slug: "sosialisasi-waspada-cybercrime-smk-futuhiyah-mranggen",
    title: "Sosialisasi Waspada Cybercrime Sejak Dini — SMK Futuhiyah Mranggen",
    date: "Agu 2026",
    tags: ["Edukasi", "Cybercrime Awareness", "Phishing"],
    image: "/activities/dinus.jpg",
    excerpt: "Sosialisasi kesadaran cybercrime untuk siswa SMK Futuhiyah Mranggen, membahas modus phishing dan cara mengenali ancaman siber sejak dini.",
    content: [
      {
        heading: "Ringkasan Kegiatan",
        body: "Kegiatan sosialisasi \"Waspada Cybercrime Sejak Dini\" di SMK Futuhiyah Mranggen, sebagai bagian dari edukasi keamanan digital untuk pelajar.",
      },
      {
        heading: "Materi yang Disampaikan",
        body: "Materi mencakup pengenalan modus phishing — termasuk simulasi halaman login palsu Instagram — serta social engineering dan berbagai modus cybercrime lain yang rawan menyasar anak SMK, seperti penipuan online, pembajakan akun media sosial, hingga judi online. Siswa diajarin cara mengenali ciri-ciri website atau tautan berbahaya, biar lebih waspada terhadap kejahatan siber dalam kehidupan sehari-hari.",
      },
      {
        heading: "Kesimpulan",
        body: "Edukasi sejak dini ke pelajar jadi langkah preventif penting buat membangun kesadaran digital, supaya generasi muda lebih siap menghadapi ancaman cybercrime di era digital.",
      },
    ],
  },
];

export const experiences: {
  role: string; org: string; period: string; active: boolean; bullets: string[];
}[] = [
  {
    role: "Cyber Intelligence Analyst",
    org: "Ditressiber Polda Jateng",
    period: "Feb 2025 – Sekarang",
    active: true,
    bullets: [
      "Cyber patrol mendeteksi judi online, penipuan, dan kejahatan siber lintas platform",
      "Social media monitoring saat demonstrasi & peristiwa sensitif untuk deteksi risiko dini",
      "Pengumpulan & analisis informasi open-source multi-platform pakai metodologi OSINT",
      "Relationship & network mapping — mengungkap keterkaitan individu, akun, dan entitas digital",
      "Tracking & profiling target lewat digital intelligence dan tools analitik",
      "Penyusunan laporan intelijen ringkas untuk penyidik dan pimpinan",
      "Kolaborasi tim internal untuk early warning ancaman digital",
    ],
  },
  {
    role: "Anggota",
    org: "Semarang Cyber Security",
    period: "Agu 2024 – Sekarang",
    active: true,
    bullets: [
      "Komunitas cybersecurity yang fokus pada pembelajaran & sharing knowledge — digital security, cyber defense, digital forensics, cybercrime, OSINT, threat intelligence, cloud security, web security, malware analysis, incident response, dan bidang keamanan siber lainnya",
      "Sharing session bareng BNPT (Badan Nasional Penanggulangan Terorisme) soal evolusi ancaman intoleransi, radikalisme, dan terorisme di ruang siber — bahas OSINT, cyber patrol, investigasi digital, dan kejahatan siber terkait terorisme",
      "Kolaborasi lintas instansi pemerintah serta kerja sama dan gabungan antar komunitas cybersecurity lainnya, dari diskusi bareng hingga sharing session",
    ],
  },
  {
    role: "Trader Specialist",
    org: "Exness Indonesia · Freelance",
    period: "Jan 2024 – Sekarang",
    active: false,
    bullets: [
      "Analisis pasar finansial pakai pendekatan teknikal & fundamental untuk ambil keputusan trading yang terukur",
      "Disiplin risk & money management — pakai indikator teknikal, price action, dan trend analysis untuk cari peluang pasar terbaik",
      "Riset harian soal pergerakan pasar global, sentimen ekonomi, dan faktor geopolitik yang pengaruhi volatilitas harga — dieksekusi via MetaTrader, TradingView, dan Exness",
    ],
  },
];

export const education = {
  university: "Universitas Dian Nuswantoro",
  degree: "Sarjana Komputer · Teknik Informatika",
  period: "Sep 2022 – Jul 2026",
  gpa: "IPK 3.51",
  description: "Selama kuliah, saya banyak berkecimpung di bidang Cybersecurity dan Information Technology — dapetin ilmu teori dan praktik lewat coursework, proyek, dan riset mandiri.",
  activities: [
    "Ethical Hacking & Penetration Testing — eksplorasi kerentanan sistem dan praktik metodologi yang aman",
    "Cloud Computing — pemahaman infrastruktur cloud, deployment model, dan aspek keamanannya",
    "Internet of Things (IoT) Security — analisis dan pengamanan perangkat terhubung serta smart system",
    "Cybersecurity Fundamentals — network security, kriptografi, risk management, dan threat analysis",
    "Digital Forensics — teknik pengumpulan bukti, incident response, dan investigasi",
    "Artificial Intelligence (AI) in Cybersecurity — peran AI dalam anomaly detection dan threat intelligence",
    "Data & Communication Analysis — pemetaan pola, koneksi, dan digital footprint",
  ],
  skills: ["Cybersecurity Fundamentals", "Ethical Hacking", "Penetration Testing", "Cloud Computing", "IoT Security", "Digital Forensics", "AI in Cybersecurity", "Data & Communication Analysis"],
};

export const projects: {
  name: string; category: string; visibility: "public" | "private";
  description: string; tags: string[]; github?: string; live?: string;
}[] = [
  {
    name: "STPA — Sistem Pelaporan & Analisis Kejahatan Siber Polda Jateng",
    category: "GOVERNMENT",
    visibility: "private",
    description: "Proyek bareng Ditressiber Polda Jateng — sistem pelaporan & monitoring kejahatan siber berbasis web untuk wilayah Polda Jawa Tengah, dibangun pakai RAD methodology. Dashboard investigator, early warning, entity mapping buat lihat keterkaitan kasus & pelaku, sampai laporan intelijen.",
    tags: ["Full-Stack", "DevSecOps", "RAD", "Network Eng"],
  },
  {
    name: "Automation-Media-Sosial",
    category: "AUTOMATION",
    visibility: "private",
    description: "Panel internal single-admin buat otomasi aksi Instagram dari akun farm — auto report, like, komentar, dan lainnya. FastAPI + arq job queue + SQLite backend, Next.js frontend.",
    tags: ["FastAPI", "Next.js", "Playwright", "Redis", "arq", "SQLite"],
  },
  {
    name: "OpenDFIR-Mobile",
    category: "FORENSICS",
    visibility: "public",
    description: "Tool desktop Windows buat akuisisi forensik mobile Android — konek via ADB, tarik data tanpa root, parsing pakai ALEAPP, cross-reference SMS/Call Log/Contacts, GPS photo mapping, sampai laporan PDF/HTML — semua dari satu tombol START.",
    tags: ["Python", "PySide6", "ADB", "ALEAPP", "Digital Forensics"],
    github: "https://github.com/AlfinAqilaMuzaki/OpenDFIR-Mobile",
  },
  {
    name: "siber-monitor",
    category: "MONITORING",
    visibility: "private",
    description: "Self-hosted all-in-one server monitoring & security stack. Grafana + Prometheus + Wazuh SIEM + Fail2ban + Telegram bot alerts. One-command deploy.",
    tags: ["Grafana", "Prometheus", "Wazuh", "Fail2ban", "Docker", "Python"],
    github: "https://github.com/AlfinAqilaMuzaki/siber-monitor",
  },
  {
    name: "IoT-MonitoringTanaman",
    category: "IOT",
    visibility: "public",
    description: "Platform web monitoring kondisi tanaman real-time — suhu, kelembaban tanah & udara dari sensor IoT (Arduino/ESP8266), lengkap notifikasi kondisi tidak sesuai dan grafik/laporan historis buat petani & peneliti.",
    tags: ["PHP", "MySQL", "IoT", "Arduino", "ESP8266"],
    github: "https://github.com/AlfinAqilaMuzaki/IoT_MonitoringTanaman",
  },
  {
    name: "DoS-WiFi",
    category: "SECURITY RESEARCH",
    visibility: "public",
    description: "Skrip Python edukatif untuk deauthentication attack di jaringan Wi-Fi, memanfaatkan airodump-ng, airmon-ng, dan aireplay-ng buat scan & simulasi serangan terhadap jaringan target — khusus pembelajaran keamanan jaringan di lingkungan yang diizinkan.",
    tags: ["Python", "Aircrack-ng", "WiFi Security", "Education"],
    github: "https://github.com/AlfinAqilaMuzaki/DoS-WiFi",
  },
  {
    name: "Antivirus_gui",
    category: "SECURITY TOOLING",
    visibility: "public",
    description: "Aplikasi antivirus sederhana berbasis Python dengan GUI — signature-based scanning file/folder, karantina file mencurigakan, dan logging aktivitas pemindaian.",
    tags: ["Python", "Tkinter", "Malware Analysis", "SHA256"],
    github: "https://github.com/AlfinAqilaMuzaki/Antivirus_gui",
  },
  {
    name: "Virus-Overwrite",
    category: "EDUCATIONAL",
    visibility: "public",
    description: "Contoh edukatif overwrite virus dalam C — menunjukkan cara malware menimpa file .out executable. Untuk pembelajaran di isolated environment.",
    tags: ["C", "Malware Analysis", "Education"],
    github: "https://github.com/AlfinAqilaMuzaki/Virus-Overwrite",
  },
];


export const tools = [
  { category: "OSINT & Intelligence", items: ["Maltego", "theHarvester", "Shodan", "Recon-ng", "SpiderFoot", "Maigret", "GHunt", "Sherlock", "BlazeHunter", "Wayback Machine", "Have I Been Pwned", "TinEye"] },
  { category: "Offensive Security", items: ["Nmap", "Burp Suite", "OWASP ZAP", "Metasploit", "SQLMap", "Nikto", "WPScan", "Aircrack-ng"] },
  { category: "Forensics & Reverse Eng", items: ["Wireshark", "Autopsy", "Volatility", "Ghidra", "GDB", "strings", "binwalk"] },
  { category: "Monitoring & DevSecOps", items: ["Wazuh", "Grafana", "Prometheus", "Zabbix", "Fail2ban", "cAdvisor", "Trivy"] },
  { category: "Development", items: ["Python", "FastAPI", "Rust", "TypeScript", "Next.js", "Bash", "SQL", "Playwright"] },
  { category: "Infrastructure", items: ["Docker", "Linux", "Nginx", "PostgreSQL", "SQLite", "Redis", "Cloudflare"] },
  { category: "CTI & Red Team", items: ["MITRE ATT&CK", "Threat Intel", "Red Team Ops", "Social Engineering", "CTI"] },
  { category: "Cloud & ICS", items: ["Cloud Security", "ICS/SCADA", "IoT Security", "Critical Infra"] },
  { category: "Artificial Intelligence", items: ["ChatGPT", "Claude", "Gemini", "Perplexity", "GitHub Copilot", "Cursor"] },
  { category: "Productivity & Toolkit Harian", items: ["Notion", "Obsidian", "ClickUp", "Linear", "Slack", "n8n"] },
  { category: "Trading", items: ["MetaTrader", "TradingView", "Exness", "Technical Analysis", "Risk Management"] },
];

export const certificates: { name: string; issuer: string; date: string; skill: string; image?: string; verifyUrl?: string }[] = [
  { name: "Sistem Pelaporan & Analisis Kejahatan Siber Berbasis Web — RAD Method", issuer: "Kepolisian RI", date: "Mei 2026", skill: "Full-Stack · DevSecOps", image: "/certs/siber.jpg" },
  { name: "FKS Sinergi Penguatan Infrastruktur Telekomunikasi & Ketahanan Siber — IKN", issuer: "Kemenko Polhukam RI", date: "Jun 2026", skill: "Cybersecurity", image: "/certs/bpk.jpg" },
  { name: "Cyber Security Penetration Testing", issuer: "ID-Networkers (IDN.ID)", date: "Apr 2026", skill: "Pentesting", image: "/certs/idn-pentest.jpg" },
  { name: "Basic Mobile Security — Pentesting & Analisis Malware Aplikasi Perbankan", issuer: "Cyberkarta", date: "Jan 2026", skill: "Malware Analysis", image: "/certs/cyberkarta-mobile.jpg" },
  { name: "Certified Red Team Operations Management (CRTOM)", issuer: "Red Team Leaders", date: "Jan 2026", skill: "Red Team Ops", image: "/certs/crtom.jpg", verifyUrl: "https://courses.redteamleaders.com/exam-completion/1e5ad8e4aaa3d387" },
  { name: "CSAM Combat & Investigation Introduction", issuer: "Red Team Leaders", date: "Jan 2026", skill: "Cybercrime Inv.", image: "/certs/csam.jpg", verifyUrl: "https://courses.redteamleaders.com/completion/0c2fd5d978e475e9" },
  { name: "ICS/SCADA Cybersecurity", issuer: "Red Team Leaders", date: "Jan 2026", skill: "ICS · OT Security", image: "/certs/ics-scada.jpg", verifyUrl: "https://courses.redteamleaders.com/completion/b3fd5ef3f5aaa4b5" },
  { name: "OSINT Analyst — Intermediate", issuer: "Siberku Epic Indonesia", date: "Jun 2025", skill: "OSINT", image: "/certs/siberku-osint.jpg" },
  { name: "Cybersecurity Awareness", issuer: "Anon Cyber Team (ACT)", date: "Nov 2025", skill: "Cybersecurity", image: "/certs/anon.jpg" },
  { name: "Malicious Cryptography", issuer: "BSSN — Poltek Siber & Sandi", date: "Sep 2025", skill: "Cryptography", image: "/certs/bssn-cryptography.jpg" },
  { name: "Certified Hacking & Penetration Tester (CHPT)", issuer: "Hackerroom.id", date: "Apr 2025", skill: "Pentesting · CTI · Forensics", image: "/certs/chpt.jpg" },
];
