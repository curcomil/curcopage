"use client";

import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibm.className} antialiased lg:px-72 bg-[#222222]`}>
        {children}
      </body>
    </html>
  );
}
