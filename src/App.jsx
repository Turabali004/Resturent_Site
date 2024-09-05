import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


      <div className='h-96 w-full'></div>
    </>
  )
}

export default App
