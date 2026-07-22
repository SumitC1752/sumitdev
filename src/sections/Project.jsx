import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { ScrollDoor, Reveal } from "../components/Depth3D";

const projects = [
    {
        title: "EzyReply",
        description:
            "AI email assistant that reads every thread, learns your voice, and prepares three reply drafts instantly — with commitment tracking, follow-up autopilot, and a universal inbox.",
        result: "Live AI SaaS product — reply drafts, inbox & follow-ups in production.",
        image: "/projects/ezyreply.png",
        tags: ["AI SaaS", "React", "Email Product"],
        link: "https://www.ezyreply.com/",
        featured: true,
    },
    {
        title: "RMRP Global Trade",
        description:
            "B2B export website for a global trading company dealing in aluminum, food, and agro commodities. Built with Next.js, Tailwind CSS, and an interactive world map visualization.",
        result: "Production B2B export site with custom domain & lead form live.",
        image: "/projects/rmrp.png",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        link: "https://rmrpglobaltrade.com",
    },
    {
        title: "Grampanchayat Kinhi-Bahirobawadi",
        description:
            "Multilingual government portal for a Maharashtra village panchayat, featuring local administration info, schemes, and announcements in Marathi.",
        result: "Multilingual government portal live in production.",
        image: "/projects/grampanchayat.png",
        tags: ["Next.js", "Multilingual", "Government"],
        link: "https://www.kinhi-bahirobawadi.grampanchayat.website/#top",
    },
    {
        title: "Dr. Nitin Sapat Dental Clinic",
        description:
            "Clean, conversion-focused website for a dental clinic with Google reviews integration and WhatsApp appointment booking.",
        result: "WhatsApp booking + Google reviews — clinic lead flow live.",
        image: "/projects/project3.png",
        tags: ["React", "WhatsApp Integration"],
        link: "https://drnitinsapat.in",
    },
    {
        title: "Skin Ayurveda Hair Skin Laser Clinic",
        description:
            "Premium clinic website for a Hadapsar-based skin, hair & laser practice — service pages, appointment booking CTA, and WhatsApp / Instagram quick actions.",
        result: "Booking CTA + WhatsApp / Instagram quick actions in production.",
        image: "/projects/project4.png",
        tags: ["Clinic Website", "Booking CTA", "Responsive"],
        link: "https://www.drvaishalisapat.in/",
    },
    {
        title: "WDRC - Wise Diabetes & Research Centre",
        description:
            "Mobile application for appointment booking at a diabetes research center, published on Play Store and App Store.",
        result: "Live on Play Store & App Store with appointment booking.",
        image: "/projects/wdrc.png",
        tags: ["React Native", "Mobile App", "Published"],
        isMobile: true,
        link: "https://play.google.com/store/apps/details?id=com.wisediabetes&pcampaignid=web_share",
    },
    {
        title: "Winner Weldingg Corporation",
        description:
            "Corporate website for an industrial welding equipment manufacturer serving clients like Bajaj, TATA Motors, Honda, and Mahindra.",
        result: "Industrial brand site live for a manufacturer serving OEMs.",
        image: "/projects/project2.png",
        tags: ["Industrial", "Corporate Website"],
        link: "https://winnerweldingg.in",
    },
];

const TiltCard = ({ children, className = "" }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 160, damping: 18 });
    const springY = useSpring(y, { stiffness: 160, damping: 18 });
    const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

    const onMove = (e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className={`[transform-style:preserve-3d] ${className}`}
        >
            {children}
        </motion.div>
    );
};

const Project = () => {
    return (
        <section id="project" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10">
                <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20 max-w-6xl mx-auto">
                    <div>
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            Featured Work
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                            Projects that
                            <span className="font-serif italic font-normal text-white">
                                {" "}make an impact.
                            </span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-sm md:text-right">
                        Production apps & websites — designed, built, and shipped for real clients.
                    </p>
                </Reveal>

                <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
                    {projects.map((project, idx) => (
                        <article
                            key={project.title}
                            className="group relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                        >
                            <div
                                className={`lg:col-span-7 ${
                                    idx % 2 === 1 ? "lg:order-2" : ""
                                }`}
                            >
                                <ScrollDoor from={idx % 2 === 0 ? "left" : "right"}>
                                    <TiltCard>
                                        <div className="relative">
                                            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-primary/20 via-transparent to-highlight/10 rounded-3xl blur-2xl opacity-30 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

                                            {project.isMobile ? (
                                                <div className="relative mx-auto max-w-[240px] sm:max-w-[260px]">
                                                    <div className="relative rounded-[2.4rem] border-[5px] border-surface bg-surface overflow-hidden aspect-[9/19] glow-border shadow-2xl shadow-black/40 group-hover:shadow-primary/25 transition-shadow duration-500">
                                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface rounded-b-2xl z-10" />
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            loading="lazy"
                                                            className="absolute inset-0 w-full h-full object-contain bg-background transition-transform duration-700 group-hover:scale-[1.03]"
                                                        />
                                                        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-muted-foreground/30 rounded-full z-20" />
                                                    </div>
                                                </div>
                                            ) : (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="relative block glass rounded-2xl overflow-hidden glow-border depth-shadow group-hover:shadow-primary/20 transition-shadow duration-500"
                                                >
                                                    <div className="flex items-center gap-2 px-4 py-2.5 bg-surface/95 border-b border-border/50">
                                                        <div className="flex gap-1.5 shrink-0">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                                        </div>
                                                        <div className="flex-1 min-w-0 text-center">
                                                            <span className="inline-block px-3 py-1 bg-background/60 rounded-md text-[11px] text-muted-foreground truncate max-w-full font-mono">
                                                                {new URL(project.link).hostname}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Natural screenshot ratio (~2:1) — no forced crop */}
                                                    <div className="relative w-full bg-background overflow-hidden">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            loading="lazy"
                                                            className="block w-full h-auto object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                                                        />
                                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            <span className="text-sm text-white/90 font-medium">
                                                                Open project
                                                            </span>
                                                            <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30">
                                                                <ArrowUpRight className="w-5 h-5" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            )}
                                        </div>
                                    </TiltCard>
                                </ScrollDoor>
                            </div>

                            <Reveal
                                delay={0.1}
                                className={`lg:col-span-5 space-y-5 ${
                                    idx % 2 === 1 ? "lg:order-1" : ""
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl sm:text-5xl font-bold text-primary/20 select-none tabular-nums">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                                    {project.featured && (
                                        <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25 font-semibold">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                    {project.description}
                                </p>

                                {project.result && (
                                    <p className="text-sm text-primary/90 font-medium border-l-2 border-primary/50 pl-3">
                                        {project.result}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3.5 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-1 flex flex-wrap items-center gap-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                                    >
                                        {project.isMobile ? "View on Store" : "Visit Site"}
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </a>
                                    {project.isMobile && (
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                                            <Smartphone className="w-4 h-4" />
                                            Play Store & App Store
                                        </span>
                                    )}
                                </div>
                            </Reveal>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
