import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { customerSatisfactionData } from '../../data/mockData'

export default function CustomerSatisfaction() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-[#2B3674] mb-4">Customer Satisfaction</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={customerSatisfactionData}>
          <defs>
            <linearGradient id="lastMonthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A3AED0" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#A3AED0" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="thisMonthGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4318FF" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#4318FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF7" vertical={false} />
          <XAxis hide />
          <YAxis hide />
          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
            contentStyle={{
              background: 'white',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(43, 54, 116, 0.12)',
            }}
          />
          <Area
            type="monotone"
            dataKey="lastMonth"
            name="Last Month"
            stroke="#A3AED0"
            strokeWidth={2}
            fill="url(#lastMonthGrad)"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            name="This Month"
            stroke="#4318FF"
            strokeWidth={2}
            fill="url(#thisMonthGrad)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-8 mt-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A3AED0]" />
          <span className="text-xs text-[#A3AED0]">Last Month</span>
          <span className="text-sm font-bold text-[#2B3674]">$3,004</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4318FF]" />
          <span className="text-xs text-[#A3AED0]">This Month</span>
          <span className="text-sm font-bold text-[#2B3674]">$4,504</span>
        </div>
      </div>
    </div>
  )
}
