import Header from '../components/layout/Header'
import { MdMessage } from 'react-icons/md'

export default function Messages() {
  return (
    <div>
      <div className="dashboard-card flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#7551FF]/10 to-[#4318FF]/10 flex items-center justify-center mb-6">
          <MdMessage className="text-4xl text-[#7551FF]" />
        </div>
        <h2 className="text-xl font-bold text-[#2B3674] mb-2">Messages</h2>
        <p className="text-sm text-text-secondary text-center max-w-md">
          Stay connected with your team and customers. This feature is coming soon with real-time messaging and notifications.
        </p>
      </div>
    </div>
  )
}
