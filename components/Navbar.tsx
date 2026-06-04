"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? "py-3 bg-navy-950/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
					: "py-5 bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3 group">
					<div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center text-navy-950 font-display font-bold text-sm">
						<img src="/img/logo-event.png" alt="" />
					</div>
					<div>
						<div className="font-display font-bold text-sm leading-none text-white">
							Taman Suko Asri Event
						</div>
						<div className="text-[10px] text-amber-400/70 tracking-widest uppercase leading-none mt-0.5">
							Sponsorship Hub
						</div>
					</div>
				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-8">
					<Link
						href="/#tentang-kami"
						className="text-sm text-white/60 hover:text-white transition-colors">
						Tentang Kami
					</Link>
					<Link
						href="/#pengalaman"
						className="text-sm text-white/60 hover:text-white transition-colors">
						Rekam Jejak
					</Link>
					<Link
						href="/active-event"
						className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
						<span className="pulse-dot inline-block"></span>
						Event Aktif
					</Link>
					<Link
						href="/#kontak"
						className="text-sm text-white/60 hover:text-white transition-colors">
						Kontak
					</Link>
					<Link
						href="/active-event#sponsorship"
						className="btn-primary text-xs px-5 py-2.5">
						Jadi Sponsor
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden flex flex-col gap-1.5 p-2"
					onClick={() => setMenuOpen(!menuOpen)}>
					<span
						className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
					/>
					<span
						className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-navy-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
					<Link
						href="/#tentang-kami"
						className="text-white/70 hover:text-white"
						onClick={() => setMenuOpen(false)}>
						Tentang Kami
					</Link>
					<Link
						href="/#pengalaman"
						className="text-white/70 hover:text-white"
						onClick={() => setMenuOpen(false)}>
						Rekam Jejak
					</Link>
					<Link
						href="/active-event"
						className="text-white/70 hover:text-white flex items-center gap-2"
						onClick={() => setMenuOpen(false)}>
						<span className="pulse-dot inline-block"></span>
						Event Aktif 2026
					</Link>
					<Link
						href="/#kontak"
						className="text-white/70 hover:text-white"
						onClick={() => setMenuOpen(false)}>
						Kontak
					</Link>
					<Link
						href="/active-event#sponsorship"
						className="btn-primary text-center justify-center"
						onClick={() => setMenuOpen(false)}>
						Jadi Sponsor
					</Link>
				</div>
			)}
		</nav>
	);
}
