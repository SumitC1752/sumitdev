import React from 'react'
import Button from '../components/Button'
import { ArrowRight, Download, icons, ChevronDown } from 'lucide-react'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// =============== CV DOWNLOAD FUNCTION WITH DEBUGGING ===============
const downloadCV = (e) => {
    if (e) e.preventDefault();

    console.log('Download CV clicked!');

    try {
        // Try direct download
        const link = document.createElement('a');
        const cvPath = '/SumitAnarase_CV.pdf';

        console.log('Attempting to download from:', cvPath);

        link.href = cvPath;
        link.download = 'SumitAnarase_CV.pdf';
        link.style.display = 'none';

        document.body.appendChild(link);
        console.log('Link appended to DOM');

        link.click();
        console.log('Click triggered');

        // Cleanup
        setTimeout(() => {
            document.body.removeChild(link);
            console.log('Link removed from DOM');
        }, 100);

    } catch (error) {
        console.error('Error downloading CV:', error);
        alert('Error downloading CV. Check console for details.');
    }
};

const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "JavaScript",

    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",

    "Node.js",
    "Express.js",
    "REST API Development",

    "MongoDB",
    "MySQL",

    "Redux",
    "Jest",

    "WordPress",
    "Shopify",
    "Framer",
    "Webflow",

    "Cursor",
    "Claude",
    "GitHub Copilot",
    "Antigravity",

    "Git",
    "GitHub",


];
const Hero = () => {
    return (
        <>
            <section className='relative min-h-screen flex items-center overflow-hidden'>
                {/* bg  */}
                <div className='absolute inset-0'>
                    <img src="/hero-bg.jpg" alt="Hero image" className='w-full h-full object-cover opacity-40' />

                    <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background' />
                </div>
                {/* green dos */}

                <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                    {[...Array(30)].map((__, i) => (

                        <div className='absolute w-1.5 h-1.5 rounded-full opacity-60' style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,

                            animationDelay: `${Math.random() * 5}s`,
                        }} />

                    ))}
                </div>

                {/* content */}

                <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        {/* left text */}
                        <div className='space-y-8 '>
                            <div className='animate-fade-in'>
                                <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                                    <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />Software Engineer
                                </span>
                            </div>

                            {/* headline */}
                            <div className='space-y-4'>
                                <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                                    Crafting <span className='text-primary glow-text'> Digital</span>
                                    <br />
                                    Experiences with
                                    <br />
                                    <span className='font-serif italic font-normal text-white'>
                                        Precision..
                                    </span>
                                </h1>
                                <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                                    I'm Sumit Anarase, a passionate developer with expertise in React and backend systems, creating high-quality, user-focused applications that users love for their speed and experience.
                                </p>
                            </div>
                            {/* CTA */}

                            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                                <a href="#contact">
                                    <Button size='lg' >
                                        Contact Me <ArrowRight className='w-5 h-5' />
                                    </Button>
                                </a>

                                <AnimatedBorderButton onClick={downloadCV}>
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </AnimatedBorderButton>
                            </div>
                            {/* SOCIAL LINKS  */}

                            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                                <span className='text-sm text-muted-foreground'>Follow Me :</span>

                                {[
                                    { icon: FaGithub, href: "https://github.com/SumitC1752" },
                                    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sumit-anarase-33659321a/" },
                                    { icon: FaInstagram, href: "https://www.instagram.com/sumit__1752?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                                ].map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
                                        >
                                            <Icon className='w-5 h-5' />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        {/* Right  */}
                        <div className='relative animate-fade-in animation-delay-300'>
                            {/* Profile Image */}

                            <div className='relative max-w-md mx-auto'>
                                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse-glow' />
                                <div className='relative glass rounded-3xl p-2 glow-border'>

                                    <img src="/profile-photo.png" alt="Sumit Anarase" className='w-full aspect-[4/5] object-cover rounded-2xl' />
                                    {/* floating batch */}
                                    <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                                            <span className='text-sm font-medium'>Available for work</span>
                                        </div>
                                    </div>

                                    {/* state badge */}
                                    <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                        <div className='text-2xl font-bold text-primary'>1+</div>
                                        <div className='text-xs text-muted-foreground'>Year Exp.</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Skills */}

                    <div className="mt-20 animate-fade-in animation-delay-600">
                        <p className="text-sm text-muted-foreground mb-6 text-center">
                            Technologies I work with
                        </p>
                        <div className="relative overflow-hidden">
                            <div
                                className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
                            />
                            <div
                                className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
                            />
                            <div className="flex animate-marquee">
                                {[...skills, ...skills].map((skill, idx) => (
                                    <div key={idx} className="flex-shrink-0 px-8 py-4">
                                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
                >
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
            </section>

        </>
    )
}

export default Hero