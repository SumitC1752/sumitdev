import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { ExternalLink, Smartphone } from "lucide-react";

const projects = [
    {
        title: "RMRP Global Trade",
        description:
            "B2B export website for a global trading company dealing in aluminum, food, and agro commodities. Built with Next.js, Tailwind CSS, and an interactive world map visualization.",
        image: "/projects/rmrp.png",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        link: "https://rmrpglobaltrade.com",
    },
    {
        title: "Grampanchayat Kinhi-Bahirobawadi",
        description:
            "Multilingual government portal for a Maharashtra village panchayat, featuring local administration info, schemes, and announcements in Marathi.",
        image: "/projects/grampanchayat.png",
        tags: ["Next.js", "Multilingual", "Government"],
        link: "https://www.kinhi-bahirobawadi.grampanchayat.website/#top",
    },
    {
        title: "Dr. Nitin Sapat Dental Clinic",
        description:
            "Clean, conversion-focused website for a dental clinic with Google reviews integration and WhatsApp appointment booking.",
        image: "/projects/project3.png",
        tags: ["React", "WhatsApp Integration"],
        link: "https://drnitinsapat.in",
    },
    {
        title: "WDRC - Wise Diabetes & Research Centre",
        description:
            "Mobile application for appointment booking at a diabetes research center, published on Play Store and App Store.",
        image: "/projects/wdrc.png",
        tags: ["React Native", "Mobile App", "Published"],
        isMobile: true,
        link: "https://play.google.com/store/apps/details?id=com.wisediabetes&pcampaignid=web_share",
    },
    {
        title: "Winner Weldingg Corporation",
        description:
            "Corporate website for an industrial welding equipment manufacturer serving clients like Bajaj, TATA Motors, Honda, and Mahindra.",
        image: "/projects/project2.png",
        tags: ["Industrial", "Corporate Website"],
        link: "https://winnerweldingg.in",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Project = () => {
    return (
        <section id="project" className="py-32 relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground">
                        A selection of production-grade applications I've designed, built, and shipped.
                    </p>
                </motion.div>

                {/* Projects List */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-28"
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className={`group relative flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-8 lg:gap-16 items-center`}
                        >
                            {/* Image side */}
                            <div className="flex-1 w-full">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-highlight/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {project.isMobile ? (
                                        /* Phone Mockup */
                                        <div className="relative mx-auto max-w-[260px]">
                                            <div className="relative rounded-[2.5rem] border-4 border-surface/80 bg-surface overflow-hidden aspect-[9/19] glow-border group-hover:shadow-[0_0_40px_rgba(32,178,166,0.25)] transition-shadow duration-500">
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-surface/80 rounded-b-2xl z-10" />
                                                {project.image ? (
                                                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-contain bg-background" />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-highlight/10 flex items-center justify-center">
                                                        <Smartphone className="w-12 h-12 text-primary/40" />
                                                    </div>
                                                )}
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-surface/60 rounded-full z-20" />
                                            </div>
                                        </div>
                                    ) : (
                                        /* Browser Mockup */
                                        <div className="relative glass rounded-2xl overflow-hidden glow-border group-hover:shadow-[0_0_35px_rgba(32,178,166,0.2)] transition-all duration-500 group-hover:-translate-y-1">
                                            <div className="flex items-center gap-2 px-4 py-3 bg-surface/80 border-b border-border/50">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                </div>
                                                <div className="flex-1 text-center">
                                                    <span className="inline-block px-3 py-1 bg-background/50 rounded-md text-xs text-muted-foreground truncate max-w-[220px] font-mono">
                                                        {new URL(project.link).hostname}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="relative overflow-hidden bg-background" style={{ minHeight: project.image ? "auto" : undefined }}>
                                                {project.image ? (
                                                    <img src={project.image} alt={project.title} loading="lazy" className="w-full block transition-transform duration-700 group-hover:scale-105" />
                                                ) : (
                                                    <div className="aspect-video bg-gradient-to-br from-primary/[0.08] via-background to-highlight/[0.05] flex items-center justify-center">
                                                        <span className="text-6xl font-bold text-primary/10 select-none">
                                                            {project.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content side */}
                            <div className="flex-1 w-full space-y-5">
                                <div className="flex items-center gap-3">
                                    <span className="text-5xl font-bold text-primary/15 select-none">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-2 flex flex-wrap items-center gap-3">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                                        >
                                            {project.isMobile ? "View on Store" : "Visit Site"}
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                    {project.isMobile && (
                                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm">
                                            <Smartphone className="w-4 h-4" />
                                            Play Store & App Store
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Project;
