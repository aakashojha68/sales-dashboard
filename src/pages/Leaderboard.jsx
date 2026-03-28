
import { MdLeaderboard } from 'react-icons/md'

export default function Leaderboard() {
  return (
    <div>
      <div className="dashboard-card flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#4318FF]/10 to-primary-light/10 flex items-center justify-center mb-6">
          <MdLeaderboard className="text-4xl text-[#4318FF]" />
        </div>
        <h2 className="text-xl font-bold text-text-primary mb-2">Leaderboard</h2>
        <p className="text-sm text-text-secondary text-center max-w-md">
          Track top performers and sales champions. This feature is coming soon with detailed rankings and performance metrics.
        </p>
      </div>
    </div>
  )
}
