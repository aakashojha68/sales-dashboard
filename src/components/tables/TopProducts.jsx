import { topProductsData } from '../../data/mockData'

export default function TopProducts() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-[#2B3674] mb-5">Top Products</h3>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="text-[11px] font-medium text-[#A3AED0] pb-3 w-8">#</th>
            <th className="text-[11px] font-medium text-[#A3AED0] pb-3">Name</th>
            <th className="text-[11px] font-medium text-[#A3AED0] pb-3">Popularity</th>
            <th className="text-[11px] font-medium text-[#A3AED0] pb-3 text-right">Sales</th>
          </tr>
        </thead>
        <tbody>
          {topProductsData.map((product) => (
            <tr key={product.rank} className="border-t border-[#F4F7FE]">
              <td className="py-3.5 text-sm font-medium text-[#A3AED0]">{product.rank}</td>
              <td className="py-3.5 text-sm font-medium text-[#2B3674]">{product.name}</td>
              <td className="py-3.5 pr-4">
                <div className="w-full bg-[#F4F7FE] rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: product.color,
                    }}
                  />
                </div>
              </td>
              <td className="py-3.5 text-right">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    color: product.color,
                    backgroundColor: product.color + '15',
                  }}
                >
                  {product.sales}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
