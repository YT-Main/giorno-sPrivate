import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Giorno's Italian Restaurant",
  description: 'Giorno\'s Italian Restaurant is a family-owned restaurant in the heart of the city. We serve authentic Italian cuisine made with love and care.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
    </html>
  )
}
