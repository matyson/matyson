import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "./components/footer";
import { Navbar } from "./components/nav";
import ThemeSwitch from "./components/theme-switch";
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
    <ViewTransitions>
      <html
        suppressHydrationWarning
        lang="en"
        className={cn(GeistSans.variable, GeistMono.variable)}
      >
        <body className="tracking-tight antialiased">
          <div className="flex min-h-screen flex-col justify-between p-8 pt-0 md:pt-8">
            <ThemeProvider attribute="class">
              <main className="mx-auto w-full max-w-[60ch] space-y-6">
                <Navbar />
                {children}
              </main>
              <Footer />
              <div className="fixed right-4 top-4 z-40">
                <ThemeSwitch />
              </div>
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
