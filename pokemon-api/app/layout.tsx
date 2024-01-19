import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Stat Website",
  description: "Created by Alex Canales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
            <Link href="/">
              <h2 className="text-2xl text-bold text-center my-4">
                Pokemon Finder
              </h2>
            </Link>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
