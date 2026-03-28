import { useLocation } from 'react-router-dom'
import { MdSearch, MdNotifications, MdKeyboardArrowDown } from 'react-icons/md'
import { HiMenuAlt2 } from 'react-icons/hi'
import { useSidebar } from '../../context/SidebarContext'

export default function Header() {
  const { toggleSidebar } = useSidebar()
  const location = useLocation()

  // Dynamic header title based on route
  const getHeaderTitle = () => {
    const path = location.pathname
    switch (path) {
      case '/': return 'Dashboard'
      case '/leaderboard': return 'Leaderboard'
      case '/order': return 'Orders'
      case '/products': return 'Products'
      case '/sales-report': return 'Sales Report'
      case '/messages': return 'Messages'
      case '/settings': return 'Settings'
      default: return 'Dashboard'
    }
  }

  return (
    <header className="bg-white px-6 md:px-8 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
      {/* Left Area: Title & Mobile Toggle */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-[#2B3674] hover:text-[#5D5FEF] transition-all"
        >
          <HiMenuAlt2 className="text-xl" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-[#2B3674] tracking-tight whitespace-nowrap">
          {getHeaderTitle()}
        </h1>
      </div>

      {/* Middle Area: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-[400px] mx-8">
        <div className="relative w-full group">
          <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0] text-xl transition-colors group-focus-within:text-[#5D5FEF]" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-12 pr-4 py-2.5 bg-[#F9FAFB] rounded-xl text-sm font-medium text-[#2B3674] placeholder-[#A3AED0] border border-transparent focus:border-[#5D5FEF]/20 focus:bg-white transition-all duration-300 outline-none"
          />
        </div>
      </div>

      {/* Right Area: Actions */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* Language */}
        <button className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#2B3674] hover:text-[#5D5FEF] transition-all">
          <img src="https://img.icons8.com/color/48/usa.png" alt="US Flag" className="w-5 h-5 object-contain" />
          <span className="text-xs">Eng (US)</span>
          <MdKeyboardArrowDown className="text-lg text-[#A3AED0]" />
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 flex items-center justify-center bg-[#FFF9F1] hover:bg-[#FFF2E2] rounded-full transition-all group">
          <MdNotifications className="text-[#FFB547] text-xl group-hover:scale-110" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EE5D50] border-2 border-white rounded-full" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-full border-2 border-[#5D5FEF]/20 p-0.5 group-hover:border-[#5D5FEF] transition-all overflow-hidden">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Musfiq" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          <div className="hidden lg:block text-left">
            <p className="text-[13px] font-bold text-[#2B3674] leading-tight group-hover:text-[#5D5FEF] transition-colors">Musfiq</p>
            <p className="text-[11px] font-semibold text-[#A3AED0]">Admin</p>
          </div>
          <MdKeyboardArrowDown className="text-[#A3AED0] text-lg hidden sm:block group-hover:text-[#2B3674] transition-colors" />
        </div>
      </div>
    </header>
  )
}
