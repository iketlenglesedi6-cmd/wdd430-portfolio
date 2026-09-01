import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = { title: "Iketleng Lesedi | Portfolio", description: "Portfolio of Iketleng Lesedi, a full-stack development student." };
export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className="flex min-h-screen flex-col bg-white font-sans text-slate-900"><Header /><div className="flex-1">{children}</div><Footer /></body></html>;
}
