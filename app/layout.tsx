import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";

export const metadata: Metadata = {
  title: "Proxy.ai",
  description: "Proxy.ai is a proxy server that allows you to create a secure and private connection to any website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`font-sans bg-neutral-950`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
