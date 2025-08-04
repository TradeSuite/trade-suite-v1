import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter, Crimson_Text } from "next/font/google"
import { cn } from "@/lib/utils"
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontSerif = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "TradeSuite",
  description: "Premium trading platform for professional traders",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans antialiased", fontSans.variable, fontSerif.variable)}>
      <body className="bg-[#0f1c17] text-[#f5f4f0]">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex min-h-screen">
            <Navigation />
            <div className="flex-1 overflow-auto">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
