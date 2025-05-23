import type React from "react"
import Link from "next/link"
import { Home, Compass, Zap, Database, Layout, MessageSquare, GitBranch, History, MoreHorizontal } from "lucide-react"
import { CreateDropdown } from "./create-dropdown"

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 flex items-center">
        <Link href="/" className="flex items-center">
          <span className="text-orange-500 font-bold text-2xl">_zapier</span>
        </Link>
      </div>

      <div className="p-4">
        <CreateDropdown />
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          <NavItem href="/" icon={<Home className="w-5 h-5" />} label="Home" />
          <NavItem href="/discover" icon={<Compass className="w-5 h-5" />} label="Discover" />

          <div className="pt-4"></div>

          <NavItem href="/zaps" icon={<Zap className="w-5 h-5" />} label="Zaps" description="Automated workflows" />
          <NavItem
            href="/tables"
            icon={<Database className="w-5 h-5" />}
            label="Tables"
            description="Automated data storage"
          />
          <NavItem
            href="/interfaces"
            icon={<Layout className="w-5 h-5" />}
            label="Interfaces"
            description="Apps, forms, and pages"
          />
          <NavItem
            href="/chatbots"
            icon={<MessageSquare className="w-5 h-5" />}
            label="Chatbots"
            badge="Beta"
            description="AI-powered chatbot"
          />
          <NavItem
            href="/canvas"
            icon={<GitBranch className="w-5 h-5" />}
            label="Canvas"
            badge="Beta"
            description="Process visualization"
          />

          <div className="pt-4"></div>

          <NavItem href="/connections" icon={<Layout className="w-5 h-5" />} label="App Connections" />
          <NavItem href="/history" icon={<History className="w-5 h-5" />} label="Zap History" />
          <NavItem href="/more" icon={<MoreHorizontal className="w-5 h-5" />} label="More" />
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-1">
            <div className="text-sm font-medium">Free Plan</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  badge?: string
  description?: string
}

function NavItem({ href, icon, label, badge, description }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-start px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
    >
      <span className="mr-3 mt-0.5 text-gray-500">{icon}</span>
      <div className="flex-1">
        <div className="flex items-center">
          <span className="font-medium">{label}</span>
          {badge && <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">{badge}</span>}
        </div>
        {description && <div className="text-xs text-gray-500">{description}</div>}
      </div>
    </Link>
  )
}
