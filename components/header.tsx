import Link from "next/link"
import { Search, HelpCircle, Grid } from "lucide-react"
import { UserMenu } from "./user-menu"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 h-16">
        <div className="flex items-center flex-1">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="search"
              placeholder="Search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <HelpCircle className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700 flex items-center">
            <Grid className="h-5 w-5" />
            <span className="ml-2">Explore apps</span>
          </button>
          <Link
            href="/contact-sales"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm border border-gray-300 rounded-md"
          >
            Contact Sales
          </Link>
          <Link href="/upgrade" className="bg-indigo-600 text-white px-3 py-2 text-sm rounded-md hover:bg-indigo-700">
            Upgrade
          </Link>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
