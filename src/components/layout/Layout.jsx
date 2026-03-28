import { useSidebar } from '../../context/SidebarContext'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <div className="flex min-h-screen bg-[#F4F7FE] relative">
      {/* Sidebar Backdrop (Mobile Only) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] lg:hidden transition-opacity duration-300"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 lg:ml-[260px]">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
