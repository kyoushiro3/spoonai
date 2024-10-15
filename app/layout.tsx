import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";

const inter = Inter({ subsets: ['latin'], weight:'500' })

export const metadata: Metadata = {
  title: "SpoonAI🥄",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
