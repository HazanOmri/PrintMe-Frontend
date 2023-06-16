import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

import { Home } from './pages/home.jsx'
import { About } from './pages/about.jsx'
import { Cart } from './pages/cart.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { AppFooter } from './cmps/app-footer.jsx'
import { Tests } from './pages/tests'
import { UserMsg } from './cmps/user-msg'
import { Success } from './pages/success'
import { Cancel } from './pages/cancel'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppHeader />
        <main className="main-app">
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Cart />} path='/cart' />
            <Route element={<Tests />} path='/tests' />
            <Route element={<Success />} path='/success' />
            <Route element={<Cancel />} path='/cancel' />
          </Routes>
          <UserMsg />
        </main>
        <AppFooter />
      </Router>
    </Provider>
  )
}
