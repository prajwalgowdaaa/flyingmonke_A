import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run this effect on desktop devices
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        // Make visible after first move
        if (!isVisible) {
          setIsVisible(true);
        }
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    } else {
      // For mobile devices, don't show the cursor
      setIsVisible(false);
    }
  }, [isVisible]);

  // Don't render on mobile or if not visible
  if (!isVisible || !window.matchMedia("(pointer: fine)").matches) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <div 
        className="rounded-full bg-[#1E6FFF] opacity-60 w-[21px] h-[21px]"
      />
    </div>
  );
};

export default CursorFollower;
