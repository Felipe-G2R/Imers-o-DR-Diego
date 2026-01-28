import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Imersão 2.2 - NextLevel Formed',
  description: 'Programa intensivo de imersão para acelerar seus resultados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
