import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <div className="min-h-screen bg-orange-primary text-gray-100 transition-opacity duration-700 font-mono">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
