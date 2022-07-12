import { FC, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import routes from '@/routes'

const App: FC = () => (
  <Router>
    <Suspense fallback={<div />}>
      <div>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </div>
      <Routes>
        {routes.map((route: any) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </Suspense>
  </Router>
)

export default App
