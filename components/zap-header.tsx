import { Button } from "@/components/ui/button"
import { Undo, RotateCcw } from "lucide-react"
import { Zap } from "lucide-react"

export function ZapHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          <div className="h-6 w-px bg-gray-700" />
          <div className="flex items-center space-x-1">
            <Zap className="h-5 w-5 text-orange-500" />
            <span className="text-white font-medium">Zaps</span>
          </div>
          <div className="h-6 w-px bg-gray-700" />
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-sky-200 text-sky-800 flex items-center justify-center text-sm font-medium">
              SM
            </div>
            <span className="ml-2 text-white">Untitled Zap</span>
            <span className="ml-2 text-xs bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded">Draft</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-gray-400">110%</div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Undo className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <RotateCcw className="h-5 w-5" />
          </Button>
          <Button className="bg-white text-gray-900 hover:bg-gray-100">Publish</Button>
        </div>
      </div>
    </header>
  )
}
