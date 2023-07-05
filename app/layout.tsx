import './globals.css';
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover incredible developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}