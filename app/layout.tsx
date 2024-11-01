import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "./components/footer";
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
      suppressHydrationWarning
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
    >
      <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col bg-slate-50 text-black antialiased dark:bg-[#111010] dark:text-white md:flex-row lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
