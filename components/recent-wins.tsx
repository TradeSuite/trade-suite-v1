import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

const recentWins = [
  {
    pair: "BTC/USDT",
    type: "BUY",
    entry: "$45,230",
    exit: "$47,890",
    profit: "+5.9%",
    date: "2 hours ago",
  },
  {
    pair: "ETH/USDT",
    type: "SELL",
    entry: "$3,450",
    exit: "$3,210",
    profit: "+6.9%",
    date: "5 hours ago",
  },
  {
    pair: "SOL/USDT",
    type: "BUY",
    entry: "$92.4",
    exit: "$98.7",
    profit: "+6.8%",
    date: "1 day ago",
  },
]

// Array of chart images to rotate through
const chartImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cEuOQalRkNNRr4GUyoBNghUeBPAXDq.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Schermafbeelding%202025-07-24%20014957-Ru5RdF1GQUZdWXDXbAEIWy0GOjeS8b.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Schermafbeelding%202025-07-24%20015230-sCO4F94RRbXAL038M86EUgpqWK2pJo.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vVpmc5szIQLele8UBhlaqEurOlv121.png",
]

export default function RecentWins() {
  return (
    <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
      <CardHeader>
        <CardTitle className="text-xl font-serif text-[#f5f4f0]">Recent Wins</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentWins.map((win, index) => {
          const chartImage = chartImages[index % chartImages.length]

          return (
            <div
              key={index}
              className="p-3 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="w-16 h-12 bg-[#0f1c17] rounded border border-[#f5f4f0]/10 overflow-hidden flex-shrink-0">
                  <img
                    src={chartImage || "/placeholder.svg"}
                    alt={`${win.pair} chart`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-medium text-[#f5f4f0]">{win.pair}</div>
                      <Badge
                        variant={win.type === "BUY" ? "default" : "destructive"}
                        className={
                          win.type === "BUY"
                            ? "bg-[#a67c38] text-[#0f1c17]"
                            : "bg-red-900/20 text-red-400 border-red-400/20"
                        }
                      >
                        {win.type === "BUY" ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {win.type}
                      </Badge>
                    </div>
                    <div className="text-xs text-[#f5f4f0]/60">{win.date}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Entry</div>
                      <div className="text-[#f5f4f0] font-medium">{win.entry}</div>
                    </div>
                    <div>
                      <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Exit</div>
                      <div className="text-[#f5f4f0] font-medium">{win.exit}</div>
                    </div>
                    <div>
                      <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Profit</div>
                      <div className="text-[#a67c38] font-medium">{win.profit}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
