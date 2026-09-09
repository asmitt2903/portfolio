import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import KeepAlive from "@/components/KeepAlive";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Asmit Raj | Full Stack Developer & Computer Science Engineer",
  description:
    "Official developer portfolio of Asmit Raj, a Full Stack Developer and B.Tech CSE student at Lovely Professional University. Specializing in Next.js, React, Node.js, Express, MongoDB, and modern web applications.",
  keywords: [
    "Asmit Raj",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Lovely Professional University",
    "Software Engineer",
  ],
  authors: [{ name: "Asmit Raj" }],
  creator: "Asmit Raj",
  openGraph: {
    title: "Asmit Raj | Full Stack Developer",
    description: "Full Stack Developer building scalable, modern, and user-focused web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-red-900/40 selection:text-red-200">
        <KeepAlive />
        {children}
      </body>
    </html>
  );
}

