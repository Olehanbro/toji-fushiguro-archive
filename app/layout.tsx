import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL
      ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, "")}`
      : "http://localhost:3000",
  ),
  title: "Тоджі Фушіґуро — Вбивця чаклунів",
  description:
    "Фан-сайт про Тоджі Фушіґуро — найнебезпечнішу аномалію світу «Магічної битви».",
  openGraph: {
    title: "Тоджі Фушіґуро — Вбивця чаклунів",
    description:
      "Нуль проклятої енергії. Абсолютне тіло. Досьє найнебезпечнішої аномалії світу джюджюцу.",
    locale: "uk_UA",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 908 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Тоджі Фушіґуро — Вбивця чаклунів",
    description: "Фан-архів персонажа «Магічної битви».",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
