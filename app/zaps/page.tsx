import { Sidebar } from "@/components/sidebar"
import { ZapHeader } from "@/components/zap-header"
import { ZapBuilder } from "@/components/zap-builder"

export default function ZapsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <ZapHeader />
        <main className="flex-1 overflow-y-auto p-4">
          <ZapBuilder />
        </main>
      </div>
    </div>
  )
}
