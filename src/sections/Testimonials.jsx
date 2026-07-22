import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../components/Depth3D";

const testimonials = [
    {
        quote:
            "Sumit built our e-commerce storefront end-to-end — fast pages, clean UX, and a setup our customers actually enjoy shopping on. Precision and follow-through were excellent.",
        author: "Yatin Vohara",
        role: "Founder, Colod.co",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20004225.png",
    },
    {
        quote:
            "He delivered our industrial company website from scratch — on time, polished, and easy for our team to update. Winner Weldingg’s online presence finally matches the brand.",
        author: "Deepak Lad",
        role: "Director, Winner Weldingg Co.",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20003200.png",
    },
    {
        quote:
            "Our dental clinic site looks professional, loads well on phones, and patients book via WhatsApp without friction. Online inquiries improved after launch.",
        author: "Dr. Nitin Jadhav",
        role: "Consultant, Shri Sai Dental Clinic",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20003516.png",
    },
    {
        quote:
            "Sumit redesigned our Skin Ayurveda site with clear services and booking CTAs. Patients navigate easily, and WhatsApp / Instagram actions work smoothly.",
        author: "Dr. Vaishali Sapat",
        role: "Consultant, Skin Ayurveda",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20003551.png",
    },
];

const cardVariants = {
    enter: (dir) => ({
        x: dir > 0 ? 56 : -56,
        rotateY: dir > 0 ? -12 : 12,
        opacity: 0,
        filter: "blur(4px)",
    }),
    center: {
        x: 0,
        rotateY: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 150, damping: 22 },
    },
    exit: (dir) => ({
        x: dir > 0 ? -40 : 40,
        rotateY: dir > 0 ? 10 : -10,
        opacity: 0,
        filter: "blur(3px)",
        transition: { duration: 0.28 },
    }),
};

const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [direction, setDirection] = useState(1);

    const goTo = (idx) => {
        setDirection(idx > activeIdx ? 1 : -1);
        setActiveIdx(idx);
    };

    const next = () => {
        setDirection(1);
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setDirection(-1);
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const t = testimonials[activeIdx];

    return (
        <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        What People Say
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-5">
                        Kind words from{" "}
                        <span className="font-serif italic font-normal text-white">
                            amazing people.
                        </span>
                    </h2>
                </Reveal>

                <div className="max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
                    <div className="relative min-h-[320px] sm:min-h-[280px]">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIdx}
                                custom={direction}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                style={{ transformStyle: "preserve-3d" }}
                                className="relative"
                            >
                                <div className="glass p-8 rounded-3xl md:p-12 glow-border depth-shadow">
                                    <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                                        <Quote className="w-6 h-6 text-primary-foreground" />
                                    </div>

                                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                        "{t.quote}"
                                    </blockquote>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={t.avatar}
                                            alt={t.author}
                                            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                        />
                                        <div>
                                            <div className="font-semibold">{t.author}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {t.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            onClick={previous}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((item, idx) => (
                                <button
                                    key={item.author}
                                    onClick={() => goTo(idx)}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === activeIdx
                                            ? "w-8 bg-primary"
                                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
