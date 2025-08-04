"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SignalCard from "@/components/signal-card"
import WinrateChart from "@/components/winrate-chart"
import RecentWins from "@/components/recent-wins"
import MarketSentiment from "@/components/market-sentiment"

// Dummy data for signals
const signalData = [
  {
    pair: "BTC/USDT",
    price: "$47,892",
    timeframe: "4H",
    type: "BUY",
    confidence: 92,
    mainLabels: ["Key Bounce", "Elliott"],
    secondaryCount: 4,
  },
  {
    pair: "ETH/USDT",
    price: "$3,241",
    timeframe: "1D",
    type: "SELL",
    confidence: 87,
    mainLabels: ["Resistance", "Divergence"],
    secondaryCount: 3,
  },
  {
    pair: "SOL/USDT",
    price: "$98.5",
    timeframe: "2H",
    type: "BUY",
    confidence: 91,
    mainLabels: ["Breakout", "Volume"],
    secondaryCount: 4,
  },
]

export default function Dashboard() {
  const [winrateTimeframe, setWinrateTimeframe] = useState("month")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif text-[#f5f4f0]">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10">
            AI ACTIVE
          </Badge>
          <div className="text-right">
            <div className="text-xs text-[#f5f4f0]/60 tracking-wide">PORTFOLIO</div>
            <div className="text-lg font-medium text-[#a67c38]">$847,320</div>
          </div>
        </div>
      </div>

      {/* Latest Signals Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif text-[#f5f4f0]">Latest Signals</h2>
          <Link href="/signals">
            <Button
              variant="outline"
              size="sm"
              className="border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent"
            >
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {signalData.map((signal, index) => (
            <SignalCard key={index} signal={signal} />
          ))}
        </div>
      </div>

      {/* Winrate Chart */}
      <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-serif text-[#f5f4f0]">Winrate</CardTitle>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setWinrateTimeframe("week")}
                className={`${
                  winrateTimeframe === "week"
                    ? "border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10"
                    : "border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-transparent"
                }`}
              >
                Week
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setWinrateTimeframe("month")}
                className={`${
                  winrateTimeframe === "month"
                    ? "border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10"
                    : "border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-transparent"
                }`}
              >
                Month
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setWinrateTimeframe("year")}
                className={`${
                  winrateTimeframe === "year"
                    ? "border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10"
                    : "border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-transparent"
                }`}
              >
                Year
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <WinrateChart timeframe={winrateTimeframe} />
        </CardContent>
      </Card>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentWins />
        <MarketSentiment />
      </div>
    </div>
  )
}
