import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Analytics } from '@vercel/analytics/next';

export default function App() {

  return (
    <div className="min-h-screen bg-orange-primary text-gray-100 transition-opacity duration-700 font-mono">
      <Analytics />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
