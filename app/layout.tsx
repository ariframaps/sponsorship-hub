import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title:
		"Taman Suko Asri Event – Sponsorship Hub | Mitra Komunitas Terpercaya Sejak 1988",
	description:
		"Platform sponsorship komunitas premium dengan rekam jejak 36+ tahun penyelenggaraan event. Jangkau 1.600+ audiens aktif di kawasan Taman Suko Asri melalui kemitraan brand yang terukur.",
	keywords:
		"sponsorship event komunitas, sponsor 17 agustus, brand activation sidoarjo, community event sponsorship",
	openGraph: {
		title: "Taman Suko Asri Event Sponsorship Hub",
		description:
			"Mitra komunitas terpercaya sejak 1988. Jangkauan 1.600+ audiens aktif.",
		type: "website",
		locale: "id_ID",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="id" className="scroll-smooth">
			<body className="font-body antialiased bg-navy-950 text-white">
				{children}
			</body>
		</html>
	);
}
