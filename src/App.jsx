import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Project from './sections/Project'
import Skills from './sections/Skills'
import Testimonials from './sections/Testimonials'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import { SmoothScroll, ScrollProgress } from './components/SmoothScroll'

const App = () => {
    return (
        <SmoothScroll>
            <div className='min-h-screen overflow-x-hidden'>
                <ScrollProgress />
                <Navbar />

                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Project />
                    <Skills />
                    <Experience />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    )
}

export default App
