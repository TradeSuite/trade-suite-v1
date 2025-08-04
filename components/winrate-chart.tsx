import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

interface WinrateChartProps {
  timeframe: "week" | "month" | "year"
}

// Dummy data for different timeframes
const weekData = [
  { day: "Mon", winrate: 82 },
  { day: "Tue", winrate: 85 },
  { day: "Wed", winrate: 87 },
  { day: "Thu", winrate: 84 },
  { day: "Fri", winrate: 89 },
  { day: "Sat", winrate: 91 },
  { day: "Sun", winrate: 88 },
]

const monthData = [
  { day: "Week 1", winrate: 83 },
  { day: "Week 2", winrate: 85 },
  { day: "Week 3", winrate: 88 },
  { day: "Week 4", winrate: 91 },
]

const yearData = [
  { day: "Jan", winrate: 80 },
  { day: "Feb", winrate: 82 },
  { day: "Mar", winrate: 84 },
  { day: "Apr", winrate: 83 },
  { day: "May", winrate: 85 },
  { day: "Jun", winrate: 87 },
  { day: "Jul", winrate: 86 },
  { day: "Aug", winrate: 88 },
  { day: "Sep", winrate: 90 },
  { day: "Oct", winrate: 91 },
  { day: "Nov", winrate: 89 },
  { day: "Dec", winrate: 92 },
]

export default function WinrateChart({ timeframe }: WinrateChartProps) {
  const data = timeframe === "week" ? weekData : timeframe === "month" ? monthData : yearData

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#f5f4f0", opacity: 0.6, fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#f5f4f0", opacity: 0.6, fontSize: 12 }}
            domain={[70, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f1c17",
              border: "1px solid #a67c38",
              borderRadius: "8px",
              color: "#f5f4f0",
            }}
            formatter={(value: any) => [`${value}%`, "Winrate"]}
          />
          <Line
            type="monotone"
            dataKey="winrate"
            stroke="#a67c38"
            strokeWidth={2}
            dot={{ fill: "#a67c38", r: 4 }}
            activeDot={{ r: 6, fill: "#a67c38" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
