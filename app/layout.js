import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import KeepAlive from "@/components/KeepAlive";
import { ThemeProvider } from "@/lib/ThemeContext";

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
  title: "Asmit Raj | Aspiring Software Engineer & Computer Science Student",
  description:
    "Official developer portfolio of Asmit Raj, an Aspiring Software Engineer and B.Tech CSE student at Lovely Professional University. Specializing in Next.js, React, Node.js, Express, MongoDB, and modern web applications.",
  keywords: [
    "Asmit Raj",
    "Aspiring Software Engineer",
    "Software Engineer Portfolio",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Lovely Professional University",
    "Software Engineer",
  ],
  authors: [{ name: "Asmit Raj" }],
  creator: "Asmit Raj",
  openGraph: {
    title: "Asmit Raj | Aspiring Software Engineer",
    description: "Aspiring Software Engineer building scalable, modern, and user-focused web applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-red-900/40 selection:text-red-200 dark:bg-[#050505] dark:text-[#F5F5F5] light:bg-white light:text-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <KeepAlive />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

