import React, { useEffect, useMemo, useRef, useState } from "react";
import img1 from "../../assets/ludka1.png";
import img2 from "../../assets/ludka2.png";
import img3 from "../../assets/ludka3.png";
import img4 from "../../assets/ludka4.png";

const SPIN_MS = 5000;     // total spin time (5s)
const TICK_MS = 120;      // how fast it cycles while spinning

export default function LudkaPage() {
  const images = useMemo(() => [img1, img2, img3, img4], []);
  const [index, setIndex] = useState(0);
  const [spinning, setSpinning] = useState(true);
  const timerRef = useRef<number | null>(null);
  const tickerRef = useRef<number | null>(null);

  useEffect(() => {
    // cycle through images quickly
    tickerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, TICK_MS);

    // after SPIN_MS, stop on a random image
    timerRef.current = window.setTimeout(() => {
      if (tickerRef.current) window.clearInterval(tickerRef.current);
      const finalIndex = Math.floor(Math.random() * images.length);
      setIndex(finalIndex);
      setSpinning(false);
    }, SPIN_MS);

    return () => {
      if (tickerRef.current) window.clearInterval(tickerRef.current);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [images.length]);

  return (
    <div className="ludka">
      {/* Only render the current image; others are not shown */}
      <img
        key={index}
        className={`ludka-img${spinning ? " ludka-img--spinning" : ""}`}
        src={images[index]}
        alt="ludka"
      />
    </div>
  );
}
