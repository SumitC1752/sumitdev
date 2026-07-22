import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/SumitC1752", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sumit-anarase-33659321a/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/sumit__1752", label: "Instagram" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

const BOOK_CALL =
    "https://wa.me/919209214599?text=" +
    encodeURIComponent("Hi Sumit, I'd like to book a free 15-min call about a project.");

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6 space-y-10">
                <div className="glass rounded-2xl p-6 sm:p-8 border border-primary/25 glow-border flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                    <div>
                        <p className="text-lg font-semibold">Ready to start a project?</p>
                        <p className="text-sm text-muted-foreground mt-1">
                            Free 15-min call — clinics, brands & startups welcome.
                        </p>
                    </div>
                    <a
                        href={BOOK_CALL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 shadow-md shadow-primary/25 transition-colors shrink-0"
                    >
                        Book a free 15-min call
                    </a>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-tight">
                            SA<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Sumit Anarase ·{" "}
                            <a
                                href="https://sumitbuilds.in"
                                className="text-primary hover:underline"
                            >
                                sumitbuilds.in
                            </a>
                        </p>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-5">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
