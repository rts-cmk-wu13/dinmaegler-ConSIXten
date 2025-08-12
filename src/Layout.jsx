import Navigation from './Components/Navigation'
import { Outlet } from 'react-router'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <small>© 2023 My App</small>
      </footer>
    </>
  )
}

export default App
