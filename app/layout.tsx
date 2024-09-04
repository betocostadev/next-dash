import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Company Admin',
  description: 'An Admin dashboard for a company',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="dashboard-theme"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex">
            <aside className="hidden md:block h-[100vh] w-[320px]">
              <Sidebar />
            </aside>
            <div className="p-5 w-full md:max-w-[1200px]">{children}</div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
