import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Getstarted from './components/Getstarted'
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation()

  
  const hideNavbar = location.pathname === '/getstarted'
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/getstarted" element={<Getstarted />} />
      </Routes>
    </>
  )
}
export default App;