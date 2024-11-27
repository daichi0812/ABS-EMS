import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ABS EMS",
  description: "Generated by Logicode",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  //プリズマで使うよう？　上のRootLayoutにasyncを追記する
  //const user = await db.user.findMany

  return (
    <SessionProvider session={session}>
      <html lang="ja">
        {/* headタグとその中にアイコンやテーマカラー、manifestを記述する */}
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#f5f5f8" />
        </head>
        <body className={inter.className}>
          <Toaster />
          <ChakraProvider>{children}</ChakraProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
