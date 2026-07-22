import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
    MessageCircle,
} from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
import { Reveal, SlideIn } from "../components/Depth3D";

const CONTACT_EMAIL = "anarasesumit2@gmail.com";
const WHATSAPP_NUMBER = "919209214599";
// FormSubmit — already delivered to your Gmail before (ignore Devro footer ad in their email)
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const inputClass =
    "w-full px-4 py-3 bg-surface/90 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/25 outline-none transition-all placeholder:text-muted-foreground/50";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91-9209214599",
        href: "tel:+91-9209214599",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Pune - Maharashtra, India",
        href: "#",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const update = (field) => (e) =>
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });

        const name = formData.name.trim();
        const email = formData.email.trim();
        const phone = formData.phone.trim();
        const message = formData.message.trim();

        try {
            const body = new FormData();
            body.append("name", name);
            body.append("email", email);
            body.append("phone", phone);
            body.append("message", message);
            body.append("_subject", `sumitbuilds.in — message from ${name}`);
            body.append("_replyto", email);
            body.append("_template", "table");
            body.append("_captcha", "false");
            // Honeypot (must stay empty)
            body.append("_honey", "");

            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body,
                headers: { Accept: "application/json" },
            });

            const data = await res.json().catch(() => ({}));
            const ok =
                res.ok &&
                (data.success === true ||
                    data.success === "true" ||
                    String(data.message || "")
                        .toLowerCase()
                        .includes("submitted successfully"));

            if (!ok) {
                throw new Error(
                    data.message ||
                        "Submit failed. Please try WhatsApp or email directly."
                );
            }

            setSubmitStatus({
                type: "success",
                message: "Message sent! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            console.error("Contact form error:", err);
            setSubmitStatus({
                type: "error",
                message:
                    err.message ||
                    `Could not send. Use WhatsApp or email ${CONTACT_EMAIL}.`,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const whatsappHref = (() => {
        const text = encodeURIComponent(
            `Hi Sumit, I'm ${formData.name || "…"}.\nEmail: ${formData.email || "…"}\nPhone: ${formData.phone || "…"}\n\n${formData.message || ""}`
        );
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    })();

    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Reveal className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                        Let's build{" "}
                        <span className="font-serif italic font-normal text-white">
                            something great.
                        </span>
                    </h2>
                    <p className="text-muted-foreground">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
                    <SlideIn from="left">
                        <div className="glass p-8 rounded-3xl border border-primary/35 glow-border depth-shadow">
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Your name..."
                                        value={formData.name}
                                        onChange={update("name")}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={update("email")}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone / WhatsApp
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={update("phone")}
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={update("message")}
                                        placeholder="Your message..."
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                <Button
                                    className="w-full"
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>Sending...</>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>

                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-primary/40 hover:bg-primary/10 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                    Or chat on WhatsApp
                                </a>

                                {submitStatus.type && (
                                    <div className="space-y-3">
                                        <div
                                            className={`flex items-center gap-3 p-4 rounded-xl ${
                                                submitStatus.type === "success"
                                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                            }`}
                                        >
                                            {submitStatus.type === "success" ? (
                                                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            )}
                                            <p className="text-sm">{submitStatus.message}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <a
                                                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project inquiry from sumitbuilds.in")}`}
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium glass border border-border/60 hover:border-primary/40 transition-colors"
                                            >
                                                <Mail className="w-3.5 h-3.5 text-primary" />
                                                Email directly
                                            </a>
                                            <a
                                                href={whatsappHref}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium glass border border-border/60 hover:border-primary/40 transition-colors"
                                            >
                                                <MessageCircle className="w-3.5 h-3.5 text-primary" />
                                                WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </SlideIn>

                    <div className="space-y-6">
                        <SlideIn from="right" delay={0.08}>
                            <div className="glass rounded-3xl p-8 border border-border/60 depth-shadow-hover">
                                <h3 className="text-xl font-semibold mb-6">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    {contactInfo.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <item.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground">
                                                    {item.label}
                                                </div>
                                                <div className="font-medium">{item.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </SlideIn>

                        <SlideIn from="up" delay={0.16}>
                            <div className="glass rounded-3xl p-8 border border-primary/35 glow-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/40" />
                                    <span className="font-medium">Currently Available</span>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    I'm currently open to new opportunities and exciting projects.
                                    Whether you need a full-time engineer or a freelance consultant,
                                    let's talk!
                                </p>
                            </div>
                        </SlideIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
