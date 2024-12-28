import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NewTools',
  description: 'New tools application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
