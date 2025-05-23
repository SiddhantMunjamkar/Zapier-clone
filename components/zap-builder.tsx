"use client"

import { useState } from "react"
import { Zap, Plus, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AppSearchModal } from "./app-search-modal"

export function ZapBuilder() {
  const [steps, setSteps] = useState([
    { type: "trigger", app: "", title: "Trigger", description: "Select the event that starts your Zap" },
    { type: "action", app: "", title: "Action", description: "Select the event for your Zap to run" },
  ])
  const [showAddActionModal, setShowAddActionModal] = useState(false)

  const handleAppSelect = (stepIndex: number, appName: string) => {
    const newSteps = [...steps]
    newSteps[stepIndex] = {
      ...newSteps[stepIndex],
      app: appName,
    }
    setSteps(newSteps)
  }

  const addAction = () => {
    const newAction = {
      type: "action",
      app: "",
      title: "Action",
      description: `Select the event for your Zap to run`,
    }
    setSteps([...steps, newAction])
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <Card className="border-gradient-to-r from-orange-500 to-pink-500">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <div className="bg-orange-500 rounded-full p-1">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="font-medium">Copilot</span>
                <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">AI beta</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="font-medium">What can I help you automate?</div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="When I add a reaction to a Slack message, create a card in Trello"
                  className="block w-full pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
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
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center my-8">
        <div className="h-px bg-gray-300 flex-1" />
        <span className="px-4 text-gray-500 text-sm">or</span>
        <div className="h-px bg-gray-300 flex-1" />
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index}>
            <ZapStep
              number={index + 1}
              type={step.type as "trigger" | "action"}
              title={step.title}
              description={step.description}
              app={step.app}
              onSelect={(appName) => handleAppSelect(index, appName)}
            />

            {index < steps.length - 1 && (
              <>
                <div className="flex justify-center my-4">
                  <div className="h-16 w-px bg-gray-300" />
                </div>
              </>
            )}
          </div>
        ))}

        {/* Add button after the last step */}
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8 border-dashed"
            onClick={() => addAction()}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

interface ZapStepProps {
  number: number
  type: "trigger" | "action"
  title: string
  description: string
  app?: string
  onSelect: (appName: string) => void
}

function ZapStep({ number, type, title, description, app, onSelect }: ZapStepProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={`border ${app ? "border-solid" : "border-dashed"} border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-gray-50`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              {type === "trigger" ? <Zap className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="font-medium">{title}</div>
              {app && <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">{app}</span>}
            </div>
            <div className="text-sm text-gray-500">
              <span className="font-medium">{number}.</span> {app ? `Configure ${app}` : description}
            </div>
          </div>
        </div>
      </div>
      <AppSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={type} onSelect={onSelect} />
    </>
  )
}
