import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Anurag Sharma | Full Stack Developer",
  description:
    "Portfolio of Anurag Sharma – Full Stack Developer skilled in Next.js, MERN stack, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("h-full", poppins.variable, "font-sans", inter.variable)}>
      <body className="min-h-screen bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
