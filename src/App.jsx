import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Services from  './Services'
import Experience from  './Experience'
import Skills from  './Skills'
import Contact from  './Contact'
import Footer from "./Footer"

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
