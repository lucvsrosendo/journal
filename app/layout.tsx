import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: {
    default: "Byte Journal",
    template: "%s | Byte Journal"
  },
  description: "Blog pessoal moderno com Next.js e Supabase.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body className={`${manrope.variable} ${serif.variable} font-[family-name:var(--font-manrope)] antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen">
            <Header />
            <main className="mx-auto w-full max-w-5xl px-4 py-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
