import React from 'react'
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Well-Structured Code",
        description:
            "Building maintainable and scalable code with clarity and best practices.",
    },
    {
        icon: Rocket,
        title: "High Performance",
        description:
            "Delivering fast, optimized, and seamless user experiences.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description:
            "Collaborating effectively to turn ideas into impactful solutions.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Leveraging modern technologies to create smart and future-ready solutions.",
    },
];

const About = () => {
    return (
        <div>
            <section id='about' className='py-32 relative overflow-hidden'>
                <div className='container mx-auto px-6 relative z-10'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        {/* left column */}

                        <div className='space-y-8'>
                            <div className='animate-fade-in '>
                                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
                            </div>
                            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                                Building the future,
                                <span className='font-serif italic font-normal text-white'> one component at a time.</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                                <p>
                                    I'm Sumit Anarase, a full-stack developer who builds fast, scalable websites and mobile apps. I've delivered production websites for clients across industrial manufacturing, government, and healthcare sectors, along with a mobile app published on the Play Store and App Store.
                                </p>
                                <p>
                                    I work closely with AI tools (Claude, Cursor) to ship high-quality code faster — without cutting corners.
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                                <p className="text-lg font-medium italic text-foreground">
                                    "My mission is to deliver impactful digital solutions through well-structured, scalable, and performance-driven development, helping businesses achieve long-term success in the digital world."
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Hilights */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="glass p-6 rounded-2xl animate-fade-in"
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
