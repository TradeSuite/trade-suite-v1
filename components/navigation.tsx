"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, LineChart, Brain, BarChart3, Settings, BookOpen } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Signals", path: "/signals", icon: LineChart },
    { name: "Agents", path: "/agents", icon: Brain },
    { name: "Insights", path: "/insights", icon: BarChart3 },
    { name: "Training", path: "/training", icon: BookOpen },
    { name: "Settings", path: "/settings", icon: Settings },
  ]

  return (
    <div
      className={`bg-[#0f1c17] border-r border-[#f5f4f0]/10 h-screen sticky top-0 transition-all duration-300 ${
        isCollapsed ? "w-12 md:w-16" : "w-64"
      }`}
    >
      <div
        className={`p-2 md:p-4 border-b border-[#f5f4f0]/10 flex items-center justify-between ${isCollapsed ? "px-1" : ""}`}
      >
        {!isCollapsed && <h1 className="text-xl md:text-2xl font-serif tracking-wider text-[#f5f4f0]">TradeSuite</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-1 rounded-md hover:bg-[#f5f4f0]/5 text-[#a67c38] transition-colors ${isCollapsed ? "mx-auto" : ""}`}
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      <nav className={`p-1 md:p-2 ${isCollapsed ? "px-1" : ""}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center space-x-2 px-2 md:px-4 py-2 md:py-3 rounded-lg mb-1 transition-all duration-200 ${
                isActive
                  ? "bg-[#a67c38]/20 text-[#a67c38]"
                  : "text-[#f5f4f0]/70 hover:text-[#f5f4f0] hover:bg-[#f5f4f0]/5"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <item.icon className="w-4 h-4 md:w-5 md:h-5" />
              {!isCollapsed && <span className="text-sm md:text-base">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      <div className={`absolute bottom-4 left-0 right-0 ${isCollapsed ? "px-1" : "px-4"}`}>
        {!isCollapsed && (
          <div className="p-3 md:p-4 rounded-lg bg-[#f5f4f0]/5 text-center">
            <div className="text-xs text-[#f5f4f0]/60 uppercase tracking-wide">Portfolio</div>
            <div className="text-base md:text-lg font-medium text-[#a67c38]">$847,320</div>
            <div className="text-xs text-[#a67c38]">+12.4%</div>
          </div>
        )}
      </div>
    </div>
  )
}
