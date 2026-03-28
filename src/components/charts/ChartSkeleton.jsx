import React from 'react'

const ChartSkeleton = ({ height = '200px', title = 'Chart' }) => {
  return (
    <div className="dashboard-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 w-32 bg-gray-100 rounded-lg animate-shimmer" />
      </div>
      <div 
        className="w-full bg-gray-50 rounded-xl animate-shimmer flex-1" 
        style={{ minHeight: height }}
      />
      {/* Optional legend shimmer */}
      <div className="flex justify-center gap-4 mt-4">
        <div className="h-3 w-16 bg-gray-100 rounded-full animate-shimmer" />
        <div className="h-3 w-16 bg-gray-100 rounded-full animate-shimmer" />
      </div>
    </div>
  )
}

export default ChartSkeleton
