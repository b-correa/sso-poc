'use client'
import { SessionProvider } from 'next-auth/react'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProps } from 'next/app'
import { NextPageWithLayout } from './types/page'

const inter = Inter({ subsets: ['latin'] })

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function RootLayout({
  children, session
}: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
