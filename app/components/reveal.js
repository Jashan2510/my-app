
import React, { useEffect, useRef } from "react"; 
import { motion, useInView, useAnimation, useIsPresent } from "framer-motion";

export const Reveal = ({ children, width = "fit-content", height = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, height, overflow: "hidden", padding: 6 }}> 
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{ position: "absolute", top: 4, bottom: 4, right: 0, zIndex: 20, left: 0, width: "100%", height: "100%", backgroundColor: "#F97316" }} // Ensured the color is #F97316
            />
        </div>
    );
};
