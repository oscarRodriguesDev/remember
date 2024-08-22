import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página principal',
  description: 'Página que carrega todas as informações do site',
  keywords:'javascript, next, css, javascript, vercel',
  openGraph:{
    images:['https://www.granjaloureiro.com.br/ovo-de-codorna-x-ovo-de-galinha/']
  }
  //lista de tags meta na w3scholl
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
