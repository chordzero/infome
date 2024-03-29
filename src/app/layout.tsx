import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/components/nav";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Chordzero",
  description: "info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
