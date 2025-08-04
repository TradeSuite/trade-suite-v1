"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, AlertTriangle, Target, Zap } from "lucide-react"

const insights = [
  {
    type: "Market Analysis",
    confidence: "HIGH",
    icon: Brain,
    title: "Bullish Momentum Detected",
    description:
      "AI models indicate strong institutional accumulation across major crypto assets. Expected continuation of upward trend for the next 48-72 hours.",
    impact: "Positive",
    timeframe: "2-3 days",
  },
  {
    type: "Risk Assessment",
    confidence: "MEDIUM",
    icon: AlertTriangle,
    title: "Volatility Spike Warning",
    description:
      "Increased correlation between traditional markets and crypto detected. Monitor for potential cascade effects during US market hours.",
    impact: "Neutral",
    timeframe: "24 hours",
  },
  {
    type: "Opportunity",
    confidence: "HIGH",
    icon: Target,
    title: "Arbitrage Opportunity",
    description:
      "Price discrepancy detected between exchanges for SOL/USD. Potential 0.3% profit margin available for the next 15-20 minutes.",
    impact: "Positive",
    timeframe: "15-20 min",
  },
  {
    type: "Strategy",
    confidence: "HIGH",
    icon: Zap,
    title: "Scalping Window Open",
    description:
      "High-frequency patterns suggest optimal scalping conditions for BTC/USD. Recommended position size: 2-3% of portfolio.",
    impact: "Positive",
    timeframe: "1-2 hours",
  },
]

export default function AIInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-serif text-[#f5f4f0]">AI Insights</h2>
        <Badge variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10">
          <Brain className="w-3 h-3 mr-1" />
          NEURAL NETWORK ACTIVE
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <Card
            key={index}
            className="bg-[#0f1c17] border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-500"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <insight.icon className="w-5 h-5 text-[#a67c38]" />
                  <CardTitle className="text-lg font-serif text-[#f5f4f0]">{insight.title}</CardTitle>
                </div>
                <Badge
                  variant="outline"
                  className={`${
                    insight.confidence === "HIGH"
                      ? "border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10"
                      : "border-yellow-500 text-yellow-500 bg-yellow-500/10"
                  }`}
                >
                  {insight.confidence}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#f5f4f0]/80 leading-relaxed">{insight.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-[#f5f4f0]/10">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-xs text-[#f5f4f0]/60 uppercase tracking-wide">Type</div>
                    <div className="text-sm text-[#f5f4f0]">{insight.type}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#f5f4f0]/60 uppercase tracking-wide">Impact</div>
                    <div
                      className={`text-sm font-medium ${
                        insight.impact === "Positive"
                          ? "text-[#a67c38]"
                          : insight.impact === "Negative"
                            ? "text-red-400"
                            : "text-[#f5f4f0]"
                      }`}
                    >
                      {insight.impact}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#f5f4f0]/60 uppercase tracking-wide">Timeframe</div>
                  <div className="text-sm text-[#a67c38]">{insight.timeframe}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Performance Metrics */}
      <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
        <CardHeader>
          <CardTitle className="text-xl font-serif text-[#f5f4f0]">AI Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Prediction Accuracy", value: "87.3%", trend: "+2.1%" },
              { label: "Signals Generated", value: "1,247", trend: "+156" },
              { label: "Profitable Trades", value: "89.2%", trend: "+3.4%" },
              { label: "Risk Score", value: "LOW", trend: "STABLE" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-medium text-[#a67c38] mb-1">{metric.value}</div>
                <div className="text-xs text-[#f5f4f0]/60 uppercase tracking-wide mb-2">{metric.label}</div>
                <div className="text-xs text-[#a67c38]">{metric.trend}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
