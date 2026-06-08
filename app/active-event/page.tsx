"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { activeEvent } from "@/lib/data";
// import type { Metadata } from "next";
import { useEffect, useState } from "react";

const images = [
	"/img/panitia-1.jpeg",
	"/img/panitia-2.jpeg",
	"/img/panitia-3.jpeg",
	"/img/panitia-4.jpeg",
	"/img/panitia-5.jpeg",
];

// export const metadata: Metadata = {
// 	title: "Event 17 Agustus 2026 – Peluang Sponsorship Aktif | Sukoasri Event",
// 	description:
// 		"Program komunitas 71 hari (20 Juni – 29 Agustus 2026) dengan ±1.600 audiens aktif. Slot sponsorship tersedia. Hubungi tim kemitraan kami.",
// };

export default function ActiveEventPage() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 5000); // change every 5s

		return () => clearInterval(interval);
	}, []);

	return (
		<main className="min-h-screen bg-navy-950 noise-bg">
			<Navbar />

			{/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
				{/* Background Image Slider */}
				<div className="absolute inset-0 ">
					{images.map((img, i) => (
						<div
							key={i}
							className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
							style={{
								backgroundImage: `url(${img})`,
								opacity: i === index ? 1 : 0,
							}}
						/>
					))}

					{/* dark overlay for transparency effect */}
					<div className="absolute inset-0 bg-black/60" />
				</div>

				<div className="absolute inset-0 grid-pattern opacity-30" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950" />

				{/* Glow */}
				<div
					className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
					style={{
						background:
							"radial-gradient(ellipse, rgba(239,68,68,0.06) 0%, rgba(212,160,23,0.04) 40%, transparent 70%)",
					}}
				/>

				{/* Flag decorations */}
				<div className="absolute top-32 left-10 flex gap-1 opacity-20">
					{Array.from({ length: 8 }).map((_, i) => (
						<div
							key={i}
							className={`w-6 h-9 ${i % 2 === 0 ? "bg-red-500" : "bg-white"} opacity-60`}
						/>
					))}
				</div>
				<div className="absolute top-32 right-10 flex gap-1 opacity-20">
					{Array.from({ length: 8 }).map((_, i) => (
						<div
							key={i}
							className={`w-6 h-9 ${i % 2 === 0 ? "bg-red-500" : "bg-white"} opacity-60`}
						/>
					))}
				</div>

				<div className="relative max-w-5xl mx-auto px-6 text-center">
					{/* Live badge */}
					<div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/100 border border-red-500/25 text-white text-xl font-bold tracking-widest uppercase mb-12">
						<span className="pulse-dot" />
						AKAN Berlangsung 20 Jun – 29 Agt 2026
					</div>

					{/* Title */}
					<div className="text-amber-400/50 font-mono text-sm tracking-widest uppercase mb-3">
						Edisi Ke-5
					</div>
					<h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
						Festival Kemerdekaan
						<br />
						<span
							className="text-transparent bg-clip-text"
							style={{
								backgroundImage:
									"linear-gradient(135deg, #ef4444, #f97316, #eab308)",
							}}>
							17 Agustus 2026
						</span>
					</h1>
					<p className="text-xl text-white/50 mb-4">
						Peringatan Kemerdekaan Republik Indonesia ke-81
					</p>
					<p className="text-white/30 max-w-2xl mx-auto mb-10">
						Program komunitas 71 hari dengan ekosistem kegiatan terlengkap
						turnamen multi-cabang, bazar UMKM, dan grand finale yang menjangkau
						±1.600 audiens aktif di kawasan strategis Taman Suko Asri.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
						<a href="#sponsorship" className="btn-primary text-base px-8 py-4">
							Lihat Sponsorship Opportunities →
						</a>
						<Link href="#kontak" className="btn-secondary text-base px-8 py-4">
							Hubungi Tim Kemitraan Kami
						</Link>
						<a href="#proposal" className="btn-secondary text-base px-8 py-4">
							Lihat Proposal Event →
						</a>
					</div>
					<img
						src="/img/logo-event.png"
						alt="tiga dua"
						className="relative size-20 z-20 mx-auto mt-10 bg-white rounded-full"
					/>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          EVENT OVERVIEW STATS
      ═══════════════════════════════════════════════ */}
			<section className="py-12 border-y border-white/5">
				<div className="overflow-hidden py-3 md:py-5 bg-white mt-12">
					<div className="marquee-track whitespace-nowrap">
						{[
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
						].map((brand, i) => (
							<span
								key={i}
								className="inline-flex items-center gap-6 mx-8 text-white/20 text-sm font-mono tracking-wider">
								<span className="w-1 h-1 rounded-full bg-amber-400/30 inline-block" />
								<img
									className="h-12 md:h-16"
									src={brand.imgSrc}
									alt={brand.name}
								/>
							</span>
						))}
					</div>
				</div>

				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{
								label: "Durasi Program",
								value: "71 Hari",
								sub: "20 Jun – 29 Agt 2026",
							},
							{
								label: "Audiens Langsung",
								value: "±1.600",
								sub: "Warga + Pengunjung Luar",
							},
							{
								label: "KK",
								value: "700+",
								sub: "Internal Perumahan",
							},
							{
								label: "Sponsor Aktif",
								value: "5 Brand",
								sub: "+ Slot Tersedia",
							},
						].map((item) => (
							<div
								key={item.label}
								className="text-center card-glass rounded-xl p-5">
								<div className="font-display text-3xl font-bold text-amber-400 mb-1">
									{item.value}
								</div>
								<div className="text-xs font-semibold text-white mb-1">
									{item.label}
								</div>
								<div className="text-[10px] text-white/30">{item.sub}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          EVENT OVERVIEW
      ═══════════════════════════════════════════════ */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<div className="section-label">Gambaran Umum Event</div>
							<h2 className="section-title text-white mb-6">
								Event
								<br />
								<span className="text-amber-400">3 Bulan Penuh</span>
							</h2>
							<div className="space-y-4 text-white/50 leading-relaxed">
								<p>
									Festival Kemerdekaan 17 Agustus 2026 merupakan program
									komunitas komprehensif yang dirancang untuk memaksimalkan
									keterlibatan warga Perumahan Taman Suko Asri dan masyarakat
									sekitar dalam rangka memperingati Hari Kemerdekaan Republik
									Indonesia ke-81.
								</p>
								<p>
									Program ini tidak sekadar rangkaian acara seremonial melainkan
									ekosistem kegiatan terstruktur yang menciptakan titik kontak
									brand yang konsisten selama 71 hari, mulai dari fase
									engagement komunitas, kompetisi multi-cabang, hingga puncak
									perayaan yang menghadirkan kepadatan audiens tertinggi.
								</p>
								<p>
									Dengan lokasi strategis di jalan utama berdekatan pasar besar,
									setiap kegiatan menjangkau tidak hanya warga internal, tetapi
									juga pengunjung publik yang melintas secara organik
									menciptakan eksposur brand yang jauh melampaui batas komunitas
									perumahan.
								</p>
							</div>
						</div>

						{/* Event info card */}
						<div className="space-y-4">
							{[
								{
									icon: "📅",
									label: "Periode Program",
									value: "20 Juni 2026 – 29 Agustus 2026",
								},
								{
									icon: "📍",
									label: "Lokasi Utama",
									value: "Kawasan RW Perumahan Taman Suko Asri, Sidoarjo",
								},
								{
									icon: "👥",
									label: "Target Audiens",
									value: "±1.600 warga + pengunjung luar",
								},
								{
									icon: "🏆",
									label: "Cabang Kompetisi",
									value: "8 Cabang Olahraga",
								},
								{
									icon: "🎪",
									label: "Grand Finale",
									value: "29 Agustus 2026  Bazar, Senam Massal, Pentas Seni",
								},
								{
									icon: "🤝",
									label: "Status Sponsorship",
									value: "5 Sponsor Aktif  Slot Masih Tersedia",
								},
							].map((item) => (
								<div
									key={item.label}
									className="flex items-start gap-4 p-4 card-glass rounded-xl">
									<div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-xl shrink-0">
										{item.icon}
									</div>
									<div>
										<div className="text-xs text-white/30 uppercase tracking-wider">
											{item.label}
										</div>
										<div className="text-sm text-white font-medium">
											{item.value}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          TIMELINE & ACTIVITIES
      ═══════════════════════════════════════════════ */}
			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 grid-pattern opacity-15" />
				<div className="relative max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<div className="section-label">Struktur Program</div>
						<h2 className="section-title text-white mb-4">
							Timeline & <span className="text-amber-400">Aktivitas</span>
						</h2>
					</div>

					<div className="space-y-8">
						{activeEvent.phases.map((phase, i) => (
							<div
								key={i}
								className={`card-glass rounded-2xl p-8 ${i === 2 ? "border-amber-400/20 bg-amber-400/3" : ""}`}>
								<div className="grid lg:grid-cols-3 gap-8 items-start">
									{/* Phase header */}
									<div>
										<div className="flex items-center gap-3 mb-3">
											<div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center text-navy-950 font-bold text-sm">
												{i + 1}
											</div>
											<div>
												<div className="text-xs text-amber-400/70 font-mono">
													{phase.phase}
												</div>
												{i === 2 && (
													<div className="flex items-center gap-1 text-[10px] text-red-400">
														<span className="pulse-dot" />
														Highlight Utama
													</div>
												)}
											</div>
										</div>
										<h3 className="font-display text-xl font-bold text-white mb-1">
											{phase.title}
										</h3>
										<div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs border border-amber-400/20 mb-3">
											{phase.period}
										</div>
									</div>

									{/* Description */}
									<div className="lg:col-span-2">
										<p className="text-white/50 leading-relaxed mb-5">
											{phase.desc}
										</p>
										<div className="flex flex-wrap gap-2">
											{phase.activities.map((activity) => (
												<span
													key={activity}
													className={`px-3 py-1.5 rounded-lg text-xs border ${
														i === 2
															? "bg-amber-400/10 border-amber-400/20 text-amber-300"
															: "bg-white/4 border-white/8 text-white/60"
													}`}>
													{activity}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          LOCATION ADVANTAGE
      ═══════════════════════════════════════════════ */}
			<section className="py-24">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-start">
						<div>
							<div className="section-label">Keunggulan Lokasi</div>
							<h2 className="section-title text-white mb-6">
								Lokasi Strategis
								<br />
								<span className="text-amber-400">Traffic Tinggi</span>
							</h2>
							<p className="text-white/50 leading-relaxed mb-8">
								Perumahan Taman Suko Asri bukan kawasan residensial biasa.
								Posisinya di jalur utama yang berdekatan dengan pasar besar
								menjadikannya titik pertemuan antara komunitas lokal dan arus
								pengunjung publik yang signifikan.
							</p>

							<div className="space-y-4">
								{[
									{
										icon: "🛣️",
										title: "Jalan Utama Bertraffic Tinggi",
										desc: "Terletak di jalur mobilitas utama kawasan, menghadirkan visibilitas brand kepada pengguna jalan yang tidak terbatas pada warga perumahan.",
									},
									{
										icon: "🏪",
										title: "Dekat Pusat Perdagangan",
										desc: "Berdekatan dengan pasar besar aktif, menarik arus pengunjung dari desa-desa sekitar yang datang untuk aktivitas perdagangan harian.",
									},
									{
										icon: "👨‍👩‍👧‍👦",
										title: "Mixed Demographic",
										desc: "Kombinasi unik: komunitas lokal yang solid + traffic publik eksternal. Audiens beragam dengan daya beli nyata yang tidak dapat dijangkau oleh event indoor biasa.",
									},
									{
										icon: "📈",
										title: "Organic Reach Amplification",
										desc: "Setiap event secara organik menjangkau pasar yang jauh lebih luas dari sekadar 700+ KK warga internal perumahan.",
									},
								].map((item) => (
									<div
										key={item.title}
										className="flex gap-4 p-4 card-glass rounded-xl">
										<div className="text-2xl shrink-0 mt-0.5">{item.icon}</div>
										<div>
											<div className="font-semibold text-white mb-1">
												{item.title}
											</div>
											<div className="text-sm text-white/40 leading-relaxed">
												{item.desc}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Map embed */}
						<div className="space-y-4">
							<div className="rounded-2xl overflow-hidden border border-white/10 h-80">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.815575039447!2d112.69436227696326!3d-7.374556772584949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e36bfb5be643%3A0x904f54e90cd64815!2sPerum%20Taman%20Sukoasri%20No.2%2C%20Dusun%20Legok%2C%20Suko%2C%20Kec.%20Sukodono%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061258!5e0!3m2!1sid!2sid!4v1780558681267!5m2!1sid!2sid"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Lokasi Perumahan Taman Suko Asri"
								/>
							</div>

							<div className="card-glass rounded-2xl p-6">
								<div className="section-label mb-4">Profil Audiens</div>
								<div className="space-y-3">
									{[
										{
											label: "KK (Internal)",
											value: "700+",
											bar: 70,
										},
										{
											label: "Pengunjung Luar / Publik",
											value: "900+",
											bar: 90,
										},
										{
											label: "Segmen Youth & Pelajar",
											value: "Tinggi",
											bar: 65,
										},
										{ label: "Segmen Keluarga", value: "Dominan", bar: 85 },
									].map((item) => (
										<div key={item.label}>
											<div className="flex justify-between text-xs mb-1.5">
												<span className="text-white/50">{item.label}</span>
												<span className="text-amber-400 font-medium">
													{item.value}
												</span>
											</div>
											<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
												<div
													className="h-full gold-gradient rounded-full"
													style={{ width: `${item.bar}%` }}
												/>
											</div>
										</div>
									))}
								</div>
								<div className="mt-4 pt-4 border-t border-white/5">
									<p className="text-xs text-white/30 italic">
										&ldquo;Mixed demographic dengan daya beli nyata yang kuat
										kombinasi komunitas lokal solid dan traffic publik
										eksternal.&rdquo;
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          GRAND FINALE HIGHLIGHT
      ═══════════════════════════════════════════════ */}
			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-amber-500/40 to-transparent" />
				<div className="absolute inset-0 grid-pattern opacity-20" />

				<div className="relative max-w-7xl mx-auto px-6">
					<div className="text-center mb-12">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs tracking-widest uppercase mb-4">
							🏆 Puncak Visibilitas
						</div>
						<h2 className="section-title text-white mb-4">
							Grand Finale
							<br />
							<span className="text-amber-400">29 Agustus 2026</span>
						</h2>
						<p className="text-white/40 max-w-xl mx-auto">
							Hari dengan kepadatan audiens tertinggi sepanjang program. Momen
							visibilitas brand paling optimal dengan integrasi seluruh elemen
							event secara bersamaan.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								icon: "🛍️",
								title: "Bazar UMKM",
								desc: "Area perdagangan aktif dengan lalu lintas pengunjung tertinggi. Peluang direct selling dan product sampling premium.",
							},
							{
								icon: "🏃",
								title: "Jalan Sehat & Senam Massal",
								desc: "Kegiatan partisipasi massal yang menggerakkan seluruh audiens keluar rumah. Eksposur brand di titik paling terbuka.",
							},
							{
								icon: "🎭",
								title: "Pentas Seni & Hiburan",
								desc: "Panggung utama dengan kapasitas penonton tertinggi. Kesempatan branding stage backdrop dan MC integration.",
							},
							{
								icon: "🥇",
								title: "Pengumuman & Pembagian Hadiah",
								desc: "Momen emosional tertinggi  hadiah berlogo sponsor, MC mention resmi, dan sertifikat penghargaan.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="card-glass rounded-2xl p-6 text-center hover:border-amber-400/20 transition-all group">
								<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
									{item.icon}
								</div>
								<h3 className="font-display text-xl font-bold text-white mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-white/40 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>

					<div className="mt-12 card-glass rounded-2xl p-8 border-amber-400/15 bg-amber-400/3 text-center">
						<div className="text-4xl mb-3">📍</div>
						<h3 className="font-display text-2xl font-bold text-white mb-2">
							Momen Visibilitas Tertinggi Sepanjang Program
						</h3>
						<p className="text-white/50 max-w-2xl mx-auto">
							Grand Finale 29 Agustus 2026 adalah puncak dari 71 hari program.
							Seluruh audiens terkonsentrasi dalam satu momentum menciptakan
							eksposur brand yang tidak bisa direplikasi oleh medium periklanan
							konvensional manapun.
						</p>
					</div>
				</div>

				<div
					id="sponsorship"
					className="overflow-hidden py-3 md:py-5 bg-white mt-12">
					<div className="marquee-track whitespace-nowrap">
						{[
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
						].map((brand, i) => (
							<span
								key={i}
								className="inline-flex items-center gap-6 mx-8 text-white/20 text-sm font-mono tracking-wider">
								<span className="w-1 h-1 rounded-full bg-amber-400/30 inline-block" />
								<img
									className="h-12 md:h-16"
									src={brand.imgSrc}
									alt={brand.name}
								/>
							</span>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          SPONSORSHIP PACKAGES
      ═══════════════════════════════════════════════ */}
			<section className="py-24 pt-10 relative overflow-hidden">
				<div className="absolute inset-0 grid-pattern opacity-20" />

				<div className="absolute inset-0 opacity-60">
					{images.map((img, i) => (
						<div
							key={i}
							className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
							style={{
								backgroundImage: `url(${img})`,
								opacity: i === index ? 1 : 0,
							}}
						/>
					))}

					{/* dark overlay for transparency effect */}
					<div className="absolute inset-0 bg-black/60" />
				</div>

				<div className="relative max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<div className="section-label">Peluang Kemitraan</div>
						<h2 className="section-title text-white mb-4">
							<span className="text-amber-400">Sponsorship</span> Opportunities
						</h2>
						<p className="text-white/80 max-w-xl mx-auto">
							Kami terbuka untuk berbagai bentuk kemitraan sponsor eksklusif,
							parsial, atau donatur. Setiap kerjasama dapat dikustomisasi sesuai
							tujuan pemasaran Anda.
						</p>
					</div>

					{/* Current Sponsors */}
					<div className="mb-12 card-glass rounded-2xl p-6 text-center">
						<div className="section-label mb-3">Sponsor Terdaftar</div>
						<div className="flex flex-wrap gap-3 justify-center mb-4">
							{activeEvent.currentSponsors.map((s) => (
								<span
									key={s}
									className="px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-medium">
									{s}
								</span>
							))}
							<span className="px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-medium animate-pulse">
								+ Anda Bisa di Sini
							</span>
						</div>
						<p className="text-xs text-white/30">
							Slot sponsorship masih tersedia hubungi kami untuk mendiskusikan
							posisi dan benefit yang sesuai
						</p>
					</div>

					{/* 3 Benefit categories */}
					<div className="grid md:grid-cols-3 gap-6 mb-12">
						{[
							{
								icon: "🏳️",
								title: "Brand Visibility",
								desc: "Eksposur visual brand di seluruh titik strategis event.",
								items: [
									"Banner utama & spanduk jalan",
									"Backdrop panggung utama",
									"Papan nama pinggir jalan",
									"Materi cetak & flyer event",
									"Branding area lomba",
								],
							},
							{
								icon: "🎯",
								title: "Activation Opportunities",
								desc: "Interaksi langsung antara brand dan konsumen.",
								items: [
									"Booth aktivasi di zona traffic",
									"Product sampling ke peserta",
									"Direct selling bazar",
									"Demo produk & promosi",
									"Database collection konsumen",
								],
							},
							{
								icon: "🎤",
								title: "Event Integration",
								desc: "Integrasi brand ke dalam alur acara secara organik.",
								items: [
									"Sponsor cabang lomba (hak penamaan)",
									"MC mention & brand shoutout",
									"Hadiah berlogo sponsor",
									"Sertifikat penghargaan resmi",
									"Konten digital & media sosial",
								],
							},
						].map((cat) => (
							<div key={cat.title} className="card-glass rounded-2xl p-6">
								<div className="text-3xl mb-3">{cat.icon}</div>
								<h3 className="font-display text-lg font-bold text-white mb-1">
									{cat.title}
								</h3>
								<p className="text-sm text-white/40 mb-4">{cat.desc}</p>
								<ul className="space-y-2">
									{cat.items.map((item) => (
										<li
											key={item}
											className="flex items-center gap-2 text-sm text-white/60">
											<span className="text-amber-400">✓</span> {item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					{/* Package tiers */}
					<div className="grid md:grid-cols-3 gap-6">
						{activeEvent.sponsorshipPackages.map((pkg, i) => (
							<div
								key={pkg.tier}
								className={`rounded-2xl p-6 relative overflow-hidden ${i === 0 ? "ring-1 ring-amber-400/40" : "card-glass"}`}
								style={
									i === 0
										? {
												background:
													"linear-gradient(135deg, rgba(212,160,23,0.12), rgba(212,160,23,0.04))",
											}
										: {}
								}>
								{i === 0 && (
									<div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-amber-400 text-navy-950 text-[10px] font-bold uppercase tracking-wider">
										Recommended
									</div>
								)}
								<div
									className={`inline-flex px-3 py-1 rounded-full text-xs font-bold mb-3 bg-gradient-to-r ${pkg.color} ${pkg.textColor}`}>
									{pkg.price}
								</div>
								<h3 className="font-display text-lg font-bold text-white mb-4">
									{pkg.tier}
								</h3>
								<ul className="space-y-2.5">
									{pkg.benefits.map((benefit) => (
										<li
											key={benefit}
											className="flex items-start gap-2 text-sm text-white/60">
											<span className="text-amber-400 shrink-0 mt-0.5">✓</span>
											{benefit}
										</li>
									))}
								</ul>
								{/* <div className="mt-6 pt-4 border-t border-white/5">
									<a
										href={`https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.tier)}%20untuk%20event%2017%20Agustus%202026`}
										target="_blank"
										rel="noopener noreferrer"
										className={`w-full flex justify-center items-center py-3 rounded-xl font-semibold text-sm transition-all ${
											i === 0 ? "btn-primary" : "btn-secondary"
										}`}>
										Diskusikan Paket Ini
									</a>
								</div> */}
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<p className="text-white/30 text-sm">
							💡 Semua dapat dikustomisasi. Kami terbuka untuk diskusi benefit,
							nilai, dan struktur kemitraan yang paling sesuai dengan kebutuhan
							Anda.
						</p>
					</div>

					<div className="mt-6 pt-4 border-t border-white/5">
						<a
							href={`https://wa.me/628123456789?text=Halo`}
							target="_blank"
							rel="noopener noreferrer"
							className={`w-full flex justify-center items-center py-3 rounded-xl font-semibold text-sm transition-all ${"btn-primary"}`}>
							Diskusikan Kemitraan
						</a>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          WHY SPONSOR (Event version)
      ═══════════════════════════════════════════════ */}
			<section className="pt-16 border-t border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								icon: "✅",
								title: "Kehadiran Audiens Terjamin",
								desc: "Event rutin tahunan dengan basis komunitas loyal. Kehadiran audiens bukan asumsi  ini adalah fakta terverifikasi dari 4 penyelenggaraan sebelumnya.",
							},
							{
								icon: "🌍",
								title: "Lingkungan Visibilitas Tinggi",
								desc: "Lokasi jalan utama + proximity pasar besar = organik reach yang jauh melampaui komunitas internal. Brand Anda dilihat oleh siapapun yang melintas.",
							},
							{
								icon: "🤝",
								title: "Interaksi Konsumen Langsung",
								desc: "Tidak ada filter. Tidak ada algoritma. Brand Anda berinteraksi langsung dengan konsumen nyata di lingkungan kehidupan sehari-hari mereka.",
							},
						].map((item) => (
							<div
								key={item.title}
								className="card-glass rounded-2xl p-6 text-center">
								<div className="text-3xl mb-3">{item.icon}</div>
								<h3 className="font-bold text-white mb-2">{item.title}</h3>
								<p className="text-sm text-white/40 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Downloads section */}
			<section id="proposal" className="pt-28 pb-12 border-t border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<div className="card-glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
						<div>
							<div className="section-label mb-1">Materi Kemitraan</div>
							<h3 className="font-display text-xl font-bold text-white">
								Lihat Proposal Sponsorship
							</h3>
							<p className="text-white/40 text-sm mt-1">
								Proposal lengkap tersedia hubungi dari tim kami
							</p>
						</div>
						<div className="flex gap-3 shrink-0">
							<a
								href={`https://drive.google.com/file/d/1AaWI4YF3aqeNpgFrEGVU9daKW6c6Mqjr/view?usp=sharing`}
								target="_blank"
								rel="noopener noreferrer"
								className="btn-primary">
								📄 Lihat Proposal PDF
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<ContactSection eventSpecific={true} />

			<Footer />
		</main>
	);
}
