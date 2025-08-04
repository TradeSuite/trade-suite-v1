"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink } from "lucide-react"
import Chatbot from "@/components/chatbot"

// Dummy data for agents
const agentsData = [
  {
    name: "Silverbullet BTC",
    type: "Trader",
    description: "Specialized in BTC swing trading with 87% accuracy",
    image: "/placeholder.svg?height=80&width=80&text=BTC+Trader",
  },
  {
    name: "Gauls",
    type: "Trader",
    description: "Altcoin specialist focusing on mid-caps",
    image: "/placeholder.svg?height=80&width=80&text=ALT+Expert",
  },
  {
    name: "Titan",
    type: "Market",
    description: "Market structure analysis and key levels",
    image: "/placeholder.svg?height=80&width=80&text=Market+AI",
  },
  {
    name: "Income Sharks",
    type: "Trader",
    description: "Scalping expert with high frequency signals",
    image: "/placeholder.svg?height=80&width=80&text=Scalper",
  },
  {
    name: "ETH/BTC",
    type: "Market",
    description: "Ratio analysis and correlation insights",
    image: "/placeholder.svg?height=80&width=80&text=Ratio+AI",
  },
  {
    name: "TOTAL2",
    type: "Market",
    description: "Total market cap analysis excluding BTC",
    image: "/placeholder.svg?height=80&width=80&text=Market+Cap",
  },
  {
    name: "Confluence Agent",
    type: "Market",
    description: "AI-powered multi-source signal verification",
    image: "/placeholder.svg?height=80&width=80&text=AI+Brain",
    highlighted: true,
  },
]

// Dummy data for agent outputs
const agentOutputs = {
  structure: [
    {
      agent: "Titan",
      content: "BTC forming a clear higher high pattern on the daily. Key resistance at $48.2k.",
      time: "2h ago",
    },
    {
      agent: "TOTAL2",
      content: "Altcoin market cap approaching resistance. Watch for breakout or rejection.",
      time: "5h ago",
    },
  ],
  sentiment: [
    {
      agent: "Confluence Agent",
      content: "Sentiment analysis shows 72% bullish bias across major trading communities.",
      time: "1h ago",
    },
    {
      agent: "ETH/BTC",
      content: "ETH showing relative strength vs BTC. Ratio approaching key resistance.",
      time: "3h ago",
    },
  ],
  analysis: [
    {
      agent: "Silverbullet BTC",
      content: "Expecting BTC to test $50k within 48 hours based on volume analysis and OI data.",
      time: "30m ago",
    },
    {
      agent: "Gauls",
      content: "SOL showing strongest momentum among top 10. Target: $110 this week.",
      time: "4h ago",
    },
  ],
}

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAgentClick = (agent: any) => {
    setSelectedAgent(agent)
    setIsDialogOpen(true)
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-serif text-[#f5f4f0]">AI Agents</h1>
        <Badge variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10">
          7 ACTIVE
        </Badge>
      </div>

      {/* AI Agent Command Center - Clean Design */}
      <Card className="bg-[#0f1c17] border-[#f5f4f0]/10 mb-8">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-serif text-[#f5f4f0]">AI Agent Command Center</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-96">
            <Chatbot
              placeholder="Give instructions to your AI agent team..."
              botName="Agent Manager"
              initialMessage="Hello! I'm your AI Agent Manager. You can give me instructions to modify agent behavior, adjust parameters, or request specific analysis. How can I help you today?"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agentsData.map((agent, index) => (
          <Card
            key={index}
            className={`bg-[#0f1c17] border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300 cursor-pointer ${
              agent.highlighted ? "border-[#a67c38]" : ""
            }`}
            onClick={() => handleAgentClick(agent)}
          >
            <CardContent className="p-4 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#f5f4f0]/5">
                <img src={agent.image || "/placeholder.svg"} alt={agent.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-[#f5f4f0]">{agent.name}</h3>
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
                <p className="text-xs text-[#f5f4f0]/60 mt-2">{agent.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-[#0f1c17] border-[#f5f4f0]/10 mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-serif text-[#f5f4f0]">Agent Outputs</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="structure" className="space-y-4">
            <TabsList className="bg-[#0f1c17] border border-[#f5f4f0]/10">
              <TabsTrigger
                value="structure"
                className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38]"
              >
                Market Structure
              </TabsTrigger>
              <TabsTrigger
                value="sentiment"
                className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38]"
              >
                Sentiment
              </TabsTrigger>
              <TabsTrigger
                value="analysis"
                className="data-[state=active]:bg-[#a67c38]/10 data-[state=active]:text-[#a67c38]"
              >
                Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="structure" className="space-y-3">
              {agentOutputs.structure.map((output, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-[#a67c38]">{output.agent}</div>
                    <div className="text-xs text-[#f5f4f0]/60">{output.time}</div>
                  </div>
                  <p className="text-sm text-[#f5f4f0]/90">{output.content}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="sentiment" className="space-y-3">
              {agentOutputs.sentiment.map((output, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-[#a67c38]">{output.agent}</div>
                    <div className="text-xs text-[#f5f4f0]/60">{output.time}</div>
                  </div>
                  <p className="text-sm text-[#f5f4f0]/90">{output.content}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="analysis" className="space-y-3">
              {agentOutputs.analysis.map((output, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-[#a67c38]">{output.agent}</div>
                    <div className="text-xs text-[#f5f4f0]/60">{output.time}</div>
                  </div>
                  <p className="text-sm text-[#f5f4f0]/90">{output.content}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#0f1c17] border-[#f5f4f0]/10 text-[#f5f4f0] max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-serif">{selectedAgent?.name}</span>
                {selectedAgent && (
                  <Badge
                    variant="outline"
                    className={
                      selectedAgent.type === "Trader"
                        ? "border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10"
                        : "border-[#f5f4f0]/20 text-[#f5f4f0]/60 bg-[#f5f4f0]/5"
                    }
                  >
                    {selectedAgent.type}
                  </Badge>
                )}
              </div>
            </DialogTitle>
          </DialogHeader>
          {selectedAgent && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-[#f5f4f0]/5">
                  <img
                    src={selectedAgent.image || "/placeholder.svg"}
                    alt={selectedAgent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#f5f4f0]/90">{selectedAgent.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-[#f5f4f0]/60 uppercase tracking-wide">Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-[#f5f4f0]/60">Accuracy</div>
                    <div className="text-[#a67c38] font-medium">87%</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#f5f4f0]/60">Signals</div>
                    <div className="text-[#f5f4f0] font-medium">243</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#f5f4f0]/60">Win Rate</div>
                    <div className="text-[#a67c38] font-medium">82%</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#f5f4f0]/60">Avg. Profit</div>
                    <div className="text-[#a67c38] font-medium">+5.8%</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button className="bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17]">
                  {selectedAgent.type === "Trader" ? "Visit Channel" : "View Analysis"}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
