import React, { useState, useEffect, useRef } from 'react';

const HeroBanner = () => {
  const originalImages = ['/scroll-01.png', '/scroll-02.png'];
  // Clone the first image at the end for seamless looping
  const images = [...originalImages, originalImages[0]];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Handle the jump back to the start
  useEffect(() => {
    if (currentIndex === images.length - 1) {
      // Wait for the transition to finish (700ms matches duration-700)
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, images.length]);

  return (
    <section className="relative w-full bg-[#0d0d0d]">
      <div className="max-w-[850px] mx-auto px-6 py-8">
        <div className="relative rounded-[10px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={src}
                  alt={`Top Up Banner ${index + 1}`}
                  className="w-full h-auto block select-none"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Yellow diagonal accent strip like original */}
      <div className="relative h-3 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0d]" />
        <div
          className="absolute -right-10 top-0 h-3 w-[55%] bg-[#ffd54a]"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
