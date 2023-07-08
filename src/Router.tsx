import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/ROCKETSEAT-Ignite-ReactJS-Capitulo-2"
          element={<Home />}
        />
        <Route
          path="/ROCKETSEAT-Ignite-ReactJS-Capitulo-2/history"
          element={<History />}
        />
      </Route>
    </Routes>
  )
}
