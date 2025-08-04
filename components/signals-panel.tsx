"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Clock } from "lucide-react"

interface SignalsPanelProps {
  expanded?: boolean
}

const signals = [
  {
    pair: "BTC/USD",
    type: "BUY",
    confidence: 94,
    entry: 47200,
    target: 49800,
    stop: 45100,
    timeframe: "4H",
    aiReason: "Strong bullish divergence detected with high volume confirmation",
  },
  {
    pair: "ETH/USD",
    type: "SELL",
    confidence: 87,
    entry: 3240,
    target: 3050,
    stop: 3380,
    timeframe: "1H",
    aiReason: "Resistance level rejection with bearish momentum",
  },
  {
    pair: "SOL/USD",
    type: "BUY",
    confidence: 91,
    entry: 98.5,
    target: 105.2,
    stop: 94.8,
    timeframe: "2H",
    aiReason: "Breakout pattern with institutional accumulation signals",
  },
]

export default function SignalsPanel({ expanded = false }: SignalsPanelProps) {
  return (
    <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-serif text-[#f5f4f0]">AI Trading Signals</CardTitle>
          <Badge variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10">
            {signals.length} ACTIVE
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {signals.slice(0, expanded ? signals.length : 3).map((signal, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="text-lg font-medium text-[#f5f4f0]">{signal.pair}</div>
                <Badge
                  variant={signal.type === "BUY" ? "default" : "destructive"}
                  className={
                    signal.type === "BUY"
                      ? "bg-[#a67c38] text-[#0f1c17]"
                      : "bg-red-900/20 text-red-400 border-red-400/20"
                  }
                >
                  {signal.type === "BUY" ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {signal.type}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-sm text-[#a67c38] font-medium">{signal.confidence}%</div>
                <div className="text-xs text-[#f5f4f0]/60">CONFIDENCE</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
              <div>
                <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Entry</div>
                <div className="text-[#f5f4f0] font-medium">${signal.entry.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Target</div>
                <div className="text-[#a67c38] font-medium">${signal.target.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Stop</div>
                <div className="text-red-400 font-medium">${signal.stop.toLocaleString()}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-[#f5f4f0]/60">
                <Clock className="w-3 h-3" />
                <span>{signal.timeframe}</span>
              </div>
              <Button
                size="sm"
                className="bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17] opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                Execute
              </Button>
            </div>

            {expanded && (
              <div className="mt-3 pt-3 border-t border-[#f5f4f0]/10">
                <div className="text-xs text-[#f5f4f0]/80 italic">{signal.aiReason}</div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
