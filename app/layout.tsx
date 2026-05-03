import type { Metadata } from "next";
import { Righteous, Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
  display: "swap",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ran the DJ | רן הדי ג׳יי — אירועים בישראל",
  description:
    "די ג׳יי לאירועים, חתונות ומסיבות בישראל. רן וקנין — אנרגיה, מוזיקה וחיוך. הזמינו עכשיו.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${righteous.variable}`}>
      <body className="min-h-screen bg-brand-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
