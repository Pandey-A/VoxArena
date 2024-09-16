import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";
import AppWalletProvider from "../components/AppWalletProvider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "Template created by Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
