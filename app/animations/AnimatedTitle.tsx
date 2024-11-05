import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type AnimatedTitleProps = {
    text: string;
    className: string;
    wordSpace: string;
    charSpace: string;
    delay?: number;
}

export default function AnimatedTitle({
    text,
    className,
    wordSpace,
    charSpace,
    delay = 0, // Setting a default value for delay
}: AnimatedTitleProps) {

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        } else {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: "0.25em",
        },
        visible: {
            opacity: 1,
            y: "0em",
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <h2 aria-label={text} role="heading" className={className}>
            {text.split(" ").map((word, wordIndex) => (
                <motion.span
                    ref={ref}
                    aria-hidden="true"
                    key={wordIndex}
                    initial="hidden"
                    animate={ctrls}
                    variants={wordAnimation}
                    transition={{
                        delayChildren: wordIndex * 0.25 + delay, // Adjusted for delay prop
                        staggerChildren: 0.05,
                    }}
                    className={`inline-block whitespace-nowrap ${wordSpace}`}
                >
                    {word.split("").map((character, charIndex) => (
                        <motion.span
                            aria-hidden="true"
                            key={`${wordIndex}-${charIndex}`} // Ensuring unique keys
                            variants={characterAnimation}
                            className={`inline-block ${charSpace}`}
                        >
                            {character}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </h2>
    );
}