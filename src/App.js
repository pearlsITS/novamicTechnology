// eslint-disable-next-line
import React from 'react'
import Header from './Components/Header/Header'
import { Routes, Route, HashRouter } from 'react-router-dom'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Careers from './Pages/Careers/Careers'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </>
  )
}

export default App
