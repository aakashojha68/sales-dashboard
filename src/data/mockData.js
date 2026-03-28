// Mock data for the sales dashboard

export const todaySalesData = [
  {
    id: 1,
    title: 'Total Sales',
    value: '$1k',
    change: '+8% from yesterday',
    bgColor: '#FFE2E5',
    iconColor: '#FA5A7D',
    icon: 'sales',
  },
  {
    id: 2,
    title: 'Total Order',
    value: '300',
    change: '+5% from yesterday',
    bgColor: '#FFF4DE',
    iconColor: '#FF947A',
    icon: 'order',
  },
  {
    id: 3,
    title: 'Product Sold',
    value: '5',
    change: '+1.2% from yesterday',
    bgColor: '#DCFCE7',
    iconColor: '#3CD856',
    icon: 'product',
  },
  {
    id: 4,
    title: 'New Customers',
    value: '8',
    change: '0.5% from yesterday',
    bgColor: '#F3E8FF',
    iconColor: '#BF83FF',
    icon: 'customer',
  },
]

export const visitorInsightsData = [
  { month: 'Jan', loyal: 100, new: 80, unique: 50 },
  { month: 'Feb', loyal: 120, new: 100, unique: 60 },
  { month: 'Mar', loyal: 90, new: 140, unique: 70 },
  { month: 'Apr', loyal: 170, new: 120, unique: 90 },
  { month: 'May', loyal: 150, new: 160, unique: 110 },
  { month: 'Jun', loyal: 200, new: 140, unique: 80 },
  { month: 'Jul', loyal: 180, new: 200, unique: 150 },
  { month: 'Aug', loyal: 260, new: 180, unique: 120 },
  { month: 'Sep', loyal: 300, new: 380, unique: 200 },
  { month: 'Oct', loyal: 250, new: 220, unique: 160 },
  { month: 'Nov', loyal: 200, new: 240, unique: 140 },
  { month: 'Dec', loyal: 220, new: 200, unique: 130 },
]

export const totalRevenueData = [
  { day: 'Monday', online: 15000, offline: 8000 },
  { day: 'Tuesday', online: 10000, offline: 12000 },
  { day: 'Wednesday', online: 20000, offline: 5000 },
  { day: 'Thursday', online: 12000, offline: 18000 },
  { day: 'Friday', online: 18000, offline: 10000 },
  { day: 'Saturday', online: 22000, offline: 14000 },
  { day: 'Sunday', online: 16000, offline: 9000 },
]

export const customerSatisfactionData = [
  { month: 'Jan', lastMonth: 3200, thisMonth: 3800 },
  { month: 'Feb', lastMonth: 3000, thisMonth: 3600 },
  { month: 'Mar', lastMonth: 3400, thisMonth: 4000 },
  { month: 'Apr', lastMonth: 3100, thisMonth: 4200 },
  { month: 'May', lastMonth: 3500, thisMonth: 4100 },
  { month: 'Jun', lastMonth: 3300, thisMonth: 4500 },
  { month: 'Jul', lastMonth: 3004, thisMonth: 4504 },
]

export const targetVsRealityData = [
  { month: 'Jan', reality: 6000, target: 10000 },
  { month: 'Feb', reality: 7000, target: 9000 },
  { month: 'Mar', reality: 5500, target: 11000 },
  { month: 'Apr', reality: 8000, target: 10500 },
  { month: 'May', reality: 7500, target: 12000 },
  { month: 'Jun', reality: 8823, target: 12222 },
  { month: 'Jul', reality: 6500, target: 11500 },
]

export const topProductsData = [
  { rank: '01', name: 'Home Decor Range', popularity: 45, sales: '45%', color: '#4318FF' },
  { rank: '02', name: 'Disney Princess Pink Bag 18\'', popularity: 29, sales: '29%', color: '#05CD99' },
  { rank: '03', name: 'Bathroom Essentials', popularity: 18, sales: '18%', color: '#7551FF' },
  { rank: '04', name: 'Apple Smartwatches', popularity: 25, sales: '25%', color: '#FFB547' },
]

export const volumeVsServiceData = [
  { month: 'Jan', volume: 1200, service: 800 },
  { month: 'Feb', volume: 1000, service: 600 },
  { month: 'Mar', volume: 1400, service: 700 },
  { month: 'Apr', volume: 1100, service: 500 },
  { month: 'May', volume: 1396, service: 636 },
  { month: 'Jun', volume: 1300, service: 750 },
]

export const salesByCountry = [
  { country: 'United States', sales: 35, color: '#FFB547' },
  { country: 'Brazil', sales: 25, color: '#4318FF' },
  { country: 'India', sales: 20, color: '#EE5D50' },
  { country: 'Australia', sales: 12, color: '#05CD99' },
  { country: 'Others', sales: 8, color: '#A3AED0' },
]

export const sidebarLinks = [
  { name: 'Dashboard', path: '/', icon: 'dashboard' },
  { name: 'Leaderboard', path: '/leaderboard', icon: 'leaderboard' },
  { name: 'Order', path: '/order', icon: 'order' },
  { name: 'Products', path: '/products', icon: 'products' },
  { name: 'Sales Report', path: '/sales-report', icon: 'sales' },
  { name: 'Messages', path: '/messages', icon: 'messages' },
  { name: 'Settings', path: '/settings', icon: 'settings' },
]
