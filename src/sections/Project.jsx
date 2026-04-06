import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
        title: "Customized Virtual File System (CVFS)",
        description:
            "Developed a Linux-like Virtual File System using C with a custom shell interface. Implemented core components such as Inode, In- Core Inode Table, File Table, and UFDT.Simulated essential file operations including create, read, write, and delete.Designed a command - line shell for interaction, replicating key file system functionalities in a platform - independent environment while strengthening understanding of operating systems and memory management..",
        image: "/projects/project1.png",
        tags: ["C", "C++", "Linux", "Operating Systems", "Data Structures"],
        link: "#",
        github: "https://github.com/SumitC1752",
    },
    {
        title: "E-Commerce Platform",
        description:
            "Developed a fully functional e-commerce platform for Winner Welding Co., enabling seamless online sales of industrial welding machines. Implemented user-friendly navigation, secure payment integration, and responsive design, helping the company expand its digital presence and reach a wider customer base.",
        image: "/projects/project2.png",
        tags: [" "],
        link: "https://winnerweldingg.in/",
        github: "https://github.com/SumitC1752",
    },
    {
        title: "Clinic Website",
        description:
            "Designed and developed a professional website for Dr. Nitin Jadhav’s clinic, showcasing services, doctor profiles, and appointment booking functionality. Focused on intuitive navigation, responsive design, and improved online visibility to enhance patient engagement.",
        image: "/projects/project3.png",
        tags: [""],
        link: "https://www.drnitinsapat.in/",
        github: "https://github.com/SumitC1752",
    },
    {
        title: "Clinic Website",
        description:
            "Created a modern, responsive website for Dr. Vaishali Sapat’s clinic, highlighting treatments, services, and patient resources. Developed a clean UI/UX, easy appointment scheduling, and optimized performance for mobile and desktop, enhancing patient experience and online presence",
        image: "/projects/project4.png",
        tags: [""],
        link: "https://www.drvaishalisapat.in/",
        github: "https://github.com/SumitC1752",
    },
];

const Project = () => {
    return (
        <section id="project" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                                {/* Overlay Buttons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                    {/* Live Link */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                                    >
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>

                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};

export default Project;