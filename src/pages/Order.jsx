import Header from '../components/layout/Header'
import { MdShoppingCart } from 'react-icons/md'

export default function Order() {
  return (
    <div>
      <div className="dashboard-card flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FFB547]/10 to-[#FF6B6B]/10 flex items-center justify-center mb-6">
          <MdShoppingCart className="text-4xl text-[#FFB547]" />
        </div>
        <h2 className="text-xl font-bold text-[#2B3674] mb-2">Orders</h2>
        <p className="text-sm text-[#A3AED0] text-center max-w-md">
          Manage and track all customer orders. This feature is coming soon with order management and tracking capabilities.
        </p>
      </div>
    </div>
  )
}
