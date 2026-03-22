import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Header />
      <main>

      <Hero />
      <About />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      </main>
      <p className='text-center py-4 text-sm'>&copy;{new Date().getFullYear()}Boominathan. All Rights Reserved</p>
    </div>
  )
}

export default App