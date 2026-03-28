import { salesByCountry } from '../../data/mockData'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

export default function SalesMapping() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-[#2B3674] mb-4">Sales Mapping by Country</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={salesByCountry}
            dataKey="sales"
            nameKey="country"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={3}
            stroke="none"
          >
            {salesByCountry.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
              background: 'white',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(43, 54, 116, 0.12)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 justify-center">
        {salesByCountry.map((item) => (
          <div key={item.country} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-[10px] text-[#A3AED0]">{item.country}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
