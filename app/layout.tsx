import React from 'react';

export const metadata = {
  title: 'Minimal Next.js',
  description: 'Minimal setup',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
