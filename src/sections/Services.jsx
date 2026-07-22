import { Globe, Smartphone, LayoutTemplate } from "lucide-react";
import { Reveal, ScaleIn } from "../components/Depth3D";

const BOOK_CALL_URL =
    "https://wa.me/919209214599?text=" +
    encodeURIComponent(
        "Hi Sumit, I'd like to book a free 15-min call about a project."
    );

const services = [
    {
        icon: Globe,
        title: "Business websites",
        blurb: "Clinic, brand & corporate sites that load fast and convert visitors into leads.",
        from: "From ₹15,000",
    },
    {
        icon: Smartphone,
        title: "Mobile apps",
        blurb: "React Native apps shipped to Play Store & App Store with real booking flows.",
        from: "From ₹40,000",
    },
    {
        icon: LayoutTemplate,
        title: "Landing & SaaS UI",
        blurb: "High-converting landings and product UI for startups — React, Next.js, Tailwind.",
        from: "From ₹12,000",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-5 sm:px-6 relative z-10 max-w-6xl">
                <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                        How we can{" "}
                        <span className="font-serif italic font-normal text-white">work together.</span>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        Clear offerings for clinics, brands, and startups — scoped, built, and shipped.
                    </p>
                </Reveal>

                <div className="grid sm:grid-cols-3 gap-5 mb-10">
                    {services.map((s, i) => (
                        <ScaleIn key={s.title} delay={i * 0.08}>
                            <div className="glass rounded-2xl p-6 border border-border/70 hover:border-primary/40 depth-shadow-hover h-full flex flex-col">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    <s.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {s.blurb}
                                </p>
                                <p className="text-sm font-medium text-primary mt-5">{s.from}</p>
                            </div>
                        </ScaleIn>
                    ))}
                </div>

                <Reveal className="flex justify-center">
                    <a
                        href={BOOK_CALL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all"
                    >
                        Book a free 15-min call
                    </a>
                </Reveal>
            </div>
        </section>
    );
};

export default Services;
