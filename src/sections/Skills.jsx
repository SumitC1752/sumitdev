import { Reveal, ScaleIn } from "../components/Depth3D";

const skillGroups = [
    {
        title: "Languages",
        items: ["JavaScript", "C", "C++", "Python", "Java"],
    },
    {
        title: "Frameworks & Libraries",
        items: ["React", "React Native", "Redux Toolkit", "Tailwind CSS", "shadcn/ui"],
    },
    {
        title: "App Development",
        items: [
            "React Native",
            "Mobile UI/UX",
            "Play Store",
            "App Store",
            "API Integration",
            "Cross-platform Apps",
        ],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express", "REST", "JWT/Auth"],
    },
    {
        title: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
    },
    {
        title: "CMS & Platforms",
        items: ["WordPress", "Shopify", "Framer", "Webflow"],
    },
    {
        title: "DevOps & Tools",
        items: [
            "Turborepo",
            "pnpm",
            "GCP",
            "Vercel",
            "Git/GitHub",
            "Jest",
            "Claude Code",
            "Cursor",
            "Figma",
        ],
    },
    {
        title: "DevOps & Cloud",
        items: [
            "Docker",
            "CI/CD (GitHub Actions)",
            "AWS (EC2, S3, IAM)",
            "Linux",
            "Git",
            "Networking (DNS, Load Balancing)",
            "Kubernetes",
            "Jenkins",
        ],
    },
    {
        title: "Core Concepts",
        items: [
            "Data Structures & Algorithms",
            "DBMS",
            "OOP",
            "Problem Solving",
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Tech Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5">
                        Skills that{" "}
                        <span className="font-serif italic font-normal text-white">
                            power the work.
                        </span>
                    </h2>
                    <p className="text-muted-foreground">
                        Languages, frameworks, cloud, and tools I use to design, build, and ship products.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                    {skillGroups.map((group, idx) => (
                        <ScaleIn key={group.title} delay={(idx % 4) * 0.06 + Math.floor(idx / 4) * 0.08}>
                            <div className="glass rounded-2xl p-6 border border-border/70 hover:border-primary/40 hover:-translate-y-1.5 depth-shadow-hover h-full">
                                <h3 className="text-sm font-semibold tracking-wider uppercase text-primary mb-4">
                                    {group.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 rounded-full bg-surface text-xs text-muted-foreground border border-border/60 hover:border-primary/30 hover:text-foreground/90 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
