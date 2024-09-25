import React, { useState, useEffect } from 'react';

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <h1 className="time">{currentTime}</h1>
    </header>
  );
}

export default Header;
