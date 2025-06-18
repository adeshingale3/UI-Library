import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
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
    <div
      ref={cursorRef}
      className={`fixed w-5 h-5 border border-2 border-white rounded-full pointer-events-none z-50 mix-blend-difference cursor-none ${clicked ? 'bg-white' : ''}`}
      style={{ transform: "translate3d(0,0,0)", transition: "transform 0.1s ease-out" }}
    />
  );
}
