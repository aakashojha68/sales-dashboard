import { Routes, Route } from 'react-router-dom'
import { SidebarProvider } from './context/SidebarContext'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import Order from './pages/Order'
import Products from './pages/Products'
import SalesReport from './pages/SalesReport'
import Messages from './pages/Messages'
import Settings from './pages/Settings'

function App() {
  return (
    <SidebarProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales-report" element={<SalesReport />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </SidebarProvider>
  )
}

export default App
