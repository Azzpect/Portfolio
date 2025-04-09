import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Azzpect",
  description: "Azzpect is a portfolio website for Atanu Ghosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-primaryBgColor md:overflow-y-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
