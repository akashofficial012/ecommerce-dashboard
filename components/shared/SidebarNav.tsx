import Link from "next/link"
import { navItems } from "../data/navItems"


const SidebarNav = () => {
  return (
    <nav className="overflow-y-auto">
      {navItems.map(({ label, href, icon: Icon, active }, index) => (
        <Link
          key={index}
          href={href}
          className={`flex items-center px-4 py-2 mt-5 rounded-lg transition-colors duration-300 transform ${
            active
              ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span className="mx-4 font-medium">{label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default SidebarNav
