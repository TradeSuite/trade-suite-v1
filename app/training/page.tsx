"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, Save, ImageIcon } from "lucide-react"

export default function TrainingPage() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [description, setDescription] = useState("")

  const labelOptions = [
    { id: "paper", label: "Paper Trade", color: "bg-blue-500/20 text-blue-400 border-blue-400/30" },
    { id: "historical", label: "Historische Setup", color: "bg-purple-500/20 text-purple-400 border-purple-400/30" },
    { id: "real", label: "Real Trade", color: "bg-[#a67c38]/20 text-[#a67c38] border-[#a67c38]/30" },
  ]

  const toggleLabel = (labelId: string) => {
    setSelectedLabels((prev) => (prev.includes(labelId) ? prev.filter((id) => id !== labelId) : [...prev, labelId]))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    // Timestamp will be determined by LLM processing
    console.log("Saving training data:", {
      image: uploadedImage,
      description,
      labels: selectedLabels,
      timestamp: new Date().toISOString(), // Auto-generated, will be processed by LLM
    })
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-serif text-[#f5f4f0]">Training & Feedback</h1>
        <Badge variant="outline" className="border-[#a67c38] text-[#a67c38] bg-[#a67c38]/10">
          AI LEARNING
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-[#f5f4f0] flex items-center space-x-2">
              <Upload className="w-5 h-5 text-[#a67c38]" />
              <span>Upload Screenshot</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-[#f5f4f0]/20 rounded-lg p-8 text-center hover:border-[#a67c38]/50 transition-colors">
              {uploadedImage ? (
                <div className="space-y-4">
                  <img
                    src={uploadedImage || "/placeholder.svg"}
                    alt="Uploaded screenshot"
                    className="max-w-full h-48 object-contain mx-auto rounded-lg"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setUploadedImage(null)}
                    className="border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:text-[#f5f4f0] bg-transparent"
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <ImageIcon className="w-12 h-12 text-[#f5f4f0]/40 mx-auto" />
                  <div>
                    <p className="text-[#f5f4f0]/80 mb-2">Drop your screenshot here or click to browse</p>
                    <p className="text-sm text-[#f5f4f0]/60">Supports PNG, JPG, JPEG files</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload">
                    <Button
                      variant="outline"
                      className="border-[#a67c38] text-[#a67c38] hover:bg-[#a67c38] hover:text-[#0f1c17] bg-transparent cursor-pointer"
                      asChild
                    >
                      <span>Choose File</span>
                    </Button>
                  </label>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Form Section */}
        <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-[#f5f4f0]">Training Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#f5f4f0]/80 font-medium">
                Toelichting
              </Label>
              <Textarea
                id="description"
                placeholder="Beschrijf de setup, context, en wat er gebeurde..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-[#0f1c17] border-[#f5f4f0]/20 text-[#f5f4f0] placeholder:text-[#f5f4f0]/40 min-h-[100px] resize-none"
              />
            </div>

            {/* Label Selection */}
            <div className="space-y-3">
              <Label className="text-[#f5f4f0]/80 font-medium">Label Keuze</Label>
              <div className="flex flex-wrap gap-2">
                {labelOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleLabel(option.id)}
                    className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                      selectedLabels.includes(option.id)
                        ? option.color
                        : "border-[#f5f4f0]/20 text-[#f5f4f0]/60 hover:border-[#f5f4f0]/40 hover:text-[#f5f4f0]/80"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Note about timestamp */}
            <div className="p-3 rounded-lg bg-[#a67c38]/10 border border-[#a67c38]/20">
              <p className="text-sm text-[#a67c38]">
                <strong>Note:</strong> Timestamp will be automatically determined by our AI system based on the chart
                content and context.
              </p>
            </div>

            {/* Save Button */}
            <Button
              onClick={handleSave}
              disabled={!uploadedImage || !description || selectedLabels.length === 0}
              className="w-full bg-[#a67c38] hover:bg-[#a67c38]/80 text-[#0f1c17] font-medium py-3 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              Opslaan
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Training Data */}
      <Card className="bg-[#0f1c17] border-[#f5f4f0]/10">
        <CardHeader>
          <CardTitle className="text-xl font-serif text-[#f5f4f0]">Recent Training Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                description: "BTC breakout setup met volume confirmatie",
                labels: ["Real Trade"],
                timestamp: "2024-01-15 14:30",
                image: "/placeholder.svg?height=60&width=100&text=Chart",
              },
              {
                id: 2,
                description: "ETH resistance rejection pattern",
                labels: ["Paper Trade", "Historische Setup"],
                timestamp: "2024-01-14 09:15",
                image: "/placeholder.svg?height=60&width=100&text=Chart",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 rounded-lg border border-[#f5f4f0]/10 hover:border-[#a67c38]/30 transition-colors"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt="Training chart"
                  className="w-16 h-10 object-cover rounded border border-[#f5f4f0]/10"
                />
                <div className="flex-1">
                  <p className="text-[#f5f4f0] font-medium mb-1">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.labels.map((label, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-[#a67c38]/50 text-[#a67c38] bg-[#a67c38]/10 text-xs"
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-[#f5f4f0]/60">{item.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
