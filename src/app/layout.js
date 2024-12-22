// import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google"; // Import Manrope
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Define Manrope font
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pedro Coin",
  description: "Pedrocoin Building the Future of Memes & Tokens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased`}>{children}</body>
    </html>
  );
}
