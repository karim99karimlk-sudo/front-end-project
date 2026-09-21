import { useState, useEffect } from 'react';
import './Hero.css'
// Import local images if stored in src directory
import staffImg from '../pages/USMO IMG/staff.jpg';
import casaImg from '../pages/USMO IMG/usmo-casa.jpg';

const images = [staffImg, casaImg];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setIsFadingOut(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Trigger fade in
        setIsFadingOut(false);
      }, 800); // Matches the CSS transition duration (0.8s)
    }, 10000); // 10 seconds per slide

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img
        id="hero-img"
        className={`hero-img ${isFadingOut ? 'fade-out' : ''}`}
        src={images[currentIndex]}
        alt="USMO Hero"
      />
      <div className="title">الإتحاد الرياضي الإسلامي الوجدي</div>
      <i
        className="fa-solid fa-angles-down fa-fade"
        style={{
          color: 'rgb(0, 0, 0)',
          zIndex: 3,
          position: 'absolute',
          textAlign: 'center',
          bottom: '10px',
          fontSize: '1.8rem',
        }}
      ></i>
    </div>
  );
}