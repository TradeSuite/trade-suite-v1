"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, X, Plus, Search, Upload } from "lucide-react"
import { EnhancedSwitch } from "@/components/ui/enhanced-switch"

// Crypto pairs for webhook filters
const cryptoPairs = [
  "BTC/USDT",
  "ETH/USDT",
  "BNB/USDT",
  "XRP/USDT",
  "ADA/USDT",
  "SOL/USDT",
  "DOGE/USDT",
  "DOT/USDT",
  "AVAX/USDT",
  "SHIB/USDT",
  "MATIC/USDT",
  "LTC/USDT",
  "UNI/USDT",
  "ATOM/USDT",
  "LINK/USDT",
  "BCH/USDT",
  "XLM/USDT",
  "ALGO/USDT",
  "VET/USDT",
  "ICP/USDT",
  "FIL/USDT",
  "TRX/USDT",
  "ETC/USDT",
  "THETA/USDT",
  "XMR/USDT",
  "AAVE/USDT",
  "EOS/USDT",
  "AXS/USDT",
  "SAND/USDT",
  "MANA/USDT",
  "CRV/USDT",
  "COMP/USDT",
  "MKR/USDT",
  "SNX/USDT",
  "SUSHI/USDT",
  "YFI/USDT",
  "1INCH/USDT",
  "BAT/USDT",
  "ZRX/USDT",
  "ENJ/USDT",
]

export default function SettingsPage() {
  const [selectedPairs, setSelectedPairs] = useState<string[]>(["BTC/USDT", "ETH/USDT", "SOL/USDT"])
  const [searchTerm, setSearchTerm] = useState("")
  const [confidenceThreshold, setConfidenceThreshold] = useState([80])
  const [timeWindow, setTimeWindow] = useState([15])
  const [maxAlerts, setMaxAlerts] = useState(10)

  const addPair = (pair: string) => {
    if (!selectedPairs.includes(pair)) {
      setSelectedPairs([...selectedPairs, pair])
    }
  }

  const removePair = (pair: string) => {
    setSelectedPairs(selectedPairs.filter((p) => p !== pair))
  }

  const filteredPairs = cryptoPairs.filter(
    (pair) => pair.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedPairs.includes(pair),
  )

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-serif text-[#f5f4f0]">Settings</h1>
      </div>

      <Tabs defaultValue="app" className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="bg-[#0f1c17] border border-[#f5f4f0]/10 flex-nowrap min-w-max">
            <TabsTrigger
              value="app"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              App Settings
            </TabsTrigger>
            <TabsTrigger
              value="api"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              API Status
            </TabsTrigger>
            <TabsTrigger
              value="webhooks"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              Webhook Filters
            </TabsTrigger>
            <TabsTrigger
              value="confluence"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              Confluence Settings
            </TabsTrigger>
            <TabsTrigger
              value="agents"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              Agent Manager
            </TabsTrigger>
            <TabsTrigger
              value="logs"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              Logs
            </TabsTrigger>
            <TabsTrigger
              value="debug"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              AI Debug
            </TabsTrigger>
            <TabsTrigger
              value="developer"
              className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38] whitespace-nowrap"
            >
              Developer Tools
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">General Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#f5f4f0] font-medium">Notifications</h3>
                      <p className="text-sm text-[#f5f4f0]/60">Receive alerts for new signals and insights</p>
                    </div>
                    <EnhancedSwitch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#f5f4f0] font-medium">Dark Mode</h3>
                      <p className="text-sm text-[#f5f4f0]/60">Toggle between light and dark themes</p>
                    </div>
                    <EnhancedSwitch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#f5f4f0] font-medium">Sound Effects</h3>
                      <p className="text-sm text-[#f5f4f0]/60">Play sounds for important events</p>
                    </div>
                    <EnhancedSwitch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#f5f4f0] font-medium">Live Sync</h3>
                      <p className="text-sm text-[#f5f4f0]/60">Real-time synchronization with trading platforms</p>
                    </div>
                    <EnhancedSwitch defaultChecked />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#f5f4f0]/10">
                  <div className="space-y-2">
                    <Label htmlFor="signal-expiry" className="text-[#f5f4f0]/80">
                      Signal Expiry Threshold (minutes)
                    </Label>
                    <Input
                      id="signal-expiry"
                      type="number"
                      defaultValue="30"
                      className="bg-[#0f1c17] border-2 border-[#f5f4f0]/30 text-[#f5f4f0] focus:border-[#a67c38] transition-colors"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Signal Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="min-confidence" className="text-[#f5f4f0]/80">
                      Minimum Confidence: {confidenceThreshold[0]}%
                    </Label>
                    <Slider
                      value={confidenceThreshold}
                      onValueChange={setConfidenceThreshold}
                      max={100}
                      min={50}
                      step={5}
                      className="w-full [&>span:first-child]:bg-[#f5f4f0]/20 [&>span:first-child>span]:bg-[#a67c38] [&>span:last-child]:bg-[#a67c38] [&>span:last-child]:border-2 [&>span:last-child]:border-[#f5f4f0]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeframes" className="text-[#f5f4f0]/80">
                      Preferred Timeframes
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {["1m", "5m", "15m", "1H", "4H", "1D", "1W"].map((tf) => (
                        <button
                          key={tf}
                          className="px-3 py-1 rounded-full border border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 text-sm hover:bg-[#a67c38]/20 transition-colors"
                        >
                          {tf}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api">
          <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#f5f4f0]">API Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  { name: "TradingView API", status: "Connected", icon: CheckCircle, color: "text-green-500" },
                  { name: "Binance API", status: "Connected", icon: CheckCircle, color: "text-green-500" },
                  { name: "Telegram Integration", status: "Connected", icon: CheckCircle, color: "text-green-500" },
                  { name: "Twitter API", status: "Rate Limited", icon: Clock, color: "text-yellow-500" },
                  { name: "OpenAI API", status: "Connected", icon: CheckCircle, color: "text-green-500" },
                ].map((api, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border border-[#f5f4f0]/10"
                  >
                    <div className="font-medium text-[#f5f4f0]">{api.name}</div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${api.color}`}>{api.status}</span>
                      <api.icon className={`w-4 h-4 ${api.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <Button className="bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17] rounded-lg">Refresh Status</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks">
          <div className="space-y-6">
            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Crypto Pairs Filter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Search and Add */}
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#f5f4f0]/40" />
                    <Input
                      placeholder="Search crypto pairs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-[#0f1c17] border-2 border-[#f5f4f0]/30 text-[#f5f4f0] focus:border-[#a67c38] transition-colors"
                    />
                  </div>
                </div>

                {/* Search Results */}
                {searchTerm && (
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {filteredPairs.slice(0, 5).map((pair) => (
                      <button
                        key={pair}
                        onClick={() => addPair(pair)}
                        className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#f5f4f0]/5 text-[#f5f4f0]/80 hover:text-[#f5f4f0] transition-colors"
                      >
                        <span>{pair}</span>
                        <Plus className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Selected Pairs */}
                <div>
                  <Label className="text-[#f5f4f0]/80 font-medium mb-3 block">
                    Selected Pairs ({selectedPairs.length}/40)
                  </Label>
                  <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                    {selectedPairs.map((pair) => (
                      <button
                        key={pair}
                        onClick={() => removePair(pair)}
                        className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#a67c38]/20 text-[#a67c38] border border-[#a67c38]/30 hover:bg-[#a67c38]/30 transition-colors group"
                      >
                        <span className="text-sm">{pair}</span>
                        <X className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Filter Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[#f5f4f0] font-medium">Multi-chart pairing logic</h3>
                        <p className="text-sm text-[#f5f4f0]/60">Enable cross-pair analysis</p>
                      </div>
                      <EnhancedSwitch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[#f5f4f0] font-medium">Alleen Top-40 volume</h3>
                        <p className="text-sm text-[#f5f4f0]/60">Filter by volume ranking</p>
                      </div>
                      <EnhancedSwitch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[#f5f4f0]/80">Max alerts per minuut: {maxAlerts}</Label>
                      <Input
                        type="number"
                        value={maxAlerts}
                        onChange={(e) => setMaxAlerts(Number(e.target.value))}
                        min="1"
                        max="100"
                        className="bg-[#0f1c17] border-2 border-[#f5f4f0]/30 text-[#f5f4f0] focus:border-[#a67c38] transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="confluence">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Main Confluences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Inverse Buy/Sell", "Double Buy/Sell", "Buy/Sell + EW (same pair)", "Buy/Sell + EW (other pair)"].map(
                  (confluence) => (
                    <div key={confluence} className="flex items-center justify-between">
                      <span className="text-[#f5f4f0]">{confluence}</span>
                      <EnhancedSwitch defaultChecked />
                    </div>
                  ),
                )}

                <div className="pt-4 border-t border-[#f5f4f0]/10">
                  <div className="space-y-2">
                    <Label className="text-[#f5f4f0]/80">Time Window Between Signals: {timeWindow[0]} minutes</Label>
                    <Slider
                      value={timeWindow}
                      onValueChange={setTimeWindow}
                      max={60}
                      min={5}
                      step={5}
                      className="w-full [&>span:first-child]:bg-[#f5f4f0]/20 [&>span:first-child>span]:bg-[#a67c38] [&>span:last-child]:bg-[#a67c38] [&>span:last-child]:border-2 [&>span:last-child]:border-[#f5f4f0]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <h3 className="text-[#f5f4f0] font-medium">Cross-timeframe matching</h3>
                    <p className="text-sm text-[#f5f4f0]/60">Match signals across different timeframes</p>
                  </div>
                  <EnhancedSwitch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Secondary Confluences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "RSI Divergence", threshold: 70 },
                  { name: "Touched Key Level", threshold: 85 },
                  { name: "EW2 zone", threshold: 60 },
                  { name: "HTF signals", threshold: 80 },
                  { name: "Influencer setups", threshold: 50 },
                ].map((confluence) => (
                  <div key={confluence.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[#f5f4f0]">{confluence.name}</span>
                      <EnhancedSwitch defaultChecked />
                    </div>
                    <div className="ml-4">
                      <Label className="text-xs text-[#f5f4f0]/60">Threshold: {confluence.threshold}%</Label>
                      <Slider
                        defaultValue={[confluence.threshold]}
                        max={100}
                        min={0}
                        step={5}
                        className="w-full [&>span:first-child]:bg-[#f5f4f0]/20 [&>span:first-child>span]:bg-[#a67c38] [&>span:last-child]:bg-[#a67c38] [&>span:last-child]:border-2 [&>span:last-child]:border-[#f5f4f0]"
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-[#f5f4f0]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[#f5f4f0] font-medium">Beeldanalyse agent actief</h3>
                      <p className="text-sm text-[#f5f4f0]/60">AI-powered chart pattern recognition</p>
                    </div>
                    <EnhancedSwitch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="agents">
          <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#f5f4f0]">Agent Manager</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  { name: "Silverbullet BTC", type: "Trader", active: true, confidence: 1.2, scope: "BTC" },
                  { name: "Gauls", type: "Trader", active: true, confidence: 1.0, scope: "Altcoins" },
                  { name: "Titan", type: "Market", active: true, confidence: 1.1, scope: "All" },
                  { name: "Income Sharks", type: "Trader", active: false, confidence: 0.9, scope: "All" },
                  { name: "ETH/BTC", type: "Market", active: true, confidence: 1.0, scope: "Custom" },
                  { name: "TOTAL2", type: "Market", active: true, confidence: 1.0, scope: "All" },
                  { name: "Confluence Agent", type: "Market", active: true, confidence: 1.3, scope: "All" },
                ].map((agent, index) => (
                  <div key={index} className="p-4 rounded-lg border border-[#f5f4f0]/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-[#f5f4f0]">{agent.name}</div>
                        <Badge
                          variant="outline"
                          className={
                            agent.type === "Trader"
                              ? "border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 text-xs mt-1"
                              : "border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-[#f5f4f0]/5 text-xs mt-1"
                          }
                        >
                          {agent.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-[#f5f4f0]/60">Active</div>
                        <EnhancedSwitch checked={agent.active} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-xs text-[#f5f4f0]/60">Confidence Multiplier: {agent.confidence}x</Label>
                        <Slider
                          defaultValue={[agent.confidence]}
                          max={2}
                          min={0.5}
                          step={0.1}
                          className="w-full [&>span:first-child]:bg-[#f5f4f0]/20 [&>span:first-child>span]:bg-[#a67c38] [&>span:last-child]:bg-[#a67c38] [&>span:last-child]:border-2 [&>span:last-child]:border-[#f5f4f0]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-[#f5f4f0]/60">Strategy Scope</Label>
                        <Select defaultValue={agent.scope}>
                          <SelectTrigger className="bg-[#0f1c17] border-[#f5f4f0]/20 text-[#f5f4f0]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0f1c17] border-[#f5f4f0]/10 text-[#f5f4f0]">
                            <SelectItem value="All">All</SelectItem>
                            <SelectItem value="BTC">BTC Only</SelectItem>
                            <SelectItem value="Altcoins">Altcoins</SelectItem>
                            <SelectItem value="Custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  className="border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:text-[#f5f4f0] bg-transparent rounded-lg"
                >
                  Disable All
                </Button>
                <Button className="bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17] rounded-lg">Enable All</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#f5f4f0]">System Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-[#0f1c17] border border-[#f5f4f0]/10 rounded-lg p-4 h-80 overflow-auto font-mono text-sm text-[#f5f4f0]/80">
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:15:32]</span>
                    <span>System initialized</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:15:35]</span>
                    <span>Connected to Binance API</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:15:38]</span>
                    <span>Connected to TradingView API</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:15:42]</span>
                    <span>AI models loaded successfully</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:16:01]</span>
                    <span>Agent Silverbullet BTC activated</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:16:05]</span>
                    <span>Agent Gauls activated</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:16:08]</span>
                    <span>Agent Titan activated</span>
                  </div>
                  <div className="flex">
                    <span className="text-red-400 mr-2">[07:16:15]</span>
                    <span>Warning: Twitter API rate limit reached</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:16:30]</span>
                    <span>New signal detected: BTC/USDT (BUY)</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#a67c38] mr-2">[07:17:45]</span>
                    <span>Market sentiment analysis complete</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  variant="outline"
                  className="border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:text-[#f5f4f0] bg-transparent rounded-lg"
                >
                  Download Logs
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debug">
          <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-[#f5f4f0]">AI Debug Console</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#0f1c17] border border-[#f5f4f0]/10 rounded-lg p-4 h-60 overflow-auto font-mono text-sm text-[#f5f4f0]/80">
                  <div className="space-y-2">
                    <div className="flex">
                      <span className="text-[#a67c38] mr-2">&gt;</span>
                      <span>AI system status: ONLINE</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#a67c38] mr-2">&gt;</span>
                      <span>Model version: TradeSuite-GPT v2.3.1</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#a67c38] mr-2">&gt;</span>
                      <span>Active models: price_prediction, sentiment_analysis, pattern_recognition</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#a67c38] mr-2">&gt;</span>
                      <span>Last training: 2023-07-22 (3 days ago)</span>
                    </div>
                    <div className="flex">
                      <span className="text-[#a67c38] mr-2">&gt;</span>
                      <span>Current accuracy: 87.3%</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter debug command..."
                    className="bg-[#0f1c17] border-2 border-[#f5f4f0]/30 text-[#f5f4f0] focus:border-[#a67c38] transition-colors"
                  />
                  <Button className="bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17] rounded-lg">Execute</Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#f5f4f0] font-medium mb-3">Laatste 5 LLM-calls</h3>
                    <div className="space-y-2 text-sm">
                      {[
                        { model: "GPT-4", tokens: 1250, time: "0.8s", status: "Success" },
                        { model: "GPT-4", tokens: 890, time: "0.6s", status: "Success" },
                        { model: "Claude-3", tokens: 2100, time: "1.2s", status: "Success" },
                        { model: "GPT-4", tokens: 750, time: "0.5s", status: "Rate Limited" },
                        { model: "GPT-4", tokens: 1100, time: "0.7s", status: "Success" },
                      ].map((call, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-2 rounded border border-[#f5f4f0]/10"
                        >
                          <span className="text-[#f5f4f0]">{call.model}</span>
                          <span className="text-[#f5f4f0]/60">{call.tokens} tokens</span>
                          <span className="text-[#f5f4f0]/60">{call.time}</span>
                          <span className={call.status === "Success" ? "text-green-500" : "text-yellow-500"}>
                            {call.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-[#f5f4f0] font-medium">Debug per Agent Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Trader", "Market", "Sentiment", "Technical"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <EnhancedSwitch />
                          <span className="text-sm text-[#f5f4f0]/80">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#f5f4f0]/10 space-y-3">
                    <h3 className="text-[#f5f4f0] font-medium">Quick Commands</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 cursor-pointer hover:bg-[#a67c38]/20 transition-colors"
                      >
                        /status
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 cursor-pointer hover:bg-[#a67c38]/20 transition-colors"
                      >
                        /retrain
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 cursor-pointer hover:bg-[#a67c38]/20 transition-colors"
                      >
                        /metrics
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 cursor-pointer hover:bg-[#a67c38]/20 transition-colors"
                      >
                        /reset
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="developer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Model Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent rounded-lg"
                >
                  Force Retrain Models
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:text-[#f5f4f0] bg-transparent rounded-lg"
                >
                  Push Signal Handmatig
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:text-[#f5f4f0] bg-transparent rounded-lg"
                >
                  Database Cache Reset
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:text-[#f5f4f0] bg-transparent rounded-lg"
                >
                  Reload Agents
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-[#f5f4f0]">Beeldanalyse Test</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-[#f5f4f0]/20 rounded-lg p-6 text-center hover:border-[#a67c38]/50 transition-colors">
                  <Upload className="w-8 h-8 text-[#f5f4f0]/40 mx-auto mb-2" />
                  <p className="text-[#f5f4f0]/80 mb-2">Upload test screenshot</p>
                  <p className="text-sm text-[#f5f4f0]/60">Test AI chart pattern recognition</p>
                  <input type="file" accept="image/*" className="hidden" id="test-upload" />
                  <label htmlFor="test-upload">
                    <Button
                      variant="outline"
                      className="border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent cursor-pointer mt-3 rounded-lg"
                      asChild
                    >
                      <span>Choose File</span>
                    </Button>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
