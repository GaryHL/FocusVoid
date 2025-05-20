import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/generic/Navbar'
import { dark } from '@clerk/themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const madeSoulmaze = localFont({
  src: [
    {
      path: '../../public/fonts/made-soulmaze.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/made-soulmaze-italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-made-soulmaze',
})

export const metadata = {
  title: 'Focus Void',
  description: 'Focus Void',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="es">
        <body
          className={`${inter.variable} ${madeSoulmaze.variable} antialiased dark min-h-screen`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
