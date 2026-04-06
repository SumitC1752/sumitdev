import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
    { icon: FaGithub, href: "https://github.com/SumitC1752", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sumit-anarase-33659321a/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/sumit__1752?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="py-12 border-t border-border">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Logo & Copyright */}
                        <div className="text-center md:text-left">
                            <a href="#" className="text-xl font-bold tracking-tight">
                                SA.<span className="text-primary">.</span>
                            </a>
                            <p className="text-sm text-muted-foreground mt-2">
                                © {currentYear} Sumit Anarase. All rights reserved.
                            </p>
                        </div>

                        {/* Links */}
                        <nav className="flex flex-wrap justify-center gap-6">
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

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
