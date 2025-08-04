"use client"

import { useState, useEffect } from "react"
import { redirect } from "next/navigation"
import { TrendingUp, Activity, Target, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TradingChart from "@/components/trading-chart"
import SignalsPanel from "@/components/signals-panel"
import PortfolioOverview from "@/components/portfolio-overview"
import AIInsights from "@/components/ai-insights"

export default function Home() {
  redirect("/dashboard")
}

function TradeSuiteDashboard() {
  const [activeView, setActiveView] = useState("overview")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f1c17] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-4xl font-serif text-[#f5f4f0] tracking-wider">TradeSuite</div>
          <div className="w-16 h-0.5 bg-[#a67c38] mx-auto animate-pulse"></div>
          <div className="text-[#f5f4f0]/60 text-sm tracking-wide">INITIALIZING AI SYSTEMS</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f1c17] text-[#f5f4f0]">
      {/* Header */}
      <header className="border-b border-[#f5f4f0]/10 bg-[#0f1c17]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-serif tracking-wider text-[#f5f4f0]">TradeSuite</h1>
              <nav className="hidden md:flex space-x-6">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "signals", label: "Signals" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "ai-insights", label: "AI Insights" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`text-sm tracking-wide transition-all duration-300 ${
                      activeView === item.id
                        ? "text-[#a67c38] border-b border-[#a67c38]"
                        : "text-[#f5f4f0]/70 hover:text-[#f5f4f0]"
                    }`}
                  >
                    {item.label.toUpperCase()}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10">
                <Brain className="w-3 h-3 mr-1" />
                AI ACTIVE
              </Badge>
              <div className="text-right">
                <div className="text-xs text-[#f5f4f0]/60 tracking-wide">PORTFOLIO</div>
                <div className="text-lg font-medium text-[#a67c38]">$847,320</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeView === "overview" && (
          <div className="space-y-8">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Total Balance", value: "$847,320", change: "+12.4%", icon: TrendingUp },
                { label: "Active Signals", value: "23", change: "+5", icon: Target },
                { label: "Win Rate", value: "87.3%", change: "+2.1%", icon: Activity },
                { label: "AI Confidence", value: "94%", change: "HIGH", icon: Brain },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-[#0f1c17] border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-500"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-[#f5f4f0]/60 tracking-wide uppercase">{stat.label}</p>
                        <p className="text-2xl font-medium text-[#f5f4f0] mt-1">{stat.value}</p>
                        <p className="text-sm text-[#a67c38] mt-1">{stat.change}</p>
                      </div>
                      <stat.icon className="w-8 h-8 text-[#a67c38]/60" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Chart */}
            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-serif text-[#f5f4f0]">Market Overview</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent"
                    >
                      1D
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-transparent"
                    >
                      1W
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-transparent"
                    >
                      1M
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <TradingChart />
              </CardContent>
            </Card>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SignalsPanel />
              <PortfolioOverview />
            </div>
          </div>
        )}

        {activeView === "signals" && <SignalsPanel expanded />}
        {activeView === "portfolio" && <PortfolioOverview expanded />}
        {activeView === "ai-insights" && <AIInsights />}
      </main>
    </div>
  )
}
