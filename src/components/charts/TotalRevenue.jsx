import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { totalRevenueData } from '../../data/mockData'

export default function TotalRevenue() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-[#2B3674] mb-4">Total Revenue</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={totalRevenueData} barGap={4} barSize={14}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF7" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A3AED0', fontSize: 10 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A3AED0', fontSize: 11 }}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip
            formatter={(value) => [`$${(value / 1000).toFixed(1)}k`, undefined]}
            contentStyle={{
              background: 'white',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(43, 54, 116, 0.12)',
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '11px', color: '#A3AED0', paddingTop: '12px' }}
          />
          <Bar dataKey="online" name="Online Sales" fill="#4318FF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="offline" name="Offline Sales" fill="#6AD2FF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
