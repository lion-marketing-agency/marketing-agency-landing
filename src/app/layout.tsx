import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lion.dev | Создаём сайты и боты, которые продают",
  description: "Студия разработки сайтов и Telegram-ботов. От лендинга до интернет-магазина за 3-7 дней. Реальный результат для вашего бизнеса.",
  keywords: ["разработка сайтов", "лендинги", "telegram боты", "веб-разработка", "lion.dev", "студия"],
  authors: [{ name: "Lion.dev" }],
  creator: "Lion.dev",
  publisher: "Lion.dev",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://lion.dev",
    title: "Lion.dev | Создаём сайты и боты, которые продают",
    description: "Студия разработки сайтов и Telegram-ботов. От лендинга до интернет-магазина за 3-7 дней.",
    siteName: "Lion.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion.dev | Создаём сайты и боты, которые продают",
    description: "Студия разработки сайтов и Telegram-ботов. От лендинга до интернет-магазина за 3-7 дней.",
  },
  icons: {
    icon: [
      { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/logo/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/logo/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
 