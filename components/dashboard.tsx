import type React from "react"
import { Search, Zap, Database, Layout, MessageSquare, GitBranch } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AutomationCard } from "./automation-card"

export function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">What would you like to automate?</h1>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Example: When I add a reaction to a Slack message, create a card in Trello."
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Start from scratch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <StartCard
            title="Zap"
            description="Automated workflows"
            icon={<Zap className="h-6 w-6 text-orange-500" />}
            href="/zaps/create"
          />
          <StartCard
            title="Table"
            description="Automated data"
            icon={<Database className="h-6 w-6 text-orange-500" />}
            href="/tables/create"
          />
          <StartCard
            title="Interface"
            description="Apps, forms, and pages"
            icon={<Layout className="h-6 w-6 text-orange-500" />}
            href="/interfaces/create"
          />
          <StartCard
            title="Chatbot"
            description="AI-powered chatbot"
            icon={<MessageSquare className="h-6 w-6 text-orange-500" />}
            href="/chatbots/create"
            badge="Beta"
          />
          <StartCard
            title="Canvas"
            description="Process visualization"
            icon={<GitBranch className="h-6 w-6 text-orange-500" />}
            href="/canvas/create"
            badge="Beta"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Popular templates</h2>
          <Button variant="link" className="text-indigo-600">
            Browse all templates
          </Button>
        </div>

        <Tabs defaultValue="ai">
          <TabsList className="mb-4">
            <TabsTrigger value="ai">AI Workflows</TabsTrigger>
            <TabsTrigger value="popular">Most popular</TabsTrigger>
            <TabsTrigger value="trending">Trending this week</TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AutomationCard
                title="Capture New Leads from Facebook, Analyze Their Details, and Log Them into a Spreadsheet"
                apps={["facebook", "sheets", "docs"]}
              />
              <AutomationCard
                title="Receive automatic updates in Google Sheets with ChatGPT insights"
                apps={["sheets", "openai", "docs"]}
              />
              <AutomationCard
                title="Instantly Respond to New Emails with AI-Powered Replies via Gmail"
                apps={["gmail", "openai", "gmail"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AutomationCard title="Save Gmail attachments to Google Drive" apps={["gmail", "drive"]} />
              <AutomationCard title="Post new Tweets for new WordPress posts" apps={["wordpress", "twitter"]} />
              <AutomationCard title="Send Slack notifications for new Trello cards" apps={["trello", "slack"]} />
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AutomationCard title="Add new Typeform responses to Google Sheets" apps={["typeform", "sheets"]} />
              <AutomationCard title="Create Trello cards from new Evernote notes" apps={["evernote", "trello"]} />
              <AutomationCard title="Send email notifications for new Shopify orders" apps={["shopify", "gmail"]} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface StartCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  badge?: string
}

function StartCard({ title, description, icon, href, badge }: StartCardProps) {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <a href={href} className="flex items-start">
        <div className="mr-3 p-2 bg-orange-50 rounded-md">{icon}</div>
        <div>
          <div className="flex items-center">
            <h3 className="font-medium">{title}</h3>
            {badge && <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">{badge}</span>}
          </div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </a>
    </Card>
  )
}
