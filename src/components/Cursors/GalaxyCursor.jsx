import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
const GalaxyCursor = () => {
    const cursorRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        const handleClick = () => {
            setClicked(true);
            setTimeout(() => setClicked(false), 300); // show for 300ms
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        const updateCursor = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
            }
            requestAnimationFrame(updateCursor);
        };

        updateCursor();
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div className='flex items-center justify-center fixed z-10 w-4 h-4 rounded-full z-2 bg-orange-600' ref={cursorRef} style={{ transform: "translate3d(0,0,0)", transition: "transform 0.1s ease-out" }}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 400,
                mass: 0.5,
            }}>
            <div
                ref={cursorRef}
                className={`fixed z-9 w-7 h-7 border border-2 border-orange-600 rounded-full cursor-none ${clicked ? 'scale-150 transition duration-300 ease-in-out delay-700' : 'scale-100'}`}
                style={{ transform: "translate3d(0,0,0)", transition: "transform 0.1s ease-out" }}
            />
            <div
                ref={cursorRef}
                className={`fixed z-1 w-10 h-10 bg-orange-600 blur-xl rounded-full cursor-none `}
                style={{ transform: "translate3d(0,0,0)", transition: "transform 0.1s ease-out" }}
            />


        </motion.div>
    );
}

export default GalaxyCursor;