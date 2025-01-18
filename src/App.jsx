import { BrowserRouter, Routes,Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Section from './components/Section-1'


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
