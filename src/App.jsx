import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import CategoriesPage from './Pages/CategoriesPage'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Nopage from './Components/Error404'



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<Nopage/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}
