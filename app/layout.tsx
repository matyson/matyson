import type { Metadata } from "next";
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
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main
          className={cn(
            GeistSans.className,
            "flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"
          )}
        >
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
