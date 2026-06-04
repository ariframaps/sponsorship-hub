import Link from "next/link";
import { contactInfo } from "@/lib/data";

export default function Footer() {
	return (
		<footer className="relative border-t border-white/5 bg-navy-950 pt-16 pb-8">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid md:grid-cols-3 gap-10 mb-12">
					{/* Brand */}
					<div>
						<div className="flex items-center gap-3 mb-4">
							<div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-navy-950 font-display font-bold text-sm">
								SE
							</div>
							<div>
								<div className="font-display font-bold text-white">
									Taman Suko Asri Event
								</div>
								<div className="text-[10px] text-amber-400/70 tracking-widest uppercase">
									Sponsorship Hub
								</div>
							</div>
						</div>
						<p className="text-sm text-white/40 leading-relaxed">
							Platform sponsorship komunitas premium dengan rekam jejak 36+
							tahun penyelenggaraan event berkualitas di kawasan Taman Suko
							Asri.
						</p>
					</div>

					{/* Links */}
					<div>
						<div className="section-label mb-4">Navigasi</div>
						<div className="flex flex-col gap-2">
							{[
								{ label: "Beranda", href: "/" },
								{ label: "Rekam Jejak", href: "/#pengalaman" },
								{ label: "Event Aktif 2026", href: "/active-event" },
								{
									label: "Peluang Sponsorship",
									href: "/active-event#sponsorship",
								},
								{ label: "Hubungi Kami", href: "/#kontak" },
							].map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-sm text-white/40 hover:text-amber-400 transition-colors">
									{item.label}
								</Link>
							))}
						</div>
					</div>

					{/* Contact */}
					<div>
						<div className="section-label mb-4">Kontak Kemitraan</div>
						<div className="flex flex-col gap-3">
							<a
								href={`https://wa.me/${contactInfo.whatsapp}?text=Halo,%20saya%20tertarik%20untuk%20mengetahui%20peluang%20sponsorship%20event%2017%20Agustus%202026`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-sm text-white/50 hover:text-emerald-400 transition-colors">
								<span>📱</span> {contactInfo.whatsappDisplay}
							</a>
							{/* <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-amber-400 transition-colors">
                <span>✉️</span> {contactInfo.email}
              </a> */}
							<div className="flex items-start gap-2 text-sm text-white/40">
								<span>📍</span> {contactInfo.address}
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-white/20">
						© 2026 {contactInfo.organization}. All rights reserved.
					</p>
					<p className="text-xs text-white/20">
						Penyelenggara Event Komunitas Terpercaya Sejak 1988
					</p>
				</div>
			</div>
		</footer>
	);
}
