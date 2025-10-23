import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Levi's Website",
  description: "享受当下，无限进步",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
