import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter } from 'next/font/google'
import './globals.css'
import Footers1 from '@/components/footers/Footers1'
import Headers1 from '@/components/headers/Headers1'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UserProvider>
      <Headers1/>
      <div>{children}</div>
      <Footers1 />
      <SpeedInsights />
      <Analytics />
      </UserProvider>
      </body>
    </html>
  )
}
