import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "./components/nav";
import { cn } from "./lib/utils";

export const metadata: Metadata = {
  title: {
    default: "matyson",
    template: "%s | matyson",
  },
  description: "Mathematician, developer, and writer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-black dark:bg-[#111010] dark:text-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
