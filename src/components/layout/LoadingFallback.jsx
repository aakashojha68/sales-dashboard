import React from 'react'

const LoadingFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full animate-fadeIn">
      <div className="relative w-16 h-16">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-brand/10 rounded-full" />
        {/* Spinning Ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-brand rounded-full animate-spin" />
      </div>
      <p className="mt-4 text-[13px] font-bold text-text-muted animate-pulse">
        Loading view...
      </p>
    </div>
  )
}

export default LoadingFallback
