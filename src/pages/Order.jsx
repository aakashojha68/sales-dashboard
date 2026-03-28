import { useState, useEffect, useMemo } from 'react'
import { MdSearch, MdFilterList, MdSwapVert, MdErrorOutline, MdRefresh, MdPeople } from 'react-icons/md'
import { FETCH_USERS_ENDPOINT } from '../helper/helper'

export default function Order() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Filter & Sort States
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('asc') // 'asc' | 'desc'
  const [cityFilter, setCityFilter] = useState('All')

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(FETCH_USERS_ENDPOINT)
      if (!response.ok) throw new Error('Failed to fetch data')
      const data = await response.json()
      setUsers(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Derive unique cities for the filter
  const cities = useMemo(() => {
    const list = users.map(u => u.address.city)
    return ['All', ...new Set(list)].sort()
  }, [users])

  // Processed Users (Search -> Filter -> Sort)
  const processedUsers = useMemo(() => {
    let result = [...users]

    // 1. Search (Name or Email)
    if (searchTerm?.trim()) {
      const term = searchTerm.trim().toLowerCase()
      result = result.filter(u =>
        u.name.toLowerCase().includes(term) ||
        u.email.toLowerCase().includes(term)
      )
    }

    // 2. Filter (City)
    if (cityFilter !== 'All') {
      result = result.filter(u => u.address.city === cityFilter)
    }

    // 3. Sort (Name)
    result.sort((a, b) => {
      if (sortOrder === 'asc') return a.name.localeCompare(b.name)
      return b.name.localeCompare(a.name)
    })

    return result
  }, [users, searchTerm, cityFilter, sortOrder])

  // Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-red-50">
        <MdErrorOutline className="text-5xl text-danger mb-4" />
        <h3 className="text-lg font-bold text-text-primary mb-1">Oops! Something went wrong</h3>
        <p className="text-sm text-text-secondary mb-6">{error}</p>
        <button
          onClick={fetchUsers}
          className="flex items-center gap-2 px-6 py-2.5 bg-danger text-white rounded-xl font-bold shadow-lg shadow-danger/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <MdRefresh className="text-xl" />
          Retry Now
        </button>
      </div>
    )
  }

  // Skeleton Row Component
  const TableSkeleton = () => (
    <>
      {[...Array(8)].map((_, i) => (
        <tr key={i} className="animate-pulse">
          <td className="px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-xl animate-shimmer" />
              <div className="h-4 w-32 rounded animate-shimmer" />
            </div>
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-48 rounded animate-shimmer" />
          </td>
          <td className="px-6 py-3">
            <div className="h-4 w-40 rounded animate-shimmer" />
          </td>
          <td className="px-6 py-3">
            <div className="h-6 w-16 rounded-full animate-shimmer" />
          </td>
        </tr>
      ))}
    </>
  )

  return (
    <div className="animate-fadeIn outline-none focus:outline-none focus:ring-0 select-none">
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-50 overflow-hidden">
        {/* Card Header: Title & Filters */}
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-text-highlight tracking-tight">
              Customer List{' '}
              <span className="text-[13px] font-medium text-text-muted ml-1">
                {loading ? '...' : `(${processedUsers.length} total)`}
              </span>
            </h3>

            {/* City Filter */}
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-soft rounded-xl border border-transparent focus-within:border-brand/20 transition-all w-full sm:w-auto">
              <MdFilterList className="text-text-secondary text-xl" />
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                disabled={loading}
                className="bg-transparent text-[13px] font-bold text-text-highlight outline-none focus:outline-none focus:ring-0 cursor-pointer pr-4 w-full disabled:opacity-50"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <MdSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary text-xl" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => {
                  console.log(e.target.value)
                  setSearchTerm(e.target.value)
                }}
                disabled={loading}
                className="w-full pl-11 pr-4 py-2.5 bg-bg-soft rounded-xl text-[13px] font-medium text-text-highlight placeholder-text-secondary outline-none border border-transparent focus:border-brand/20 focus:bg-white transition-all duration-300 disabled:opacity-50"
              />
            </div>

            {/* Sort Toggle */}
            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-bg-soft hover:bg-brand/5 text-text-highlight rounded-xl font-bold text-[13px] transition-all group w-full md:w-auto min-w-[140px] disabled:opacity-50 focus:outline-none focus:ring-0"
              title={`Sort by name ${sortOrder === 'asc' ? 'Decending' : 'Ascending'}`}
            >
              <MdSwapVert className={`text-xl transition-transform duration-300 ${sortOrder === 'desc' ? 'rotate-180 text-brand' : 'text-text-secondary'}`} />
              <span>Sort: Name</span>
            </button>
          </div>
        </div>

        {/* User Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-soft/50 border-y border-gray-50">
                <th className="px-6 py-3.5 text-[11px] font-bold text-text-secondary uppercase tracking-wider">Name</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-text-secondary uppercase tracking-wider">Email</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-text-secondary uppercase tracking-wider">Company</th>
                <th className="px-6 py-3.5 text-[11px] font-bold text-text-secondary uppercase tracking-wider">City</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <TableSkeleton />
              ) : (
                processedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-bg-soft/50 transition-colors group cursor-default outline-none border-none"
                  >
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-br from-brand/10 to-brand/20 flex items-center justify-center text-brand font-bold text-[12px] border border-brand/10">
                          {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <span className="text-[13px] font-bold text-text-highlight group-hover:text-brand transition-colors">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-[13px] font-medium text-text-muted">{user.email}</td>
                    <td className="px-6 py-3 text-[13px] font-medium text-text-highlight">{user.company.name}</td>
                    <td className="px-6 py-3">
                      <span className="px-3 py-1 bg-body-bg text-brand text-[10px] font-black rounded-full uppercase tracing-wide">
                        {user.address.city}
                      </span>
                    </td>
                  </tr>
                ))
              )}
              {!loading && processedUsers.length === 0 && (
                <tr>
                  <td colSpan="4" className="py-24 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-bg-soft rounded-full flex items-center justify-center mb-4 text-text-secondary">
                        <MdSearch className="text-3xl" />
                      </div>
                      <p className="text-sm font-bold text-text-highlight">No customers found</p>
                      <p className="text-[11px] text-text-muted mt-1">Try adjusting your filters or search term</p>
                      <button
                        onClick={() => { setSearchTerm(''); setCityFilter('All'); }}
                        className="mt-4 text-[12px] font-black uppercase text-brand hover:underline"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
