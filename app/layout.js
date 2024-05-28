import '../styles/globals.css';

import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Notion Next.js blog',
  description: 'Notion Next.js blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
