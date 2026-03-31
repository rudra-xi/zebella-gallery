import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothLenisScroll from "@/components/smooth-lenis-scroll";

const dmSerif = DM_Serif_Display({
	variable: "--font-dm-serif",
	weight: ["400"],
	subsets: ["latin"],
});

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
	weight: ["400", "500"],
});

export const metadata: Metadata = {
	title: "Zebella | Tropical Nomadic Elegance",
	description:
		"Zebella is a vibrant visual sanctuary exploring the intersection of bold tropical prints, artisanal gold, and raw earth textures. A study in nomadic luxury and cultural pattern.",
	icons: {
		icon: [
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
			{
				url: "/favicon.ico",
				sizes: "any",
			},
		],
		apple: "/apple-icon.png",
	},
	authors: [{ name: "rudra-xi", url: "https://rudra-geek-nook.vercel.app/" }],
	creator: "rudra-xi",
	keywords: [
		"Zebella gallery",
		"tropical fashion photography",
		"artisanal gold jewelry",
		"bold print aesthetic",
		"nomadic luxury",
		"maximalist visual gallery",
		"cultural portraiture",
		"palm motif design",
	],
	openGraph: {
		title: "Zebella — Patterns of the Sun",
		description:
			"An immersive visual journey through tropical motifs and gilded adornments. Exploring the unfiltered beauty of patterned textiles and sun-drenched textures.",
		url: "https://zebella-gallery.vercel.app/",
		type: "website",
		siteName: "Zebella",
		images: [
			{
				url: "https://zebella-gallery.vercel.app/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Zebella – A study of tropical prints and golden adornments",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Zebella | Tropical Visual Gallery",
		description:
			"A curated, scroll-first exploration of bold textiles, golden accents, and the raw nomadic aesthetic.",
		creator: "rudra-xi",
		images: ["https://zebella-gallery.vercel.app/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${dmSans.className} ${dmSerif.variable} antialiased`}
			>
				<SmoothLenisScroll>{children}</SmoothLenisScroll>
			</body>
		</html>
	);
}
