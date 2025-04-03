import './globals.css';

export const metadata = {
  title: 'SellHub - Build Your Online Store',
  description: 'Create, manage, and grow your e-commerce business with our powerful platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
