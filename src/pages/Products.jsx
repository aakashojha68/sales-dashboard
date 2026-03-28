import Header from '../components/layout/Header'
import { MdInventory } from 'react-icons/md'

export default function Products() {
  return (
    <div>
      <div className="dashboard-card flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#05CD99]/10 to-[#6AD2FF]/10 flex items-center justify-center mb-6">
          <MdInventory className="text-4xl text-[#05CD99]" />
        </div>
        <h2 className="text-xl font-bold text-[#2B3674] mb-2">Products</h2>
        <p className="text-sm text-[#A3AED0] text-center max-w-md">
          Browse and manage your product catalog. This feature is coming soon with inventory management and product analytics.
        </p>
      </div>
    </div>
  )
}
