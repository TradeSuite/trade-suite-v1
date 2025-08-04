import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, ExternalLink, FileText } from "lucide-react"

interface SignalCardProps {
  signal: {
    pair: string
    price: string
    timeframe: string
    type: "BUY" | "SELL"
    confidence: number
    mainLabels: string[]
    secondaryCount: number
  }
  showActions?: boolean
}

// Array of chart images to rotate through
const chartImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cEuOQalRkNNRr4GUyoBNghUeBPAXDq.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Schermafbeelding%202025-07-24%20014957-Ru5RdF1GQUZdWXDXbAEIWy0GOjeS8b.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Schermafbeelding%202025-07-24%20015230-sCO4F94RRbXAL038M86EUgpqWK2pJo.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vVpmc5szIQLele8UBhlaqEurOlv121.png",
]

// Dummy secondary confluences
const secondaryConfluences = [
  "Touched Level",
  "RSI Breakout 5min",
  "RSI below 10",
  "Mentioned by: Gauls",
  "Mentioned by: BitcoinHabebe",
  "Viral Coin",
  "Buy on ETH/BTC 5min",
  "Buy on 15min",
  "Buy on 2min",
  "Sell on 5min",
]

export default function SignalCard({ signal, showActions = false }: SignalCardProps) {
  // Use pair name to consistently select same chart for same pair
  const chartIndex = signal.pair.length % chartImages.length
  const chartImage = chartImages[chartIndex]

  // Get random secondary confluences for this signal
  const shuffledSecondary = [...secondaryConfluences].sort(() => 0.5 - Math.random())
  const signalSecondary = shuffledSecondary.slice(0, signal.secondaryCount)

  return (
    <Card className="bg-[#0f1c17] border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300 group">
      <CardContent className="p-3 md:p-4">
        <div className="aspect-video bg-[#0f1c17] rounded-lg overflow-hidden border border-[#f5f4f0]/10 mb-4">
          <img
            src={chartImage || "/placeholder.svg"}
            alt={`${signal.pair} TradingView chart`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-lg font-medium text-[#f5f4f0]">{signal.pair}</div>
          <Badge
            variant={signal.type === "BUY" ? "default" : "destructive"}
            className={
              signal.type === "BUY" ? "bg-[#a67c38] text-[#0f1c17]" : "bg-red-900/20 text-red-400 border-red-400/20"
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3 text-xs md:text-sm">
          <div>
            <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Price</div>
            <div className="text-[#f5f4f0] font-medium">{signal.price}</div>
          </div>
          <div>
            <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Timeframe</div>
            <div className="text-[#f5f4f0] font-medium">{signal.timeframe}</div>
          </div>
          <div>
            <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide">Confidence</div>
            <div className="text-[#a67c38] font-medium">{signal.confidence}%</div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div>
            <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide mb-2">Main</div>
            <div className="flex flex-wrap md:flex-wrap gap-1 overflow-x-auto md:overflow-x-visible">
              {signal.mainLabels.map((label, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/20 text-xs md:text-sm font-medium px-2 md:px-3 py-1 whitespace-nowrap"
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[#f5f4f0]/60 text-xs uppercase tracking-wide mb-2">Secondary</div>
            <div className="flex gap-1 overflow-x-auto md:flex-wrap md:overflow-x-visible pb-1">
              {signalSecondary.map((label, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-[#f5f4f0]/30 text-[#f5f4f0]/80 bg-[#f5f4f0]/10 text-xs px-2 py-1 whitespace-nowrap"
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Permanent Action Buttons */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent text-xs"
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            TradingView
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-[#f5f4f0]/20 text-[#f5f4f0]/80 hover:bg-[#f5f4f0]/10 hover:text-[#f5f4f0] bg-transparent text-xs"
          >
            <FileText className="w-3 h-3 mr-1" />
            Analysis
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
