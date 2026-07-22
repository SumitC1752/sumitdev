import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "../components/Depth3D";

const experiences = [
    {
        period: "01/2023 — Present",
        location: "Pune, India",
        role: "Freelance Full-Stack Developer",
        company: "Self-employed",
        companyUrl: "https://sumitbuilds.in",
        companyLabel: "sumitbuilds.in",
        current: true,
        bullets: [
            "Developed projects end-to-end — from client acquisition and requirements gathering, through architecture and development, to deployment and production support — owning every stage independently across 5+ production applications.",
            "Managed DNS/domain setup, Vercel and Cloudflare Pages deployment pipelines, and production support independently for each client.",
            "Built RMRP Global Trade (rmrpglobaltrade.com) — B2B export site with Cloudflare Pages, custom domain DNS, Zoho Mail MX records, and Resend API contact form.",
            "Contributed to WDRC, a React Native healthcare appointment-booking app on Google Play Store and Apple App Store — UI screens and API integration with an AI-assisted workflow.",
            "Set up custom transactional email infrastructure (Zoho Mail + Resend API) for client business communication.",
            "Adopted an AI-augmented, spec-first workflow (Claude Code + Cursor) — tight specs and reviewed diffs — to deliver features in shorter cycles while keeping code reviewable.",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "Cloudflare Pages",
            "Vercel",
            "Resend API",
            "Zoho Mail",
            "Supabase",
            "Docker",
            "GitHub Actions",
            "Linux",
            "Git",
            "AWS (EC2, S3, IAM)",
            "DNS / Load Balancing",
        ],
    },
    {
        period: "12/2024 — 01/2026",
        location: "Pune, India",
        role: "Software Developer (Contract)",
        company: "CypherMatrix Technologies Pvt. Ltd.",
        current: false,
        bullets: [
            "Built a multi-tenant website system for healthcare clinics on React.js — per-clinic branding, dynamic content rendering, and a shared template architecture serving every deployed clinic from a single codebase.",
            "Designed and shipped a reusable component library adopted across all clinic templates — standardising design patterns and eliminating duplicate UI work on each new clinic onboarding.",
            "Integrated REST APIs for dynamic data rendering, collaborating with backend engineers on end-to-end feature delivery.",
            "Contributed to a Turborepo + pnpm monorepo — managing shared packages, configs, and cross-app dependencies across multiple applications.",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "Node.js",
            "Express",
            "Tailwind CSS",
            "MUI",
            "Redux",
            "Jest",
            "Zod",
            "Turborepo",
            "pnpm",
        ],
    },
];

const Experience = () => {
    const trackRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: trackRef,
        offset: ["start 80%", "end 20%"],
    });
    const lineScale = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1]),
        { stiffness: 100, damping: 24 }
    );

    return (
        <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal className="max-w-3xl mx-auto text-center mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Career Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5">
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            speaks volumes.
                        </span>
                    </h2>
                    <p className="text-muted-foreground">
                        Full-stack freelance work and contract delivery — shipping production systems end to end.
                    </p>
                </Reveal>

                <div ref={trackRef} className="max-w-3xl mx-auto relative pl-8 sm:pl-10 space-y-10">
                    <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-border/80 overflow-hidden">
                        <motion.div
                            className="w-full h-full origin-top bg-gradient-to-b from-primary via-primary to-highlight"
                            style={{ scaleY: lineScale }}
                        />
                    </div>

                    {experiences.map((job, idx) => (
                        <Reveal key={job.role} delay={idx * 0.1} className="relative">
                            <div
                                className={`absolute -left-8 sm:-left-9 top-8 w-4 h-4 rounded-full ring-4 ${
                                    job.current
                                        ? "bg-primary shadow-lg shadow-primary/50 ring-primary/25"
                                        : "bg-muted-foreground/50 ring-border/60"
                                }`}
                            />

                            <div
                                className={`glass p-6 sm:p-8 md:p-10 rounded-2xl border depth-shadow-hover duration-500 ${
                                    job.current
                                        ? "border-primary/35 glow-border hover:border-primary/50"
                                        : "border-border/70 hover:border-primary/30"
                                }`}
                            >
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                                    <span className="text-primary font-medium">{job.period}</span>
                                    <span className="text-muted-foreground/50">·</span>
                                    <span className="text-muted-foreground">{job.location}</span>
                                    {job.current && (
                                        <span className="ml-auto text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25 font-semibold">
                                            Current
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-semibold mt-3">{job.role}</h3>
                                <p className="text-muted-foreground mt-0.5">
                                    {job.company}
                                    {job.companyUrl && (
                                        <>
                                            {" · "}
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:underline"
                                            >
                                                {job.companyLabel || job.companyUrl}
                                            </a>
                                        </>
                                    )}
                                </p>

                                <ul className="mt-5 space-y-2.5">
                                    {job.bullets.map((bullet) => (
                                        <li
                                            key={bullet.slice(0, 48)}
                                            className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                                        >
                                            <span className="text-primary mt-1.5 shrink-0">▹</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-7">
                                    {job.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/60"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
