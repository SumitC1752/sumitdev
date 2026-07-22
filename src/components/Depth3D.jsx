import { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    useScroll,
    useInView,
} from "framer-motion";

/** Mouse tilt — use sparingly (project media / hero only) */
export function Tilt3D({
    children,
    className = "",
    maxX = 8,
    maxY = 10,
    perspective = 1000,
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 160, damping: 18 });
    const springY = useSpring(y, { stiffness: 160, damping: 18 });
    const rotateX = useTransform(springY, [-0.5, 0.5], [maxX, -maxX]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-maxY, maxY]);

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
            style={{
                rotateX,
                rotateY,
                transformPerspective: perspective,
                transformStyle: "preserve-3d",
            }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
}

/** Clean modern reveal — blur + rise (NOT 3D tilt) */
export function Reveal({
    children,
    className = "",
    delay = 0,
    y = 28,
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y, filter: "blur(10px)" }}
            animate={
                inView
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y, filter: "blur(10px)" }
            }
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Clip-path wipe — modern editorial feel */
export function ClipReveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-12% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ clipPath: "inset(12% 12% 12% 12% round 24px)", opacity: 0.4, scale: 0.96 }}
            animate={
                inView
                    ? { clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1, scale: 1 }
                    : undefined
            }
            transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Side door — projects only */
export function ScrollDoor({ children, className = "", from = "left" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    const xFrom = from === "left" ? -32 : 32;
    const rotFrom = from === "left" ? 5 : -5;

    const x = useSpring(useTransform(scrollYProgress, [0, 1], [xFrom, 0]), {
        stiffness: 90,
        damping: 20,
    });
    const rotateY = useSpring(
        useTransform(scrollYProgress, [0, 1], [rotFrom, 0]),
        { stiffness: 90, damping: 20 }
    );
    const opacity = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                x,
                rotateY,
                opacity,
                transformPerspective: 1400,
                transformStyle: "preserve-3d",
            }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
}

/** Horizontal slide-in (contact / text panels) */
export function SlideIn({ children, className = "", from = "left", delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-8% 0px" });
    const x = from === "left" ? -48 : from === "right" ? 48 : 0;
    const y = from === "up" ? 40 : 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x, y }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Scale pop for skill chips */
export function ScaleIn({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-5% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.82, y: 16 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : undefined}
            transition={{
                type: "spring",
                stiffness: 160,
                damping: 16,
                delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
