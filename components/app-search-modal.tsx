"use client"

import { useState, useEffect } from "react"
import { Search, ArrowUpRight, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface AppSearchModalProps {
  isOpen: boolean
  onClose: () => void
  type: "trigger" | "action"
  onSelect?: (app: string) => void
}

export function AppSearchModal({ isOpen, onClose, type, onSelect }: AppSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredApps, setFilteredApps] = useState<Array<{ name: string; icon: string; color: string }>>([])

  // Sample app data
  const allApps = [
    { name: "Facebook Lead Ads", icon: "facebook", color: "bg-blue-500" },
    { name: "Google Calendar", icon: "calendar", color: "bg-blue-400" },
    { name: "Google Drive", icon: "drive", color: "bg-green-400" },
    { name: "Google Forms", icon: "forms", color: "bg-purple-600" },
    { name: "Gmail", icon: "gmail", color: "bg-red-500" },
    { name: "Google Sheets", icon: "sheets", color: "bg-green-500" },
    { name: "HubSpot", icon: "hubspot", color: "bg-orange-500" },
    { name: "Mailchimp", icon: "mailchimp", color: "bg-yellow-500" },
    { name: "Notion", icon: "notion", color: "bg-gray-800" },
    { name: "Slack", icon: "slack", color: "bg-purple-500" },
    { name: "Calendly", icon: "calendly", color: "bg-blue-600" },
    { name: "Typeform", icon: "typeform", color: "bg-gray-700" },
  ]

  // Built-in tools
  const builtInTools = [
    { name: "Webhooks", icon: "webhook", color: "bg-orange-500" },
    { name: "Schedule", icon: "schedule", color: "bg-orange-500" },
    { name: "Email", icon: "email", color: "bg-orange-500" },
    { name: "RSS", icon: "rss", color: "bg-orange-500" },
    { name: "Code", icon: "code", color: "bg-orange-500" },
    { name: "Email Parser", icon: "parser", color: "bg-orange-500" },
    { name: "Sub-Zap", icon: "subzap", color: "bg-orange-500" },
    { name: "IMAP", icon: "imap", color: "bg-orange-500" },
  ]

  // Filter apps based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredApps(allApps)
    } else {
      const filtered = allApps.filter((app) => app.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredApps(filtered)
    }
  }, [searchQuery])

  // Initialize with all apps
  useEffect(() => {
    setFilteredApps(allApps)
  }, [isOpen])

  const handleAppSelect = (appName: string) => {
    if (onSelect) {
      onSelect(appName)
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0">
        <div className="flex h-[600px]">
          {/* Sidebar */}
          <div className="w-[200px] border-r border-gray-200 bg-gray-50 p-2">
            <div className="bg-blue-100 text-blue-800 rounded-md p-3 mb-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </div>
            </div>

            <div className="space-y-1">
              <SidebarItem icon="grid" label="Apps" />
              <SidebarItem icon="sparkles" label="AI" />
              <SidebarItem icon="flow" label="Flow controls" />
              <SidebarItem icon="tool" label="Utilities" />
              <SidebarItem icon="package" label="Products" />
              <SidebarItem icon="settings" label="Custom" />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="search"
                  placeholder="Search 7,000+ apps and tools..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
              <button onClick={onClose} className="ml-2 text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-end px-4 pt-2">
              <a href="#" className="text-blue-500 text-sm flex items-center">
                Browse all <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </div>

            {filteredApps.length > 0 ? (
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Your top apps</h3>
                <div className="grid grid-cols-1 gap-3">
                  {filteredApps.map((app, index) => (
                    <AppItem
                      key={index}
                      icon={app.icon}
                      color={app.color}
                      name={app.name}
                      onClick={() => handleAppSelect(app.name)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 text-center">
                <p className="text-gray-500">No apps found matching "{searchQuery}"</p>
              </div>
            )}

            {searchQuery.trim() === "" && (
              <>
                <div className="p-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Popular built-in tools</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {builtInTools.map((tool, index) => (
                      <AppItem
                        key={index}
                        icon={tool.icon}
                        color={tool.color}
                        name={tool.name}
                        onClick={() => handleAppSelect(tool.name)}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">New Zapier products</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <AppItem
                      icon="chatbot"
                      color="bg-orange-500"
                      name="Chatbots"
                      onClick={() => handleAppSelect("Chatbots")}
                    />
                    <AppItem
                      icon="interface"
                      color="bg-orange-500"
                      name="Interfaces"
                      onClick={() => handleAppSelect("Interfaces")}
                    />
                    <AppItem
                      icon="table"
                      color="bg-orange-500"
                      name="Tables"
                      onClick={() => handleAppSelect("Tables")}
                    />
                    <AppItem
                      icon="agent"
                      color="bg-orange-500"
                      name="Agents"
                      onClick={() => handleAppSelect("Agents")}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SidebarItem({ icon, label }: { icon: string; label: string }) {
  const getIcon = () => {
    switch (icon) {
      case "grid":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        )
      case "sparkles":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          </svg>
        )
      case "flow":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 4h1a2 2 0 0 1 2 2v1" />
            <path d="M21 14v1a2 2 0 0 1-2 2h-1" />
            <path d="M8 3H7a2 2 0 0 0-2 2v1" />
            <path d="M3 8v1a2 2 0 0 0 2 2h1" />
            <path d="M3 14v1a2 2 0 0 0 2 2h1" />
            <path d="M8 21H7a2 2 0 0 1-2-2v-1" />
            <path d="M14 3h1a2 2 0 0 1 2 2v1" />
            <path d="M21 8v1a2 2 0 0 1-2 2h-1" />
            <path d="M12 12h.01" />
          </svg>
        )
      case "tool":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        )
      case "package":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
        )
      case "settings":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        )
    }
  }

  return (
    <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100">
      <span className="mr-3 text-gray-500">{getIcon()}</span>
      {label}
    </button>
  )
}

function AppItem({ icon, color, name, onClick }: { icon: string; color: string; name: string; onClick: () => void }) {
  return (
    <button
      className="flex items-center w-full px-2 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
      onClick={onClick}
    >
      <div className={`w-6 h-6 mr-3 rounded flex items-center justify-center ${color}`}>
        <span className="text-white text-xs">
          {icon === "facebook" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          )}
          {icon === "calendar" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          )}
          {(icon === "drive" || icon === "gmail" || icon === "sheets" || icon === "forms") && "G"}
          {icon === "hubspot" && "H"}
          {icon === "mailchimp" && "M"}
          {icon === "notion" && "N"}
          {icon === "slack" && "S"}
          {icon === "calendly" && "C"}
          {icon === "typeform" && "T"}
          {icon === "webhook" && "W"}
          {icon === "schedule" && "S"}
          {icon === "email" && "E"}
          {icon === "rss" && "R"}
          {icon === "code" && "<>"}
          {icon === "parser" && "P"}
          {icon === "subzap" && "Z"}
          {icon === "imap" && "I"}
          {icon === "chatbot" && "C"}
          {icon === "interface" && "I"}
          {icon === "table" && "T"}
          {icon === "agent" && "A"}
        </span>
      </div>
      {name}
    </button>
  )
}
