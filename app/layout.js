import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import GA from "./components/GA";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Airlabel",
  description: "Convert HTML content into PDF attachments with Airlabel.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GA />
      <body className={inter.className}>
        <div className="w-full h-screen flex flex-col overflow-auto">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
