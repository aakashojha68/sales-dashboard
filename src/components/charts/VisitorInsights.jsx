import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { visitorInsightsData } from '../../data/mockData'

const CustomDot = (props) => {
  const { cx, cy, stroke } = props
  return (
    <circle cx={cx} cy={cy} r={4} fill={stroke} stroke="white" strokeWidth={2} />
  )
}

export default function VisitorInsights() {
  return (
    <div className="dashboard-card h-full">
      <h3 className="text-lg font-bold text-text-primary mb-4">Visitor Insights</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={visitorInsightsData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E9EDF7" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 11 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 11 }}
          />
          <Tooltip
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
            wrapperStyle={{ fontSize: '11px', color: 'var(--color-text-secondary)', paddingTop: '12px' }}
          />
          <Line
            type="monotone"
            dataKey="loyal"
            name="Loyal Customers"
            stroke="var(--color-primary)"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="new"
            name="New Customers"
            stroke="var(--color-success)"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="unique"
            name="Unique Customers"
            stroke="var(--color-danger)"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
