import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI World Models',
  description: 'Shaping the Future of Interactive Entertainment',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-background text-foreground">
          {/* Sidebar (collapsible) */}
          <aside className="w-64 p-4 border-r border-accent">
            {/* Sidebar content (e.g., navigation) */}
            Sidebar
          </aside>

          {/* Main content area */}
          <main className="flex-1 p-4 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <nav className="flex-1 space-y-2">
        <a href="/" className="block py-2 px-4 rounded hover:bg-accent transition-all duration-200">Home</a>
        <a href="/research/cab7b48f-8813-4109-8d85-e6c3f4435d87" className="block py-2 px-4 rounded hover:bg-accent transition-all duration-200">Research Session</a>
        <a href="/library" className="block py-2 px-4 rounded hover:bg-accent transition-all duration-200">Knowledge Base</a>
      </nav>

      <div className="border-t border-accent pt-4">
        {/* Notes icon button (opens shadcn/ui Sheet) */}
        <button className="w-full py-2 px-4 rounded bg-primary text-background hover:opacity-75 transition-all duration-200">Notes</button>
      </div>
    </div>
  );
};