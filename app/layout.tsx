import type { Metadata } from "next";
import "./globals.css";
import {Syne} from "next/font/google"
import { ReactNode } from "react";


const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children,}: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
