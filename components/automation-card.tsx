export function AutomationCard({ title, apps }: { title: string; apps: string[] }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex mb-3">
        {apps.map((app, index) => (
          <div
            key={index}
            className="w-8 h-8 -ml-1 first:ml-0 rounded border border-gray-200 bg-white flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}
