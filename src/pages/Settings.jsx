
import { MdSettings } from 'react-icons/md'

export default function Settings() {
  return (
    <div>
      <div className="dashboard-card flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-text-secondary/10 to-[#2B3674]/10 flex items-center justify-center mb-6">
          <MdSettings className="text-4xl text-text-secondary" />
        </div>
        <h2 className="text-xl font-bold text-[#2B3674] mb-2">Settings</h2>
        <p className="text-sm text-text-secondary text-center max-w-md">
          Customize your dashboard preferences. This feature is coming soon with theme customization, notification settings, and account management.
        </p>
      </div>
    </div>
  )
}
