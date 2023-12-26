import type { Metadata } from "next";
import { airbnbCereal } from "@/styles/fonts/airbnbCereal";
import { Header } from "@/components";
import { ToasterProvider } from "@/providers/ToastProvider";
import { ClientOnly } from "./ClientOnly";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Airbnb | Vacation rentals, cabins, beach houses, unique homes & experiences",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={airbnbCereal.className}>
        <ClientOnly>
          <ToasterProvider />
          <Header />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
