import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Library App',
  description: 'A simple library',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= 'border-box p-0 m-0' >
        <header>
           <NavBar/>
        </header>
       <main>
          {children}
       </main>
        </body>
    </html>
  )
}
