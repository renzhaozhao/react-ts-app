import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import loadable from '@loadable/component'

import Navbar from './components/Navbar'
import Loading from './components/Loading'

const Home = loadable(() => import(/* webpackChunkName: 'home' */'./pages/Home'), { fallback: <Loading /> })
const Page1 = loadable(() => import(/* webpackChunkName: 'page1' */'./pages/Page1'), { fallback: <Loading /> })
const Page2 = loadable(() => import(/* webpackChunkName: 'page2' */'./pages/Page2'), { fallback: <Loading /> })

function App() {
  return (
    <Router>
      <Navbar />
      <header>
        <Link to="/page1">
          Page1
        </Link>
        <Link to="/page2">
          Page2
        </Link>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Router>
  )
}

export default App
