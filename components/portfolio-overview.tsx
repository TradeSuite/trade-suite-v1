"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

interface PortfolioOverviewProps {
  expanded?: boolean
}

const portfolioData = [
  { name: "BTC", value: 45, amount: 381294, color: "#a67c38" },
  { name: "ETH", value: 25, amount: 211830, color: "#f5f4f0" },
  { name: "SOL", value: 15, amount: 127098, color: "#a67c38" },
  { name: "AVAX", value: 10, amount: 84732, color: "#f5f4f0" },
  { name: "Cash", value: 5, amount: 42366, color: "#a67c38" },
]

const positions = [
  { symbol: "BTC/USD", size: "8.12", value: "$381,294", pnl: "+12.4%", pnlColor: "text-[#a67c38]" },
  { symbol: "ETH/USD", size: "65.4", value: "$211,830", pnl: "+8.7%", pnlColor: "text-[#a67c38]" },
  { symbol: "SOL/USD", size: "1,290", value: "$127,098", pnl: "-2.1%", pnlColor: "text-red-400" },
  { symbol: "AVAX/USD", size: "2,456", value: "$84,732", pnl: "+15.3%", pnlColor: "text-[#a67c38]" },
]

export default function PortfolioOverview({ expanded = false }: PortfolioOverviewProps) {
  return (
    <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
      <CardHeader>
        <CardTitle className="text-xl font-serif text-[#f5f4f0]">Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} opacity={0.8} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f1c17",
                    border: "1px solid #a67c38",
                    borderRadius: "8px",
                    color: "#f5f4f0",
                  }}
                  formatter={(value: any) => [`${value}%`, "Allocation"]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Portfolio Breakdown */}
          <div className="space-y-3">
            {portfolioData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color, opacity: 0.8 }}></div>
                  <span className="text-[#f5f4f0] font-medium">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-[#f5f4f0] font-medium">${item.amount.toLocaleString()}</div>
                  <div className="text-xs text-[#f5f4f0]/60">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t border-[#f5f4f0]/10">
            <h4 className="text-lg font-serif text-[#f5f4f0] mb-4">Active Positions</h4>
            <div className="space-y-3">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-[#f5f4f0]/10"
                >
                  <div>
                    <div className="text-[#f5f4f0] font-medium">{position.symbol}</div>
                    <div className="text-xs text-[#f5f4f0]/60">{position.size} units</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#f5f4f0] font-medium">{position.value}</div>
                    <div className={`text-xs font-medium ${position.pnlColor}`}>{position.pnl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
