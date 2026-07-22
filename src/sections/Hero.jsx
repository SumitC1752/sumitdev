import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const downloadCV = (e) => {
    if (e) e.preventDefault();
    try {
        const link = document.createElement('a');
        link.href = '/Sumit%20A_resume.pdf';
        link.download = 'Sumit_Anarase_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => document.body.removeChild(link), 100);
    } catch (error) {
        console.error('Error downloading CV:', error);
        alert('Error downloading CV. Please try again.');
    }
};

const skills = [
    "JavaScript", "Python", "React", "Node.js", "Tailwind",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel", "Cursor",
];

const particles = [
    { left: 8, top: 18, duration: 18, delay: 0.2 },
    { left: 22, top: 42, duration: 22, delay: 1.1 },
    { left: 48, top: 68, duration: 24, delay: 2.0 },
    { left: 74, top: 55, duration: 21, delay: 1.5 },
    { left: 86, top: 20, duration: 17, delay: 0.3 },
    { left: 12, top: 78, duration: 23, delay: 1.8 },
    { left: 55, top: 8, duration: 25, delay: 2.2 },
    { left: 92, top: 45, duration: 22, delay: 0.4 },
    { left: 40, top: 35, duration: 21, delay: 0.9 },
];

const socials = [
    { icon: FaGithub, href: "https://github.com/SumitC1752", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sumit-anarase-33659321a/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/sumit__1752", label: "Instagram" },
];

const floatCards = [
    { label: "React", className: "top-[6%] -left-3 sm:-left-8", delay: 0, depth: 0.35 },
    { label: "Next.js", className: "top-[40%] -right-4 sm:-right-10", delay: 0.5, depth: -0.45 },
    { label: "Mobile", className: "bottom-[16%] -left-2 sm:-left-5", delay: 1, factor: 0.28 },
];

const HeroVisual = () => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 120, damping: 14, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 120, damping: 14, mass: 0.4 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [14, -14]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-14, 14]);

    const glareX = useTransform(springX, [-0.5, 0.5], ["12%", "88%"]);
    const glareY = useTransform(springY, [-0.5, 0.5], ["8%", "78%"]);
    const glareBg = useTransform([glareX, glareY], ([gx, gy]) =>
        `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.32), transparent 45%)`
    );

    const shadowX = useTransform(springX, [-0.5, 0.5], [14, -14]);
    const shadowY = useTransform(springY, [-0.5, 0.5], [14, 28]);
    const shadow = useTransform(
        [shadowX, shadowY],
        ([sx, sy]) => `${sx}px ${sy}px 40px rgba(0,0,0,0.42), 0 0 44px rgba(43,191,179,0.2)`
    );

    const chipX1 = useTransform(springX, [-0.5, 0.5], [12, -12]);
    const chipY1 = useTransform(springY, [-0.5, 0.5], [8, -8]);
    const chipX2 = useTransform(springX, [-0.5, 0.5], [-12, 12]);
    const chipY2 = useTransform(springY, [-0.5, 0.5], [-10, 10]);
    const chipX3 = useTransform(springX, [-0.5, 0.5], [8, -8]);
    const chipY3 = useTransform(springY, [-0.5, 0.5], [12, -6]);
    const badgeX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
    const chipParallax = [
        { x: chipX1, y: chipY1 },
        { x: chipX2, y: chipY2 },
        { x: chipX3, y: chipY3 },
    ];

    const updateFromPoint = (clientX, clientY) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((clientX - rect.left) / rect.width - 0.5);
        y.set((clientY - rect.top) / rect.height - 0.5);
    };

    const handleMove = (e) => updateFromPoint(e.clientX, e.clientY);

    const handleTouchMove = (e) => {
        const t = e.touches[0];
        if (t) updateFromPoint(t.clientX, t.clientY);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
        setHovered(false);
    };

    return (
        <div className="perspective-hero relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[360px] mx-auto [perspective:1200px]">
            <div className="absolute inset-[8%] rounded-3xl bg-primary/10 blur-xl translate-y-6 scale-95 pointer-events-none" />

            <div className="absolute inset-[-14%] flex items-center justify-center pointer-events-none opacity-50">
                <div className="w-full aspect-square rounded-full border border-primary/35 animate-spin-slow-3d shadow-[0_0_30px_rgba(43,191,179,0.15)]" />
            </div>
            <div className="absolute inset-[-7%] flex items-center justify-center pointer-events-none opacity-30">
                <div
                    className="w-full aspect-square rounded-full border border-dashed border-primary/45"
                    style={{ animation: "spin-slow-3d 26s linear infinite reverse" }}
                />
            </div>
            <div className="absolute inset-[2%] flex items-center justify-center pointer-events-none opacity-20">
                <div
                    className="w-full aspect-square rounded-full border border-primary/25"
                    style={{ animation: "spin-slow-3d 14s linear infinite" }}
                />
            </div>

            {floatCards.map((card, i) => (
                <motion.div
                    key={card.label}
                    className={`absolute z-20 pointer-events-none ${card.className}`}
                    style={{
                        x: chipParallax[i].x,
                        y: chipParallax[i].y,
                    }}
                >
                    <div
                        className={`${i % 2 === 0 ? "animate-float-3d" : "animate-float-3d-alt"} glass glow-border px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold text-primary border border-primary/35 shadow-[0_12px_30px_rgba(0,0,0,0.35),0_0_20px_rgba(43,191,179,0.22)] backdrop-blur-xl`}
                        style={{ animationDelay: `${card.delay}s` }}
                    >
                        {card.label}
                    </div>
                </motion.div>
            ))}

            <motion.div
                ref={ref}
                className="relative z-10 cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
                style={{ rotateX, rotateY, transformPerspective: 1200 }}
                animate={{ scale: hovered ? 1.03 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                onMouseMove={handleMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={reset}
                onTouchMove={handleTouchMove}
                onTouchEnd={reset}
            >
                <div
                    className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/40 via-primary/5 to-highlight/25 blur-2xl transition-opacity duration-500 pointer-events-none"
                    style={{ opacity: hovered ? 1 : 0.55 }}
                />

                <motion.div
                    className="relative glass rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-primary/35 overflow-hidden glow-border [transform-style:preserve-3d]"
                    style={{ boxShadow: shadow }}
                >
                    <img
                        src="/profile-photo.png"
                        alt="Sumit Anarase"
                        className="w-full aspect-[4/5] object-cover rounded-xl sm:rounded-2xl"
                        draggable={false}
                    />
                    <motion.div
                        className="pointer-events-none absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-2xl mix-blend-soft-light"
                        style={{ background: glareBg }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/15" />
                </motion.div>

                <motion.div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-30 w-max hidden sm:block"
                    style={{ x: badgeX }}
                >
                    <div className="animate-float-3d-alt inline-flex items-center gap-2.5 glass rounded-full px-4 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-primary/25">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <span className="text-sm font-medium whitespace-nowrap">Available for work</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-45"
                        style={{
                            backgroundColor: "#2bbfb3",
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            animation: `slow-drift ${p.duration}s ease-in-out infinite`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-10 sm:pb-14 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass glow-border text-xs sm:text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer · Pune
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-[2.15rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:leading-[1.08] animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">Digital</span>
                                <br />
                                Experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    Precision.
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md animate-fade-in animation-delay-200 leading-relaxed">
                                I'm <span className="text-foreground font-medium">Sumit Anarase</span> —
                                I build websites & apps for clinics, brands & startups with React, Next.js & React Native.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in animation-delay-300">
                            <a href="#contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                            <AnimatedBorderButton
                                onClick={downloadCV}
                                className="w-full sm:w-auto justify-center"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        <div className="flex items-center gap-3 animate-fade-in animation-delay-400">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="p-2.5 rounded-full glass border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 depth-shadow-hover"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative animate-fade-in animation-delay-300 pb-6 sm:pb-8 lg:pb-4">
                        <HeroVisual />
                        <div className="mt-6 flex justify-center sm:hidden">
                            <div className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-2 text-xs">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Available for work
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 sm:mt-16 animate-fade-in animation-delay-600">
                    <div className="relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={`${skill}-${idx}`} className="flex-shrink-0 px-6 sm:px-8 py-2">
                                    <span className="text-sm sm:text-base font-medium text-muted-foreground/50 hover:text-primary/70 transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 hidden md:block">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                >
                    <span className="text-[10px] uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
