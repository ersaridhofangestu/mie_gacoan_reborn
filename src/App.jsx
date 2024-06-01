import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom'
import Carousel from './components/Carousel'
import About from './containers/About'
import BestSelling from './containers/BestSelling'
import Info from './containers/Info'
import Testimonial from './containers/Testimonial'


const App = () => {
  const location = useLocation()
  return (
    <>
      <Navbar location={location} />
      <main>
        <Carousel />
        <div className='flex flex-col gap-20'>
          <About />
          <BestSelling />
          <Info />
          <Testimonial />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App