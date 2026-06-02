import './globals.css'

export const metadata = {
  title: 'Akshay Babu | Portfolio',
  description: 'Full-Stack Developer & Data Analyst',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}