"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User } from "lucide-react"

interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

interface ChatbotProps {
  title?: string
  placeholder: string
  botName: string
  initialMessage?: string
}

export default function Chatbot({ title, placeholder, botName, initialMessage }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    ...(initialMessage
      ? [
          {
            id: "1",
            type: "bot" as const,
            content: initialMessage,
            timestamp: new Date(),
          },
        ]
      : []),
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: getBotResponse(inputValue),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (input: string): string => {
    const responses = [
      "I understand your request. Let me process that for you.",
      "That's an interesting point. I'll analyze the current market conditions.",
      "Based on the current data, here's what I recommend...",
      "I've updated the system parameters according to your instructions.",
      "The AI agents have been notified of your preferences.",
      "I'm analyzing the market sentiment and will provide insights shortly.",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full bg-[#0f1c17] rounded-lg border border-[#f5f4f0]/10">
      {/* Header */}
      {title && (
        <div className="px-4 py-3 border-b border-[#f5f4f0]/10">
          <h3 className="text-lg font-serif text-[#f5f4f0] flex items-center space-x-2">
            <Bot className="w-5 h-5 text-[#a67c38]" />
            <span>{title}</span>
          </h3>
        </div>
      )}

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 min-h-[300px]">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.type === "bot" && (
                <div className="w-8 h-8 rounded-full bg-[#a67c38]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-[#a67c38]" />
                </div>
              )}
              <div
                className={`max-w-[85%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-[#a67c38] text-[#0f1c17] rounded-br-sm"
                    : "bg-[#f5f4f0]/10 text-[#f5f4f0] rounded-bl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs opacity-60 mt-2">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              {message.type === "user" && (
                <div className="w-8 h-8 rounded-full bg-[#f5f4f0]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-4 h-4 text-[#f5f4f0]" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#a67c38]/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-[#a67c38]" />
              </div>
              <div className="bg-[#f5f4f0]/10 text-[#f5f4f0] p-3 rounded-lg rounded-bl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#a67c38] rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-[#a67c38] rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[#a67c38] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-[#f5f4f0]/10">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            className="bg-[#0f1c17] border-[#f5f4f0]/20 text-[#f5f4f0] placeholder:text-[#f5f4f0]/40 focus:border-[#a67c38] transition-colors"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17] px-4 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-xs text-[#f5f4f0]/40 text-center mt-2">Powered by {botName} • Press Enter to send</div>
      </div>
    </div>
  )
}
