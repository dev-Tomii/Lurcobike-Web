import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "./provider";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lurcobike web",
	description: "Mayoristas en bicicleteria. Marca Argentina",
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={montserrat.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
