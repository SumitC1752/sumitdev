import { useRef } from "react";
import { Building2, Smartphone, Sparkles, Globe, ArrowUpRight } from "lucide-react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useMotionTemplate,
} from "framer-motion";

const highlights = [
    {
        icon: Globe,
        title: "Client websites shipped",
        description:
            "Production sites for manufacturing, government, and healthcare — live and converting.",
        depth: 28,
        rotate: -5,
    },
    {
        icon: Smartphone,
        title: "Apps on both stores",
        description:
            "React Native apps on Play Store & App Store with real users booking appointments.",
        depth: 40,
        rotate: 4,
    },
    {
        icon: Building2,
        title: "Industry breadth",
        description:
            "From village panchayat portals to B2B export platforms and clinic booking flows.",
        depth: 34,
        rotate: 3,
    },
    {
        icon: Sparkles,
        title: "AI-accelerated delivery",
        description:
            "Cursor & Claude to ship cleaner code faster — without cutting quality corners.",
        depth: 48,
        rotate: -4,
    },
];

const stats = [
    { value: "8+", label: "Projects live" },
    { value: "2", label: "Store apps" },
    { value: "3", label: "Industries" },
    { value: "2023", label: "Freelance since" },
];

const DepthCard = ({ item, index, progress }) => {
    const start = 0.12 + index * 0.08;
    const end = start + 0.35;

    const y = useTransform(progress, [start, end], [42 + item.depth * 0.22, 0]);
    const z = useTransform(progress, [start, end], [-item.depth * 0.7, 0]);
    const rotateX = useTransform(progress, [start, end], [10, 0]);
    const rotateY = useTransform(progress, [start, end], [item.rotate, 0]);
    const opacity = useTransform(progress, [start, start + 0.1, end], [0, 1, 1]);
    const scale = useTransform(progress, [start, end], [0.94, 1]);
    const springY = useSpring(y, { stiffness: 90, damping: 18 });
    const springZ = useSpring(z, { stiffness: 90, damping: 18 });
    const springRX = useSpring(rotateX, { stiffness: 90, damping: 18 });
    const springRY = useSpring(rotateY, { stiffness: 90, damping: 18 });

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const glareX = useSpring(mx, { stiffness: 140, damping: 18 });
    const glareY = useSpring(my, { stiffness: 140, damping: 18 });
    const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(43,191,179,0.18), transparent 55%)`;

    const onMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - rect.left) / rect.width) * 100);
        my.set(((e.clientY - rect.top) / rect.height) * 100);
    };

    return (
        <motion.div
            style={{
                y: springY,
                z: springZ,
                rotateX: springRX,
                rotateY: springRY,
                opacity,
                scale,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={onMove}
            onMouseLeave={() => {
                mx.set(50);
                my.set(40);
            }}
            whileHover={{ z: 16, scale: 1.015 }}
            className="group relative glass p-5 sm:p-6 rounded-2xl border border-border/70 hover:border-primary/40 depth-shadow-hover transition-colors duration-300 will-change-transform"
        >
            <motion.div
                aria-hidden
                style={{ background: glare }}
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
                className="relative w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                style={{ transform: "translateZ(24px)" }}
            >
                <item.icon className="w-5 h-5 text-primary" />
            </div>
            <h3
                className="relative text-base font-semibold mb-2 group-hover:text-primary transition-colors"
                style={{ transform: "translateZ(18px)" }}
            >
                {item.title}
            </h3>
            <p
                className="relative text-sm text-muted-foreground leading-relaxed"
                style={{ transform: "translateZ(10px)" }}
            >
                {item.description}
            </p>
        </motion.div>
    );
};

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const leftY = useTransform(scrollYProgress, [0.1, 0.55], [28, -12]);
    const leftRotate = useTransform(scrollYProgress, [0.1, 0.55], [3, 0]);
    const leftZ = useTransform(scrollYProgress, [0.1, 0.55], [-16, 0]);
    const leftOpacity = useTransform(scrollYProgress, [0.08, 0.28], [0, 1]);
    const leftSpringY = useSpring(leftY, { stiffness: 80, damping: 20 });
    const leftSpringR = useSpring(leftRotate, { stiffness: 80, damping: 20 });

    const blob1Y = useTransform(scrollYProgress, [0, 1], [50, -70]);
    const blob2Y = useTransform(scrollYProgress, [0, 1], [-24, 60]);
    const statsY = useTransform(scrollYProgress, [0.35, 0.7], [28, -6]);
    const statsOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
    const statsScale = useTransform(scrollYProgress, [0.35, 0.55], [0.96, 1]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ perspective: "1400px" }}
        >
            <motion.div
                style={{ y: blob1Y }}
                className="absolute top-1/4 -left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
                style={{ y: blob2Y }}
                className="absolute bottom-0 right-0 w-72 h-72 bg-highlight/10 rounded-full blur-3xl pointer-events-none"
            />

            <div
                className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl"
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                    <motion.div
                        style={{
                            y: leftSpringY,
                            rotateX: leftSpringR,
                            z: leftZ,
                            opacity: leftOpacity,
                            transformStyle: "preserve-3d",
                        }}
                        className="lg:col-span-5 space-y-6 will-change-transform"
                    >
                        <div style={{ transform: "translateZ(40px)" }}>
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-3">
                                Building the future,
                                <span className="font-serif italic font-normal text-white">
                                    {" "}one component at a time.
                                </span>
                            </h2>
                        </div>

                        <div
                            className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base"
                            style={{ transform: "translateZ(24px)" }}
                        >
                            <p>
                                I'm <span className="text-foreground font-medium">Sumit Anarase</span> —
                                a full-stack developer who builds fast, scalable websites and mobile apps.
                                I've shipped production work across manufacturing, government, and healthcare.
                            </p>
                            <p>
                                From client sites to store-published apps, I care about clean structure,
                                performance, and shipping something people actually use.
                            </p>
                        </div>

                        <div
                            className="relative glass rounded-2xl p-5 sm:p-6 border border-primary/25 glow-border depth-shadow"
                            style={{ transform: "translateZ(40px)" }}
                        >
                            <span className="absolute -top-3 left-5 text-4xl text-primary/35 font-serif leading-none select-none">
                                "
                            </span>
                            <p className="text-sm sm:text-base font-medium italic text-foreground/95 leading-relaxed pt-2">
                                Well-structured, scalable, performance-driven development —
                                that's the bar for every project I take on.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            Let's work together
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>

                    <div
                        className="lg:col-span-7 space-y-6"
                        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                    >
                        <div
                            className="grid sm:grid-cols-2 gap-4"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {highlights.map((item, idx) => (
                                <DepthCard
                                    key={item.title}
                                    item={item}
                                    index={idx}
                                    progress={scrollYProgress}
                                />
                            ))}
                        </div>

                        <motion.div
                            style={{
                                y: statsY,
                                opacity: statsOpacity,
                                scale: statsScale,
                                transformStyle: "preserve-3d",
                            }}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-3 will-change-transform"
                        >
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="glass rounded-2xl px-4 py-4 text-center border border-border/60 hover:border-primary/35 depth-shadow-hover"
                                    style={{ transform: `translateZ(${12 + i * 6}px)` }}
                                >
                                    <p className="text-xl sm:text-2xl font-bold text-primary tabular-nums">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
