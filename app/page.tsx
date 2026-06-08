import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import { eventHistory, sponsorBenefits, activeEvent } from "@/lib/data";

export default function Home() {
	return (
		<main className="min-h-screen bg-navy-950 noise-bg">
			<Navbar />

			{/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
				{/* Background layers */}
				<div className="absolute inset-0 grid-pattern opacity-40" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/20 to-navy-950" />

				{/* Radial glow */}
				<div
					className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
					style={{
						background:
							"radial-gradient(ellipse, rgba(212,160,23,0.08) 0%, transparent 70%)",
					}}
				/>

				{/* Decorative circles */}
				<div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-amber-400/5 animate-pulse-slow" />
				<div className="absolute top-24 right-24 w-56 h-56 rounded-full border border-amber-400/8" />
				<div className="absolute bottom-40 left-10 w-40 h-40 rounded-full border border-amber-400/5" />

				<div className="relative max-w-7xl mx-auto px-6 text-center">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs tracking-[0.2em] uppercase mb-8 animate-fade-in">
						<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
						Platform Sponsorship Komunitas Premium
					</div>

					{/* Headline */}
					<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 animate-fade-up">
						Jangkau 1.600+
						<br />
						<span
							className="text-transparent bg-clip-text"
							style={{
								backgroundImage:
									"linear-gradient(135deg, #d4a017, #f0c040, #ca8a04)",
							}}>
							Audiens Aktif
						</span>
						<br />
						Secara Langsung
					</h1>

					{/* Subheadline */}
					<p
						className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-4 leading-relaxed"
						style={{ animationDelay: "0.2s" }}>
						Penyelenggara event komunitas dengan rekam jejak{" "}
						<strong className="text-white">36+ tahun</strong> (1988–sekarang).
						Platform sponsorship offline premium di kawasan strategis Taman Suko
						Asri, Sidoarjo.
					</p>

					<p
						className="text-sm text-amber-400/70 mb-12"
						style={{ animationDelay: "0.3s" }}>
						Trusted by: Telkom · Sosro · JTV · Jawa Pos · Japfa Comfeed · dan
						10+ brand lainnya
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link
							href="/active-event#sponsorship"
							className="btn-primary text-base px-8 py-4">
							Lihat Sponsorship Opportunities →
						</Link>
						<Link href="/#kontak" className="btn-secondary text-base px-8 py-4">
							Hubungi Tim Kemitraan
						</Link>
					</div>

					{/* Scroll indicator */}
					{/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
						<div className="text-[10px] uppercase tracking-widest text-white">
							Scroll
						</div>
						<div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
					</div> */}
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          STATS
      ═══════════════════════════════════════════════ */}
			<StatsSection />

			<div className="overflow-hidden py-5 bg-white">
				<div className="marquee-track whitespace-nowrap">
					{[
						{ name: "Telkom", imgSrc: "/logo/telkom.png" },
						{ name: "Sosro", imgSrc: "/logo/sosro.png" },
						{ name: "JTV", imgSrc: "/logo/jtv.png" },
						{ name: "Jawa Pos", imgSrc: "/logo/jawa-pos.png" },
						{ name: "Antangin", imgSrc: "/logo/antangin.png" },
						{ name: "IndiHome", imgSrc: "/logo/indihome.png" },
						{ name: "Japfa Food", imgSrc: "/logo/japfa.png" },
						{
							name: "Gudang Garam Surya",
							imgSrc: "/logo/gudang-garam.png",
						},
						{ name: "Nurani", imgSrc: "/logo/nurani.png" },
						{ name: "Sogood", imgSrc: "/logo/sogood.png" },
						{ name: "Gajah Duduk", imgSrc: "/logo/gajah-duduk.png" },
						{ name: "Aslah", imgSrc: "/logo/aslah.png" },
						{ name: "Hisana", imgSrc: "/logo/hisana.png" },
						{ name: "Tali Jagat", imgSrc: "/logo/tali-jagat.png" },
					].map((brand, i) => (
						<span
							key={i}
							className="inline-flex items-center gap-6 mx-8 text-white/20 text-sm font-mono tracking-wider">
							<span className="w-1 h-1 rounded-full bg-amber-400/30 inline-block" />
							<img className="h-16" src={brand.imgSrc} alt={brand.name} />
						</span>
					))}
				</div>
			</div>

			{/* ═══════════════════════════════════════════════
          FEATURED ACTIVE EVENT
      ═══════════════════════════════════════════════ */}
			<section className="py-24 relative overflow-hidden bg-white">
				<div className="absolute inset-0 bg-gradient-to-r from-amber-500/8 via-amber-400/100 to-transparent" />
				<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-amber-400/80 to-transparent" />

				<div className="relative max-w-7xl mx-auto px-6">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left */}
						<div>
							<div className="flex items-center gap-3 mb-4 text-xl font-bold ">
								<div className="section-label">Event Aktif</div>
								<div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 ">
									<span className="pulse-dot" />
									Akan Berlangsung
								</div>
							</div>

							<h2 className="section-title text-black mb-4">
								17 Agustus
								<br />
								<span className="text-amber-500">2026 Edisi ke-5</span>
							</h2>

							<p className="text-black/50 leading-relaxed mb-8 max-w-lg">
								Program komunitas 71 hari (20 Juni – 29 Agustus 2026) dengan
								ekosistem kegiatan terlengkap. Melibatkan ±1.600 audiens aktif
								dari 700+ KK dan pengunjung luar di kawasan jalan utama dekat
								pasar besar Taman Suko Asri.
							</p>

							<div className="grid grid-cols-2 gap-4 mb-8">
								{[
									{ label: "Durasi Program", value: "71 Hari" },
									{ label: "Target Audiens", value: "±1.600" },
									{ label: "KK", value: "700+" },
									{ label: "Sponsor Aktif", value: "5 Brand" },
								].map((item) => (
									<div
										key={item.label}
										className="card-glass border  bg-[var(--navy-mid)] rounded-xl p-4">
										<div className="text-2xl font-display font-bold text-amber-300 mb-1">
											{item.value}
										</div>
										<div className="text-xs text-white/40 uppercase tracking-wider">
											{item.label}
										</div>
									</div>
								))}
							</div>

							<div className="flex gap-3 flex-wrap">
								<Link href="/active-event" className="btn-primary bg-amber-400">
									Detail Event Lengkap →
								</Link>
								<Link
									href="/active-event#sponsorship"
									className="btn-secondary  bg-[var(--navy-mid)] hover:bg-black">
									Sponsorship Opportunities →
								</Link>
							</div>
						</div>

						{/* Right - Event Card */}
						<div className="relative ">
							<div className="card-glass bg-[var(--navy-mid)] rounded-3xl p-8 relative overflow-hidden gradient-border">
								<div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl" />

								<div className="relative">
									{/* Event header */}
									<div className="flex items-start justify-between mb-6">
										<div>
											<div className="text-xs text-amber-400/70 uppercase tracking-widest mb-1">
												Perumahan Taman Suko Asri
											</div>
											<div className="font-display text-2xl font-bold text-white">
												Festival 17 Agustus
											</div>
											<div className="text-amber-400 font-display text-lg">
												2026
											</div>
										</div>
										<div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-2xl shrink-0">
											🇮🇩
										</div>
									</div>

									{/* Timeline phases */}
									<div className="space-y-3 mb-6">
										{activeEvent.phases.map((phase, i) => (
											<div
												key={i}
												className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
												<div className="w-7 h-7 rounded-lg gold-gradient flex items-center justify-center text-navy-950 text-xs font-bold shrink-0">
													{i + 1}
												</div>
												<div>
													<div className="text-xs font-semibold text-white">
														{phase.title}
													</div>
													<div className="text-[10px] text-white/40">
														{phase.period}
													</div>
												</div>
											</div>
										))}
									</div>

									{/* Current sponsors */}
									<div className="border-t border-white/5 pt-4 ">
										<div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">
											Sponsor Terdaftar
										</div>
										<div className="flex flex-wrap gap-2">
											{activeEvent.currentSponsors.map((s) => (
												<span
													key={s}
													className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs">
													{s}
												</span>
											))}
											<span className="px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs animate-pulse">
												+ Slot Tersedia
											</span>
										</div>
									</div>
								</div>
							</div>

							{/* Decorative */}
							<div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 rounded-full border border-amber-400/10" />
							<div className="absolute -z-10 -bottom-12 -right-12 w-80 h-80 rounded-full border border-amber-400/5" />
						</div>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          EXPERIENCE TIMELINE
      ═══════════════════════════════════════════════ */}
			<section id="pengalaman" className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 grid-pattern opacity-20" />
				<div className="max-w-7xl mx-auto px-6 relative">
					<div className="text-center mb-16">
						<div className="section-label">Rekam Jejak 1988–2026</div>
						<h2 className="section-title text-white mb-4">
							36+ Tahun Membangun
							<br />
							<span className="text-amber-400">Ekosistem Event Terpercaya</span>
						</h2>
						<p className="text-white/40 max-w-xl mx-auto">
							Dari event puluhan ribu peserta hingga platform sponsorship
							komunitas terstruktur rekam jejak yang membuktikan kapasitas dan
							kepercayaan.
						</p>
					</div>

					{/* Timeline */}
					<div className="ms-[5vw] relative">
						{/* Vertical line */}
						<div className="hidden lg:block absolute left-[62%] top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/30 via-amber-400/10 to-transparent" />

						<div className="space-y-12">
							{eventHistory.map((event, i) => (
								<div
									key={event.id}
									className={`relative grid lg:grid-cols-[60%_40%] gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
									{/* Timeline dot */}
									<div className="hidden lg:flex absolute left-[62%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
										<div
											className={`w-4 h-4 rounded-full bg-gradient-to-br ${event.color} ring-2 ring-white`}
										/>
									</div>
									{/* Card */}
									<div
										className={`card-glass rounded-2xl p-6 card-hover ${event.isActive ? "border-amber-400/30 bg-amber-400/5" : ""}`}>
										<div className="flex items-start justify-between mb-4">
											<div>
												<div
													className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-2 ${
														event.isActive
															? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
															: "bg-white/5 text-white/50 border border-white/10"
													}`}>
													{event.isActive && <span className="pulse-dot" />}
													{event.badge}
												</div>
												<h3 className="font-display text-xl font-bold text-white">
													{event.title}
												</h3>
												<p className="text-amber-400 font-mono text-sm">
													{event.year}
												</p>
											</div>
											<div
												className={`text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${event.color} opacity-30`}>
												{event.year.split("–")[0]}
											</div>
										</div>

										<div className="grid grid-cols-2 gap-3 mb-4 text-xs">
											<div className="bg-white/3 rounded-lg p-2.5">
												<div className="text-white/30 uppercase tracking-wider mb-0.5">
													Lokasi
												</div>
												<div className="text-white/80">{event.location}</div>
											</div>
											<div className="bg-white/3 rounded-lg p-2.5">
												<div className="text-white/30 uppercase tracking-wider mb-0.5">
													Audiens
												</div>
												<div className="text-amber-400 font-bold">
													{event.audience}
												</div>
											</div>
										</div>

										{event.headliners.length > 0 && (
											<div className="mb-3">
												<div className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">
													Pembicara / Artis
												</div>
												<div className="flex flex-wrap gap-1.5">
													{event.headliners.map((h) => (
														<span
															key={h}
															className="px-2 py-0.5 rounded text-xs bg-indigo-400/10 text-indigo-300 border border-indigo-400/20">
															{h}
														</span>
													))}
												</div>
											</div>
										)}

										<p className="text-sm text-white/50 leading-relaxed mb-4">
											{event.outcome}
										</p>

										<div>
											<div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">
												Sponsor / Media Partner
											</div>
											<div className="flex flex-wrap gap-1.5">
												{event.sponsors.map((s) => (
													<span
														key={s}
														className="px-2.5 py-0.5 rounded-full text-xs bg-white/5 text-white/60 border border-white/10">
														{s}
													</span>
												))}
											</div>
										</div>

										{event.isActive && (
											<div className="mt-4 pt-4 border-t border-amber-400/10">
												<Link
													href="/active-event"
													className="btn-primary text-xs py-2.5 px-5">
													Detail Event Aktif →
												</Link>
											</div>
										)}
									</div>
									{/* Spacer for alternating layout */}
									<div />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          WHY SPONSOR US
      ═══════════════════════════════════════════════ */}
			<section id="tentang-kami" className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
				<div className="relative max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<div className="section-label">Proposisi Nilai</div>
						<h2 className="section-title text-white mb-4">
							Mengapa Bermitra
							<br />
							<span className="text-amber-400">Bersama Kami?</span>
						</h2>
						<p className="text-white/40 max-w-xl mx-auto">
							Ekosistem event komunitas terstruktur yang menghadirkan nilai
							pemasaran terukur bagi brand Anda di lingkungan yang tepercaya dan
							konsisten.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{sponsorBenefits.map((benefit, i) => (
							<div
								key={benefit.title}
								className="card-glass rounded-2xl p-6 card-hover group">
								<div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
									{benefit.icon}
								</div>
								<h3 className="font-display text-lg font-bold text-white mb-2">
									{benefit.title}
								</h3>
								<p className="text-sm text-white/50 leading-relaxed">
									{benefit.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          SPONSOR MARQUEE
      ═══════════════════════════════════════════════ */}
			<section className="py-12 border-y border-white/5 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 mb-10 text-center">
					<div className="text-[18px] uppercase tracking-[0.3em] text-white/60">
						Brand Yang Pernah Bermitra
					</div>
				</div>
				<div className="overflow-hidden">
					<div className="marquee-track whitespace-nowrap">
						{[
							{ name: "Telkom", imgSrc: "/logo/telkom.png" },
							{ name: "Sosro", imgSrc: "/logo/sosro.png" },
							{ name: "JTV", imgSrc: "/logo/jtv.png" },
							{ name: "Jawa Pos", imgSrc: "/logo/jawa-pos.png" },
							{ name: "Antangin", imgSrc: "/logo/antangin.png" },
							{ name: "IndiHome", imgSrc: "/logo/indihome.png" },
							{ name: "Japfa Comfeed", imgSrc: "/logo/japfa.png" },
							{
								name: "Gudang Garam Surya",
								imgSrc: "/logo/gudang-garam.png",
							},
							{ name: "Nurani", imgSrc: "/logo/nurani.png" },
							{ name: "Sogood", imgSrc: "/logo/sogood.png" },
							{ name: "Gajah Duduk", imgSrc: "/logo/gajah-duduk.png" },
							{ name: "Aslah", imgSrc: "/logo/aslah.png" },
							{ name: "Hisana", imgSrc: "/logo/hisana.png" },
							{ name: "Tali Jagat", imgSrc: "/logo/tali-jagat.png" },
						].map((brand, i) => (
							<span
								key={i}
								className="inline-flex items-center gap-6 mx-8 text-white/20 text-sm font-mono tracking-wider">
								<span className="w-1 h-1 rounded-full bg-amber-400/30 inline-block" />
								<img className="h-20" src={brand.imgSrc} alt={brand.name} />
							</span>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════ */}
			<section className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 grid-pattern opacity-20" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
				<div className="relative max-w-4xl mx-auto px-6 text-center">
					<div className="section-label">Ambil Tindakan Sekarang</div>
					<h2 className="section-title text-white mb-6">
						Slot Sponsorship
						<br />
						<span className="text-amber-400">Masih Tersedia</span>
					</h2>
					<p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
						Jelajahi peluang sponsorship aktif dalam program komunitas
						beraudiens tinggi. Bergabunglah bersama brand-brand terpercaya yang
						telah lebih dahulu menjangkau komunitas Taman Suko Asri secara
						langsung.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/active-event"
							className="btn-primary text-base px-10 py-4">
							Lihat Event Aktif 2026 →
						</Link>
						<Link
							href="/#kontak"
							className="btn-secondary text-base px-10 py-4">
							Jadi Sponsor
						</Link>
					</div>
				</div>
			</section>

			{/* ═══════════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════════ */}
			<ContactSection />

			<Footer />
		</main>
	);
}
