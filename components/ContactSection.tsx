"use client";

import { useState } from "react";
import { contactInfo } from "@/lib/data";

interface ContactSectionProps {
	eventSpecific?: boolean;
}

export default function ContactSection({
	eventSpecific = false,
}: ContactSectionProps) {
	const [form, setForm] = useState({
		nama: "",
		perusahaan: "",
		email: "",
		pesan: "",
	});
	const [sent, setSent] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const msg = encodeURIComponent(
			`Halo, saya ${form.nama} dari ${form.perusahaan}.\n\n${form.pesan}\n\nEmail: ${form.email}`,
		);
		window.open(`https://wa.me/${contactInfo.whatsapp}?text=${msg}`, "_blank");
		setSent(true);
	};

	return (
		<section id="kontak" className="py-24 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0 grid-pattern opacity-30" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

			<div className="relative max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-1 gap-16 items-start">
					{/* Left */}
					<div>
						<div className="section-label">
							{eventSpecific
								? "Tim Sponsorship Event"
								: "Kemitraan & Sponsorship"}
						</div>
						<h2 className="section-title text-white mb-6">
							Mulai Diskusi
							<br />
							<span className="text-amber-400">Kemitraan Anda</span>
						</h2>
						<p className="text-white/50 leading-relaxed mb-8 max-w-md">
							{eventSpecific
								? "Slot sponsorship masih tersedia. Tim kami siap mendiskusikan paket kemitraan yang sesuai dengan tujuan pemasaran dan anggaran Anda."
								: "Kami terbuka untuk berbagai bentuk kemitraan  sponsor utama, parsial, hingga donatur. Hubungi tim kami untuk mendiskusikan proposal yang disesuaikan."}
						</p>

						<div className="space-y-4 mb-8">
							{[
								{
									icon: "📱",
									label: "WhatsApp",
									value: contactInfo.whatsappDisplay,
									href: `https://wa.me/${contactInfo.whatsapp}?text=Halo,%20saya%20ingin%20mengetahui%20informasi%20sponsorship`,
								},
								// {
								// 	icon: "✉️",
								// 	label: "Email",
								// 	value: contactInfo.email,
								// 	href: `mailto:${contactInfo.email}`,
								// },
								{
									icon: "📍",
									label: "Lokasi",
									value: contactInfo.address,
									href: "#",
								},
							].map((item) => (
								<a
									key={item.label}
									href={item.href}
									target={item.href.startsWith("http") ? "_blank" : undefined}
									rel="noopener noreferrer"
									className="flex items-center gap-4 p-4 card-glass rounded-xl hover:border-amber-400/30 transition-all group">
									<div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center text-lg shrink-0">
										{item.icon}
									</div>
									<div>
										<div className="text-xs text-white/40 uppercase tracking-wider">
											{item.label}
										</div>
										<div className="text-sm text-white group-hover:text-amber-400 transition-colors">
											{item.value}
										</div>
									</div>
								</a>
							))}
						</div>

						<a
							href={`https://wa.me/${contactInfo.whatsapp}?text=Halo,%20saya%20tertarik%20untuk%20menjadi%20sponsor%20event%2017%20Agustus%202026%20di%20Perumahan%20Taman%20Suko%20Asri`}
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary inline-flex gap-3 text-base">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
							</svg>
							Hubungi via WhatsApp
						</a>
					</div>

					{/* Right - Form */}
					{/* <div className="card-glass rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display text-xl text-white mb-2">Terima Kasih!</h3>
                <p className="text-white/50 text-sm">Pesan Anda akan diteruskan via WhatsApp. Tim kami akan menghubungi Anda segera.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-amber-400 text-sm underline">Kirim pesan lain</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="section-label">Formulir Kemitraan</div>
                <h3 className="font-display text-xl text-white mb-6">Kirim Permintaan Informasi</h3>

                {[
                  { id: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda', type: 'text' },
                  { id: 'perusahaan', label: 'Perusahaan / Instansi', placeholder: 'Nama perusahaan', type: 'text' },
                  { id: 'email', label: 'Alamat Email', placeholder: 'email@perusahaan.com', type: 'email' },
                ].map(field => (
                  <div key={field.id}>
                    <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={(form as Record<string, string>)[field.id]}
                      onChange={e => setForm(prev => ({ ...prev, [field.id]: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/50 focus:bg-white/8 transition-all"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs text-white/50 mb-1.5 uppercase tracking-wider">Pesan / Pertanyaan</label>
                  <textarea
                    placeholder="Saya tertarik untuk mengetahui peluang sponsorship event 17 Agustus 2026..."
                    value={form.pesan}
                    onChange={e => setForm(prev => ({ ...prev, pesan: e.target.value }))}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-amber-400/50 transition-all resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-sm py-4">
                  Kirim via WhatsApp →
                </button>
                <p className="text-xs text-white/25 text-center">Pesan akan dikirim melalui WhatsApp untuk respons lebih cepat</p>
              </form>
            )}
          </div> */}
				</div>
			</div>
		</section>
	);
}
