import Navigation from './Components/Navigation'
import { Outlet } from 'react-router'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <>
        <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
