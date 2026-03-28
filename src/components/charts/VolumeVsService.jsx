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
import { volumeVsServiceData } from '../../data/mockData'

export default function VolumeVsService() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-text-primary mb-4">Volume vs Service Level</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={volumeVsServiceData} barGap={2} barSize={14} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
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
          <Bar dataKey="volume" name="Volume" fill="var(--color-info)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="service" name="Services" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-info" />
          <span className="text-xs text-text-secondary">Volume</span>
          <span className="text-sm font-bold text-text-primary">1,396</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-xs text-text-secondary">Services</span>
          <span className="text-sm font-bold text-text-primary">636</span>
        </div>
      </div>
    </div>
  )
}
