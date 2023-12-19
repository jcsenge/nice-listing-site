import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import { NavigationButton } from "./components/NavigationButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nice listing site",
  description: "To make testing easier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-between pt-8 pb-20 sm:pt-16 px-4 sm:px-8 lg:px-16 w-full">
          <NavigationButton />
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Nice listing site logo"
            width={600}
            height={150}
            priority
          />
          {children}
        </main>
      </body>
    </html>
  );
}
