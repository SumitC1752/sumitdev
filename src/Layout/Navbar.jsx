import React, { useEffect, useState } from 'react'
import Button from '../components/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },

];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 50);
    }


    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])


  return (
    <>
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }  z-50`}>
        <nav className='container mx-auto flex px-6 items-center justify-between relative'>

          {/* LOGO */}
          <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
            SA <span className='text-primary'>.</span>
          </a>

          {/* DESKTOP MENU */}
          <div className='hidden md:flex items-center gap-1'>
            <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className='hidden md:block'>
            <a href="#contact">
              <Button size="sm">Contact Me</Button>
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className='md:hidden p-2 text-foreground'
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full glass-strong z-50'>
            <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>

              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className='text-lg text-muted-foreground hover:text-foreground py-2'
                  onClick={() => setIsMobileMenuOpen(false)} // close on click
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault(); // anchor ka default scroll rok diya

                  setIsMobileMenuOpen(false); // menu close

                  const section = document.getElementById("contact");
                  section?.scrollIntoView({ behavior: "smooth" }); // smooth scroll
                }}
              >
                <Button>
                  Contact Me
                </Button>
              </a>

            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;