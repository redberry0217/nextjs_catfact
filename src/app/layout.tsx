import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs 데일리 과제",
  description: "렌더링 테스트 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-wrap justify-center gap-x-10 py-3 text-xl border-b border-black">
          <Link href="/">HOME</Link>
          <Link href="/SSG">SSG</Link>
          <Link href="/ISR">ISR</Link>
          <Link href="/SSR">SSR</Link>
          <Link href="/CSR">CSR</Link>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
