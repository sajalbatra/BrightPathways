import { Mulish } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import {Providers} from "./providers";

const inter = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'BrightPathways',
  description: 'BrightPathways',
}

export default function RootLayout({ children }) {
  return ( <html lang="en" className='dark'>
  <body  className={inter.className}>
    <Providers>
  <Header/>
      {children}
    </Providers>
  </body>
</html>
      )
}
