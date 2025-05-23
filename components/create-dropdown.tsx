"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Zap, Database, Layout, MessageSquare, GitBranch } from "lucide-react"

export function CreateDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md transition-colors"
      >
        <span className="mr-2">+</span>
        Create
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200 py-1">
          <DropdownItem
            href="/zaps/create"
            icon={<Zap className="w-5 h-5 text-gray-500" />}
            label="Zaps"
            description="Automated workflows"
          />
          <DropdownItem
            href="/tables/create"
            icon={<Database className="w-5 h-5 text-gray-500" />}
            label="Tables"
            description="Automated data storage"
          />
          <DropdownItem
            href="/interfaces/create"
            icon={<Layout className="w-5 h-5 text-gray-500" />}
            label="Interfaces"
            description="Apps, forms, and pages"
          />
          <DropdownItem
            href="/chatbots/create"
            icon={<MessageSquare className="w-5 h-5 text-gray-500" />}
            label="Chatbots"
            description="AI-powered chatbot"
            badge="Beta"
          />
          <DropdownItem
            href="/canvas/create"
            icon={<GitBranch className="w-5 h-5 text-gray-500" />}
            label="Canvas"
            description="Process visualization"
            badge="Beta"
          />
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps {
  href: string
  icon: React.ReactNode
  label: string
  description: string
  badge?: string
}

function DropdownItem({ href, icon, label, description, badge }: DropdownItemProps) {
  return (
    <Link
      href={label === "Zaps" ? "/zaps" : href}
      className="flex items-start px-4 py-3 hover:bg-gray-50 transition-colors"
      onClick={(e) => {
        e.stopPropagation()
        // Force navigation to the correct href
        if (label === "Zaps") {
          window.location.href = "/zaps"
        } else {
          window.location.href = href
        }
      }}
    >
      <span className="mr-3 mt-0.5">{icon}</span>
      <div>
        <div className="flex items-center">
          <span className="font-medium">{label}</span>
          {badge && <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">{badge}</span>}
        </div>
        <div className="text-xs text-gray-500">{description}</div>
      </div>
    </Link>
  )
}
