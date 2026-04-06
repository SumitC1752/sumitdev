import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        quote:
            "Sumit developed our e-commerce platform with exceptional precision. The site is fast, scalable, and visually engaging, helping us provide a great online shopping experience. His technical skills and dedication are unmatched.",
        author: "Yatin Vohara",
        role: "Founder, Colod.co",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20004225.png",
    },
    {
        quote:
            "Sumit developed our e-commerce platform from scratch, delivering a seamless, intuitive experience for our clients. His attention to detail and technical expertise ensured the project was completed on time and beyond our expectations. Highly recommended!",
        author: "Deepak Lad",
        role: "Director, Winner Weldingg Co.",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20003200.png",
    },
    {
        quote:
            "Sumit created a professional website for our clinic that perfectly reflects our services and vision. The website is user-friendly, responsive, and has significantly improved our online presence. Truly a pleasure to work with!",
        author: "Dr. Nitin Jadhav",
        role: "Consultant, [Shri Sai Dental Clinic]",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20003516.png",
    },
    {
        quote:
            "Our clinic’s website was transformed thanks to Sumit’s expertise. The design is modern, the functionality is smooth, and patients find it easy to navigate. His professionalism and creativity make him a top choice for web development.",
        author: "Dr. Vaishali Sapat",
        role: "Consultant, [Skin Ayurveda ]",
        avatar:
            "https://ik.imagekit.io/nvtgnuu6w/Screenshot%202026-04-06%20003551.png",
    },
];
const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };
    return (
        <div>
            <section id="testimonials" className="py-32 relative overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                />
                <div
                    className="container mx-auto 
      px-6 relative z-10"
                >
                    {/* Section Header */}
                    <div
                        className="text-center max-w-3xl 
        mx-auto mb-16"
                    >
                        <span
                            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
                        >
                            What People Say
                        </span>
                        <h2
                            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
                        >
                            Kind words from{" "}
                            <span
                                className="font-serif italic 
            font-normal text-white"
                            >
                                amazing people.
                            </span>
                        </h2>
                    </div>

                    {/* Testimonial Carousel */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Main Testimonial */}
                            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                    <Quote className="w-6 h-6 text-primary-foreground" />
                                </div>

                                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                                    "{testimonials[activeIdx].quote}"
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[activeIdx].avatar}
                                        alt={testimonials[activeIdx].author}
                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                    />
                                    <div>
                                        <div className="font-semibold">
                                            {testimonials[activeIdx].author}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonials[activeIdx].role}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials Navigation */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <button
                                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                    onClick={previous}
                                >
                                    <ChevronLeft />
                                </button>

                                <div className="flex gap-2">
                                    {testimonials.map((_, idx) => (
                                        <button
                                            onClick={() => setActiveIdx(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                                                ? "w-8 bg-primary"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={next}
                                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
