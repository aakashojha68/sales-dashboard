import {
  HiOutlineCurrencyDollar,
  HiOutlineClipboardDocumentList,
  HiOutlineTag,
  HiOutlineUserPlus,
} from 'react-icons/hi2'

const iconMap = {
  sales: HiOutlineCurrencyDollar,
  order: HiOutlineClipboardDocumentList,
  product: HiOutlineTag,
  customer: HiOutlineUserPlus,
}

export default function StatCard({ title, value, change, bgColor, iconColor, icon }) {
  const IconComponent = iconMap[icon] || HiOutlineCurrencyDollar

  return (
    <div
      className="flex flex-col items-start p-4 rounded-2xl flex-1 min-w-[140px] transition-all duration-300 hover:shadow-md group"
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon Container */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mb-4 shadow-sm"
        style={{ backgroundColor: iconColor }}
      >
        <IconComponent className="text-white text-xl" />
      </div>

      {/* Value */}
      <h3 className="text-xl font-bold text-text-highlight mb-1">{value}</h3>

      {/* Title */}
      <p className="text-[13px] font-semibold text-[#425166] mb-2">{title}</p>

      {/* Change */}
      <p className="text-[10px] font-medium text-[#4079ED]">
        {change}
      </p>
    </div>
  )
}
