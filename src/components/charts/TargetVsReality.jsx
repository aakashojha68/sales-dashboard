import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { targetVsRealityData } from '../../data/mockData'

export default function TargetVsReality() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-text-primary mb-4">Target vs Reality</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={targetVsRealityData} barGap={2} barSize={10} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF7" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 10 }}
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
          <Bar dataKey="reality" name="Reality Sales" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="target" name="Target Sales" fill="var(--color-success)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <div>
            <p className="text-[11px] text-text-secondary">Reality Sales</p>
            <p className="text-sm font-bold text-text-primary">8,823</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-success" />
          <div>
            <p className="text-[11px] text-text-secondary">Target Sales</p>
            <p className="text-sm font-bold text-text-primary">12,222</p>
          </div>
        </div>
      </div>
    </div>
  )
}
