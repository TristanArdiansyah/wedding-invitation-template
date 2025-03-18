import React, { useState, useEffect } from "react";

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);

  const checkScroll = () => {
    // Check if the user has scrolled more than the height of the viewport
    if (window.scrollY > window.innerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  if (!showButton) {
    return null;
  }

  return (
    <a
      className="btn btn-lg rounded-pill text-white"
      href="https://chat.ryanyasmin.biomadev.my.id/"
      style={{
        backgroundColor: '#65558F',
        position: "fixed",
        bottom: "5vh",
        right: "5vw",
        zIndex: 1000,
        fontSize: '1rem',
        paddingInline: 25,
        paddingBlock: 15,
        fontFamily: "'Comfortaa', sans-serif",
      }}
    >
      AI Chat 🧠
    </a>
  );
};

export default FloatingButton;
