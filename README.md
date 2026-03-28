# Sales Dashboard 📊

A modern, high-performance sales analytics dashboard built with React 19 and Tailwind CSS 4.

## Project Setup & Flow
1. **Initial Setup**: Created the React project using Vite for a lightning-fast development experience.
   ```bash
   npm create vite@latest sales-dashboard -- --template react
   ```
2. **Library Installation**: Installed core dependencies including navigation, icons, and professional charting tools.
   - `react-router-dom`: For seamless SPA routing and layout management.
   - `recharts`: For high-performance, interactive data visualizations.
   - `react-icons`: For a comprehensive, consistent iconography system.
   - `tailwindcss` & `@tailwindcss/vite`: For the modern, utility-first design system.
   - `rollup-plugin-visualizer`: For monitoring and optimizing the bundle size.
3. **Shell Design**: Developed the premium sidebar and header layout with unified routing.
4. **Dashboard Implementation**: Built the main analytics view with a responsive, card-based layout.
5. **Advanced Data Table**: Implemented a dynamic table in the Orders tab with:
   - Client-side sorting, searching, and city-based filtering.
   - Professional skeleton loading states and empty data handling.
   - Error handling for API fetch failures.
6. **Performance Optimization**: Implemented granular lazy-loading and shimmer effects for heavy chart components to ensure near-instant initial load times.

## 🛠️ Tech Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4 (Vanilla CSS variables)
- **Charts**: Recharts (with Custom Customizations)
- **Icons**: React Icons (Material Design & Hi2)
- **Routing**: React Router 7

## 📋 Need TO DO
- [ ] **Common Grid**: Create a reusable grid component and integrate it into the Order table.
- [ ] **Pagination**: Implement robust pagination logic for the data grid.
- [ ] **Dropdown Overhaul**: Update the styling of filter and sort dropdowns to match the premium theme.
- [ ] **Map Integration**: Complete the pending Country Map Card on the dashboard.s
- [ ] **Connectivity Handling**: Design and implement a global "No Internet" issues handling page.
