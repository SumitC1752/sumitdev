import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Project from './sections/Project'
import Testimonials from './sections/Testimonials'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'

const App = () => {
    return (
        <div className='min-h-screen overflow-x-hidden'>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Contact />
                <Experience />
                <Project />
                <Testimonials />

            </main>
            <Footer />

        </div>
    )
}

export default App


