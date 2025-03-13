import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Choran Marketing - Fature mais com estratégias de marketing eficientes",
  description:
    "Fature R$100 a R$500 mil em 6 meses com uma estrutura de marketing criada para sua necessidade. Sistema de vendas previsível e escalável.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
