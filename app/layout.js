
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubham Kanaskar - Full Stack Engineer",
  description: "Full Stack Engineer specializing in MERN Stack Development, API Integration, and Performance Optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`{inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
