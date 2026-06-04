// lib/data.ts

export const eventHistory = [
	{
		id: "1988-kajian-akbar",
		year: "1988",
		title: "Kajian Akbar Sedayu Gresik",
		location: "Alun-Alun Sedayu, Gresik",
		audience: "50.000+",
		audienceNum: 50000,
		sponsors: ["Gudang Garam Surya", "Roti Ramayana"],
		headliners: [
			"K.H. Abdurrahman Wahid (Gus Dur)",
			"Zainuddin MZ",
			"Hj. Rhoma Irama",
		],
		outcome:
			"Penyelenggaraan event komunitas berskala massal dengan lebih dari 50.000 peserta dari berbagai daerah. Membuktikan kapasitas pengelolaan event lintas wilayah dengan eksposur brand tinggi kepada segmen audiens muslim yang luas.",
		badge: "Milestone Perdana",
		color: "from-amber-600 to-orange-700",
	},
	{
		id: "2004-kajian-tahun-baru",
		year: "2004",
		title: "Kajian Akbar Tahun Baru Islam",
		location: "Perumahan Taman Suko Asri",
		audience: "2.000",
		audienceNum: 2000,
		sponsors: ["Tali Jagat"],
		headliners: ["K.H. Ma'ruf Islamudin"],
		outcome:
			"Event berbasis komunitas perumahan dengan tingkat partisipasi warga yang tinggi. Membuktikan daya tarik dan loyalitas audiens lokal yang kuat sebagai aset utama penyelenggara.",
		badge: "Community Scale",
		color: "from-blue-600 to-indigo-700",
	},
	{
		id: "2010-kajian-yusuf-mansur",
		year: "2010",
		title: "Kajian Akbar Tahun Baru Islam",
		location: "Perumahan Taman Suko Asri",
		audience: "5.000",
		audienceNum: 5000,
		sponsors: ["Antangin", "Gajah Duduk", "Nurani", "JTV", "Jawa Pos"],
		headliners: ["Ustadz Yusuf Mansur"],
		outcome:
			"Tonggak penting dalam evolusi event: dari kegiatan komunitas menjadi platform media dan brand. JTV mencatat peningkatan rating melalui siaran acara. Majalah Nurani mengalami lonjakan penjualan pasca eksposur event.",
		badge: "Media Platform",
		color: "from-emerald-600 to-teal-700",
	},
	{
		id: "2018-17-agustus",
		year: "2018–2023",
		title: "Peringatan Kemerdekaan 17 Agustus",
		location: "Kawasan RW, Perumahan Taman Suko Asri",
		audience: "1.000+",
		audienceNum: 1000,
		sponsors: ["Sosro", "IndiHome", "Sogood", "Telkom"],
		headliners: [],
		outcome:
			"Empat siklus penyelenggaraan rutin tahunan dengan ekosistem sponsor yang berkembang secara konsisten. Telkom memanfaatkan area aktivasi booth langsung kepada konsumen. Sosro mendapatkan interaksi produk langsung dengan warga.",
		badge: "4× Penyelenggaraan",
		color: "from-red-600 to-rose-700",
	},
	{
		id: "2026-17-agustus",
		year: "2026",
		title: "Peringatan Kemerdekaan 17 Agustus ke-5",
		location: "Kawasan RW, Perumahan Taman Suko Asri",
		audience: "1.600+",
		audienceNum: 1600,
		sponsors: ["Aslah", "Hisana", "Telkom", "Sosro", "Japfa Comfeed"],
		headliners: [],
		outcome:
			"Program 3 bulan aktif (Juni–Agustus 2026) dengan ekosistem kegiatan terlengkap. Integrasi lomba multi-cabang, bazar UMKM, dan grand finale. Slot sponsorship masih tersedia.",
		badge: "🔴 SEDANG BERLANGSUNG",
		color: "from-yellow-500 to-amber-600",
		isActive: true,
	},
];

export const sponsorBenefits = [
	{
		icon: "📡",
		title: "Jangkauan Audiens Terukur",
		desc: "Akses langsung ke ±1.600 audiens aktif: 700+ kepala keluarga, pengunjung pasar, dan warga sekitar yang memiliki daya beli nyata.",
	},
	{
		icon: "🏪",
		title: "Aktivasi Brand Fisik",
		desc: "Area booth, product sampling, dan direct selling di zona traffic tinggi selama 3 bulan program berlangsung.",
	},
	{
		icon: "📍",
		title: "Lokasi Strategis Utama",
		desc: "Terletak di jalan utama berdekatan pasar besar. Traffic publik eksternal menjangkau audiens jauh melampaui warga internal perumahan.",
	},
	{
		icon: "📺",
		title: "Eksposur Multi-Channel",
		desc: "Visibilitas offline (banner, backdrop, MC mention) dikombinasikan dengan potensi liputan media dan konten digital.",
	},
	{
		icon: "🔄",
		title: "Ekosistem Event Tahunan",
		desc: "Bukan event sekali jalan. Rekam jejak 36+ tahun penyelenggaraan konsisten membuktikan loyalitas audiens dan keberlanjutan program.",
	},
	{
		icon: "🤝",
		title: "Fleksibilitas Kemitraan",
		desc: "Tersedia opsi sponsor eksklusif, parsial, atau donatur. Benefit dapat dikustomisasi sesuai kebutuhan dan anggaran pemasaran Anda.",
	},
];

export const activeEvent = {
	title: "Peringatan Kemerdekaan Republik Indonesia ke-81",
	subtitle: "Festival Komunitas 17 Agustus 2026",
	tagline: "Program Komunitas Terbesar di Kawasan Taman Suko Asri",
	period: "20 Juni 2026 – 29 Agustus 2026",
	duration: "71 Hari Program",
	location: "Perumahan Taman Suko Asri, Jalan Utama  Dekat Pasar Besar",
	audience: "±1.600",
	households: "700+",
	edition: "Ke-5",
	currentSponsors: ["Aslah", "Hisana", "Telkom", "Sosro", "Japfa Comfeed"],
	phases: [
		{
			phase: "Fase I",
			title: "Peluncuran & Engagement Komunitas",
			period: "1 Januari – 20 Juni 2026",
			desc: "Inisiasi program, dan aktivasi komunitas awal. Peluang brand awareness di seluruh area perumahan.",
			activities: [
				"Pemasangan branding sponsor",
				"Sosialisasi program ke warga",
			],
		},
		{
			phase: "Fase II",
			title: "Turnamen & Kompetisi Multi-Cabang",
			period: "20 Juni - 10 Agustus 2026",
			desc: "Seri kompetisi intensif dengan partisipasi aktif ratusan peserta. Eksposur brand harian di venue pertandingan.",
			activities: [
				"Tenis Meja",
				"Badminton",
				"Senam",
				"Jalan Sehat",
				"Voli",
				"Catur",
				"Cerdas Cermat",
				"Lomba Suporter",
			],
		},
		{
			phase: "Fase III",
			title: "Grand Finale & Puncak Acara",
			period: "29 Agustus 2026",
			desc: "Hari visibilitas tertinggi sepanjang program. Kepadatan pengunjung maksimum dengan integrasi seluruh elemen event.",
			activities: [
				"Bazar UMKM",
				"Jalan Sehat & Senam Massal",
				"Pentas Seni & Hiburan Panggung",
				"Pengumuman & Pembagian Hadiah",
			],
		},
	],
	sponsorshipPackages: [
		{
			tier: "Sponsor Utama (Eksklusif)",
			price: "Hubungi Kami",
			color: "from-yellow-400 to-amber-500",
			textColor: "text-amber-900",
			benefits: [
				"Logo utama di seluruh banner & backdrop panggung",
				"Booth aktivasi premium (lokasi terbaik)",
				"MC mention sepanjang acara",
				"Hak penamaan salah satu kategori lomba",
				"Sertifikat resmi & penghargaan acara puncak",
				"Mention di seluruh materi digital & media sosial",
				"Hak eksklusif product sampling & direct selling",
			],
		},
		{
			tier: "Sponsor Pendukung",
			price: "Hubungi Kami",
			color: "from-slate-600 to-slate-700",
			textColor: "text-white",
			benefits: [
				"Logo di banner utama lokasi",
				"Area booth di zona bazar",
				"MC mention pada acara puncak",
				"Sertifikat resmi penyelenggara",
				"Mention di materi digital event",
			],
		},
		{
			tier: "Donatur & Mitra",
			price: "Fleksibel",
			color: "from-emerald-600 to-teal-600",
			textColor: "text-white",
			benefits: [
				"Sertifikat donatur resmi",
				"Pengumuman nama/brand saat acara puncak",
				"Logo di materi digital event",
				"Apresiasi resmi dari panitia",
			],
		},
	],
};

export const stats = [
	{ label: "Tahun Pengalaman", value: "36+", suffix: "" },
	{ label: "Total Audiens Terjangkau", value: "60.000+", suffix: "" },
	{ label: "Event Terselenggara", value: "10+", suffix: "" },
	{ label: "Brand Pernah Bermitra", value: "15+", suffix: "" },
];

export const contactInfo = {
	whatsapp: "6281357579727",
	whatsappDisplay: "+62 813-5757-9727",
	// email: 'sponsorship@sukoasrievent.id',
	organization: "Panitia 17 Agustus RW 08 Taman Suko Asri",
	address: "Perumahan Taman Suko Asri, Sidoarjo, Jawa Timur",
};
