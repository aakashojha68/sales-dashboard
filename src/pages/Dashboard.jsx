import React, { Suspense, lazy } from 'react'
import { HiOutlineArrowUpTray } from 'react-icons/hi2'
import StatCard from '../components/cards/StatCard'
import TopProducts from '../components/tables/TopProducts'
import ChartSkeleton from '../components/charts/ChartSkeleton'
import { todaySalesData } from '../data/mockData'

// Lazy load chart components
const VisitorInsights = lazy(() => import('../components/charts/VisitorInsights'))
const TotalRevenue = lazy(() => import('../components/charts/TotalRevenue'))
const CustomerSatisfaction = lazy(() => import('../components/charts/CustomerSatisfaction'))
const TargetVsReality = lazy(() => import('../components/charts/TargetVsReality'))
const VolumeVsService = lazy(() => import('../components/charts/VolumeVsService'))
const SalesMapping = lazy(() => import('../components/maps/SalesMapping'))

export default function Dashboard() {
  return (
    <div>
      {/* Row 1: Today's Sales + Visitor Insights */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mb-8">
        {/* Today's Sales */}
        <div className="xl:col-span-3 bg-white p-6 rounded-3xl shadow-sm border border-gray-50">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-text-highlight tracking-tight">Today's Sales</h3>
              <p className="text-[13px] font-medium text-text-muted mt-0.5">Sales Summary</p>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-[#C5C7CD] rounded-xl text-[12px] font-bold text-text-highlight hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
              <HiOutlineArrowUpTray className="text-lg group-hover:-translate-y-0.5 transition-transform" />
              Export
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {todaySalesData.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                bgColor={stat.bgColor}
                iconColor={stat.iconColor}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>

        {/* Visitor Insights */}
        <div className="xl:col-span-2">
          <Suspense fallback={<ChartSkeleton height="200px" />}>
            <VisitorInsights />
          </Suspense>
        </div>
      </div>

      {/* Row 2: Total Revenue + Customer Satisfaction + Target vs Reality */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <Suspense fallback={<ChartSkeleton height="250px" />}>
          <TotalRevenue />
        </Suspense>
        <Suspense fallback={<ChartSkeleton height="250px" />}>
          <CustomerSatisfaction />
        </Suspense>
        <div className="md:col-span-2 xl:col-span-1">
          <Suspense fallback={<ChartSkeleton height="250px" />}>
            <TargetVsReality />
          </Suspense>
        </div>
      </div>

      {/* Row 3: Top Products + Sales Mapping + Volume vs Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="md:col-span-2 xl:col-span-1">
          <TopProducts />
        </div>
        <Suspense fallback={<ChartSkeleton height="300px" />}>
          <SalesMapping />
        </Suspense>
        <Suspense fallback={<ChartSkeleton height="200px" />}>
          <VolumeVsService />
        </Suspense>
      </div>
    </div>
  )
}
