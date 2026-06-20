import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://godollc.com"),
  title: {
    default: "GoDo LLC | Home Preventative Maintenance | SF Bay Area & San Joaquin Valley",
    template: "%s | GoDo LLC",
  },
  description:
    "GoDo LLC is your licensed preventative home maintenance partner in the SF Bay Area and San Joaquin Valley. We inspect, protect, and document your home's systems before they fail. CSLB #1148177.",
  openGraph: {
    title: "GoDo LLC | Home Preventative Maintenance",
    description:
      "Stop reacting to home emergencies. Start preventing them. Licensed, insured whole-home preventative maintenance. CSLB #1148177.",
    url: "https://godollc.com",
    siteName: "GoDo LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
