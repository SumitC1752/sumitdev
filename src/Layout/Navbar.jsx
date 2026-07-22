import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../components/Button";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const closeMobile = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "glass-strong py-3 shadow-lg shadow-black/25 border-b border-border/50"
                    : "bg-transparent py-5"
            }`}
        >
            <nav className="container mx-auto px-5 sm:px-6 flex items-center justify-between relative">
                <a
                    href="#"
                    onClick={closeMobile}
                    className="text-xl font-bold tracking-tight hover:text-primary transition-colors shrink-0"
                >
                    SA<span className="text-primary">.</span>
                </a>

                {/* Extended desktop pill — centered */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                    <div className="glass rounded-full px-3 lg:px-4 py-1.5 flex items-center gap-0.5 lg:gap-1 border border-border/50 glow-border">
                        {navLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.href}
                                className="px-4 lg:px-5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface/90 transition-colors whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:block shrink-0">
                    <a href="#contact">
                        <Button size="sm">Contact Me</Button>
                    </a>
                </div>

                <button
                    type="button"
                    className="md:hidden p-2.5 rounded-xl glass border border-border/50 text-foreground hover:text-primary hover:border-primary/40 depth-shadow-hover"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile dropdown — simple + clean */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden overflow-hidden border-t border-border/50"
                    >
                        <div className="glass-strong">
                            <div className="container mx-auto px-5 py-5 flex flex-col gap-1">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobile}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                        className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-surface/70 active:bg-surface transition-colors"
                                    >
                                        {link.label}
                                        <span className="text-[11px] tabular-nums text-primary/40">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </motion.a>
                                ))}

                                <div className="pt-3 mt-1 border-t border-border/40">
                                    <a href="#contact" onClick={closeMobile} className="block">
                                        <Button className="w-full" size="lg">
                                            Contact Me
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
