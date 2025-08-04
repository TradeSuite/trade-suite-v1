"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import SignalCard from "@/components/signal-card"

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
  {
    pair: "AVAX/USDT",
    price: "$34.2",
    timeframe: "1H",
    type: "BUY",
    confidence: 85,
    mainLabels: ["Support", "Accumulation"],
    secondaryCount: 2,
  },
  {
    pair: "DOT/USDT",
    price: "$7.82",
    timeframe: "4H",
    type: "SELL",
    confidence: 89,
    mainLabels: ["Resistance", "Divergence"],
    secondaryCount: 3,
  },
  {
    pair: "ADA/USDT",
    price: "$0.52",
    timeframe: "2H",
    type: "BUY",
    confidence: 88,
    mainLabels: ["Breakout", "Support"],
    secondaryCount: 3,
  },
]

// Array of chart images to rotate through
const chartImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cEuOQalRkNNRr4GUyoBNghUeBPAXDq.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Schermafbeelding%202025-07-24%20014957-Ru5RdF1GQUZdWXDXbAEIWy0GOjeS8b.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Schermafbeelding%202025-07-24%20015230-sCO4F94RRbXAL038M86EUgpqWK2pJo.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vVpmc5szIQLele8UBhlaqEurOlv121.png",
]

// Dummy secondary confluences
const secondaryConfluences = [
  "Touched Level", "RSI Breakout 5min", "RSI below 10", "Mentioned by: Gauls", 
  "Mentioned by: BitcoinHabebe", "Viral Coin", "Buy on ETH/BTC 5min", 
  "Buy on 15min", "Buy on 2min", "Sell on 5min"
]

export default function SignalsPage() {
  const [sortBy, setSortBy] = useState("new")
  const [selectedSignal, setSelectedSignal] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSignalClick = (signal: any) => {
    setSelectedSignal(signal)
    setIsDialogOpen(true)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-serif text-[#f5f4f0]">Signals</h1>
        <div className="flex items-center space-x-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] bg-[#0f1c17] border-[#f5f4f0]/10 text-[#f5f4f0]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-[#0f1c17] border-[#f5f4f0]/10 text-[#f5f4f0]">
              <SelectItem value="new">New Signals</SelectItem>
              <SelectItem value="confidence">High Confidence</SelectItem>
              <SelectItem value="pair">Pair Size</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-4">
          {signalData.map((signal, index) => (
            <div key={index} onClick={() => handleSignalClick(signal)} className="cursor-pointer">
              <SignalCard signal={signal} showActions={true} />
            </div>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#0f1c17] border-[#f5f4f0]/10 text-[#f5f4f0] max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-serif">{selectedSignal?.pair}</span>
                {selectedSignal && (
                  <Badge
                    variant={selectedSignal.type === "BUY" ? "default" : "destructive"}
                    className={
                      selectedSignal.type === "BUY"
                        ? "bg-[#a67c38] text-[#0f1c17]"
                        : "bg-red-900/20 text-red-400 border-red-400/20"
                    }
                  >
                    {selectedSignal.type}
                  </Badge>
                )}
              </div>
            </DialogTitle>
          </DialogHeader>
          {selectedSignal && (
            <div className="space-y-4">
              <div className="aspect-video bg-[#0f1c17] rounded-lg overflow-hidden border border-[#f5f4f0]/10">
                <img
                  src={chartImages[selectedSignal.pair.length % chartImages.length] || "/placeholder.svg"}
                  alt={`${selectedSignal?.pair} detailed TradingView chart`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#f5f4f0]/60 uppercase tracking-wide">Analysis</h3>
                <p className="text-[#f5f4f0]/90">
                  {selectedSignal.type === "BUY"
                    ? "Strong bullish pattern detected with increasing volume. Price has broken above key resistance level and showing momentum. Target represents the next major resistance zone."
                    : "Bearish divergence detected at key resistance level. Volume declining on recent moves up suggests weakening momentum. Target represents the next support zone."}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-[#f5f4f0]/60 uppercase tracking-wide mb-2">Main</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSignal.mainLabels.map((label: string, index: number) => (
                      <Badge key={index} variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/20 text-sm font-medium px-3 py-1">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#f5f4f0]/60 uppercase tracking-wide mb-2">Secondary</h3>
                  <div className="flex flex-wrap gap-1">
                    {secondaryConfluences.slice(0, selectedSignal.secondaryCount).map((label: string, index: number) => (
                      <Badge key={index} variant="outline" className="border-[#f5f4f0]/30 text-[#f5f4f0]/80 bg-[#f5f4f0]/10 text-xs px-2 py-1">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  className="border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent"
                >
                  View on TradingView
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
