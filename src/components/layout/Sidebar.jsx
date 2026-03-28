import { NavLink } from 'react-router-dom'
import {
  HiOutlineChartBar,
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiOutlineDocumentText,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineCog6Tooth,
  HiOutlineArrowLeftOnRectangle,
  HiChevronRight,
  HiMiniSquares2X2,
  HiMiniLink
} from 'react-icons/hi2'
import { useSidebar } from '../../context/SidebarContext'

const navItems = [
  { name: 'Dashboard', path: '/', icon: HiMiniSquares2X2 },
  { name: 'Leaderboard', path: '/leaderboard', icon: HiOutlineChartBar },
  { name: 'order', path: '/order', icon: HiOutlineShoppingBag },
  { name: 'Products', path: '/products', icon: HiOutlineTag },
  { name: 'Sales Report', path: '/sales-report', icon: HiOutlineDocumentText },
  { name: 'Messages', path: '/messages', icon: HiOutlineChatBubbleOvalLeft },
  { name: 'Settings', path: '/settings', icon: HiOutlineCog6Tooth },
]

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  const handleLogout = () => {
    // Add logout logic here if needed
    console.log('Logging out...')
    closeSidebar()
  }

  const navItemClass = (isActive) =>
    `flex items-center gap-4 px-4 py-3 rounded-[12px] text-[14px] font-semibold transition-all duration-300 group ${isActive
      ? 'bg-[#5D5FEF] text-white shadow-md shadow-[#5D5FEF]/20'
      : 'text-[#A3AED0] hover:text-[#5D5FEF] hover:bg-[#5D5FEF]/5'
    }`

  return (
    <aside className={`fixed left-0 top-0 h-screen w-[260px] bg-white flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
      }`}>
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="w-9 h-9 rounded-lg bg-[#5D5FEF] flex items-center justify-center shadow-lg shadow-[#5D5FEF]/20">
          <HiMiniLink className="text-white text-lg" />
        </div>
        <span className="text-xl font-bold text-[#2B3674] tracking-tight">Dabang</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={closeSidebar}
                end={item.path === '/'}
                className={({ isActive }) => navItemClass(isActive)}
              >
                <item.icon className="text-lg" />
                <span className="flex-1">{item.name}</span>
              </NavLink>
            </li>
          ))}
          {/* Sign Out as a Button */}
          <li>
            <button
              onClick={handleLogout}
              className={`${navItemClass(false)} w-full text-left`}
            >
              <HiOutlineArrowLeftOnRectangle className="text-lg" />
              <span className="flex-1">Sign Out</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Pro Banner */}
      <div className="mx-4 mb-6 p-5 rounded-[20px] bg-gradient-to-br from-[#5D5FEF] to-[#7174F8] text-white relative overflow-hidden text-center">
        {/* Decorative circle */}
        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-3">
          <HiMiniLink className="text-xl text-white" />
        </div>

        <h4 className="font-bold text-[16px] mb-1 leading-tight">Dabang Pro</h4>
        <p className="text-[11px] text-white/80 mb-5 px-1 leading-relaxed">
          Get access to all features on tetumbas
        </p>

        <button className="w-full py-2.5 bg-white text-[#5D5FEF] rounded-[10px] text-[11px] font-bold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]">
          Get Pro
        </button>
      </div>
    </aside>
  )
}
