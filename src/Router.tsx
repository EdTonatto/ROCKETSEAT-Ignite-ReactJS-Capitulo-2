import { Route, Routes } from 'react-router-dom'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/ROCKETSEAT-Ignite-ReactJS-Capitulo-2" element={<Home />} />
      <Route
        path="/ROCKETSEAT-Ignite-ReactJS-Capitulo-2/history"
        element={<History />}
      />
    </Routes>
  )
}
