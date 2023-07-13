import './App.css'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() { 
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
