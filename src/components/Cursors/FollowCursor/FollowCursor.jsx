import React, { useEffect, useRef, useState } from 'react';

const FollowCursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.pageX;
    mouse.current.y = e.pageY;
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    document.body.style.cursor = 'none'; // hide default cursor
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const updateCursor = () => {
      // Set exact position
      pos.current.x = mouse.current.x;
      pos.current.y = mouse.current.y;

      const size = 20; // cursor size in px (w-5 h-5)
      const offsetX = size / 2;
      const offsetY = size / 2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x - offsetX}px, ${pos.current.y - offsetY}px, 0)`;
      }

      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.body.style.cursor = 'none';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-5 h-5 border-2 border-white rounded-full pointer-events-none z-[999] mix-blend-difference transition-transform duration-100 ease-out ${
        clicked ? 'bg-white' : ''
      }`}
    />
  );
};

export default FollowCursor;
