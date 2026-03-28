
import { MdAssessment } from 'react-icons/md'

export default function SalesReport() {
  return (
    <div>
      <div className="dashboard-card flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#EE5D50]/10 to-[#FFB547]/10 flex items-center justify-center mb-6">
          <MdAssessment className="text-4xl text-[#EE5D50]" />
        </div>
        <h2 className="text-xl font-bold text-text-primary mb-2">Sales Report</h2>
        <p className="text-sm text-text-secondary text-center max-w-md">
          Generate detailed sales reports and analytics. This feature is coming soon with exportable reports and custom date ranges.
        </p>
      </div>
    </div>
  )
}
