import React from "react";

const experience = {
    period: "2024 — Present",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
        "Delivered custom web solutions for small businesses and startups. Built 5+ websites and applications, handling everything from design to deployment.",
    technologies: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "PHP",
        "MongoDB",
        "MySQL",
        "Redux",
        "Jest",
        "WordPress",
        "Shopify",
        "Framer",
        "Webflow",
        "Git",
        "GitHub",
        "Cursor",
        "Claude",
        "GitHub Copilot",
        "Data Structures & Algorithms",
        "DBMS",
        "OOP",
    ],
};

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">

            {/* SAME BACKGROUND */}
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Career Journey
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            speaks volumes.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Focused on building scalable products, delivering performance-driven
                        solutions, and continuously learning new technologies.
                    </p>
                </div>

                {/* SINGLE CARD */}
                <div className="max-w-4xl mx-auto animate-fade-in animation-delay-300">
                    <div className="glass p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

                        <span className="text-sm text-primary font-medium">
                            {experience.period}
                        </span>

                        <h3 className="text-2xl font-semibold mt-2">
                            {experience.role}
                        </h3>

                        <p className="text-muted-foreground">
                            {experience.company}
                        </p>

                        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                            {experience.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {experience.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground hover:bg-primary/10 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;