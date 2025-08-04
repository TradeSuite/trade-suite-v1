import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const traderPosts = [
  {
    author: "SilverBullet",
    platform: "Telegram",
    content: "BTC looking strong above 47k. Expecting continuation to 52k in the next week.",
    time: "2h ago",
  },
  {
    author: "Gauls",
    platform: "X (Twitter)",
    content: "ETH showing weakness at resistance. Watch for rejection or breakout in next 24h.",
    time: "5h ago",
  },
  {
    author: "Income Sharks",
    platform: "Telegram",
    content: "SOL breaking out with volume. Target: 110 within 48 hours.",
    time: "1d ago",
  },
  {
    author: "BitcoinHabebe",
    platform: "X (Twitter)",
    content: "Market structure looking bullish across the board. Alt season incoming?",
    time: "3h ago",
  },
]

export default function MarketSentiment() {
  return (
    <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
      <CardHeader>
        <CardTitle className="text-xl font-serif text-[#f5f4f0]">Market Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="traders" className="space-y-4">
          <TabsList className="bg-[#0f1c17] border border-[#f5f4f0]/10">
            <TabsTrigger
              value="traders"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38]"
            >
              Traders
            </TabsTrigger>
            <TabsTrigger
              value="sentiment"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38]"
            >
              Sentiment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="traders" className="space-y-3">
            {traderPosts.map((post, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="font-medium text-[#a67c38]">{post.author}</div>
                    <div className="text-xs px-2 py-1 rounded-full bg-[#f5f4f0]/10 text-[#f5f4f0]/60">
                      {post.platform}
                    </div>
                  </div>
                  <div className="text-xs text-[#f5f4f0]/60">{post.time}</div>
                </div>
                <p className="text-sm text-[#f5f4f0]/90">{post.content}</p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="sentiment">
            <div className="space-y-6">
              {/* Fear & Greed Index */}
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#f5f4f0] mb-4">Fear & Greed Index</h3>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="w-32 h-32 rounded-full border-8 border-[#a67c38] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#a67c38]">72</div>
                      <div className="text-sm text-[#f5f4f0]">Greed</div>
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <div className="text-sm text-[#f5f4f0]/60">Yesterday: 68 (Greed)</div>
                    <div className="text-sm text-[#f5f4f0]/60">Last Week: 55 (Neutral)</div>
                  </div>
                </div>
              </div>

              {/* X Sentiment */}
              <div className="pt-4 border-t border-[#f5f4f0]/10">
                <h3 className="text-lg font-medium text-[#f5f4f0] mb-4">X (Twitter) Sentiment</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex-1 h-3 bg-[#f5f4f0]/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#a67c38]" style={{ width: "65%" }}></div>
                    </div>
                    <div className="text-sm text-[#a67c38] font-medium">65% Bullish</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 h-3 bg-[#f5f4f0]/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400" style={{ width: "35%" }}></div>
                    </div>
                    <div className="text-sm text-red-400 font-medium">35% Bearish</div>
                  </div>
                  <div className="text-center text-sm text-[#f5f4f0]/60 mt-4">
                    Based on analysis of 12,450 tweets in the last 24 hours
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
