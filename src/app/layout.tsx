import './globals.css';
import { Inter } from "next/font/google";
import { setupNetworkLogger } from "@/lib/network-logger";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'SellHub - Build Your Online Store',
  description: 'Create, manage, and grow your e-commerce business with our powerful platform.',
}

if (typeof window !== 'undefined') {
  setupNetworkLogger();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
