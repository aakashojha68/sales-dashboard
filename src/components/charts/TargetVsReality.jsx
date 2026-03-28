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
import { targetVsRealityData } from '../../data/mockData'

export default function TargetVsReality() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-[#2B3674] mb-4">Target vs Reality</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={targetVsRealityData} barGap={2} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF7" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#A3AED0', fontSize: 10 }}
          />
          <YAxis hide />
          <Tooltip
            formatter={(value) => [value.toLocaleString(), undefined]}
            contentStyle={{
              background: 'white',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(43, 54, 116, 0.12)',
            }}
          />
          <Bar dataKey="reality" name="Reality Sales" fill="#4318FF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" name="Target Sales" fill="#05CD99" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4318FF]" />
          <div>
            <p className="text-[11px] text-[#A3AED0]">Reality Sales</p>
            <p className="text-sm font-bold text-[#2B3674]">8,823</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#05CD99]" />
          <div>
            <p className="text-[11px] text-[#A3AED0]">Target Sales</p>
            <p className="text-sm font-bold text-[#2B3674]">12,222</p>
          </div>
        </div>
      </div>
    </div>
  )
}
