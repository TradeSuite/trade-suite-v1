"use client"

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { time: "09:00", price: 45320, volume: 1200 },
  { time: "10:00", price: 46180, volume: 1450 },
  { time: "11:00", price: 45890, volume: 1100 },
  { time: "12:00", price: 47200, volume: 1800 },
  { time: "13:00", price: 46950, volume: 1350 },
  { time: "14:00", price: 48100, volume: 2100 },
  { time: "15:00", price: 47800, volume: 1650 },
  { time: "16:00", price: 49200, volume: 2400 },
]

export default function TradingChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#f5f4f0", opacity: 0.6, fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#f5f4f0", opacity: 0.6, fontSize: 12 }}
            domain={["dataMin - 1000", "dataMax + 1000"]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f1c17",
              border: "1px solid #a67c38",
              borderRadius: "8px",
              color: "#f5f4f0",
            }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, "Price"]}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#a67c38"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#a67c38" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
