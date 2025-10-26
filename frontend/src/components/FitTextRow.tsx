// src/components/FitTextRow.tsx
import React, { useLayoutEffect, useRef, useState } from "react";

type Props = { text: string };

export default function FitTextRow({ text }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const resize = () => {
      const wrap = wrapRef.current;
      const span = textRef.current;
      if (!wrap || !span) return;

      // reset scale to measure natural width
      span.style.transform = "scaleX(1)";
      const available = wrap.clientWidth;
      const natural = span.scrollWidth;
      const s = natural ? available / natural : 1;
      setScale(s);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={wrapRef} className="fittext-wrap">
      <span
        ref={textRef}
        className="fittext-text"
        style={{ transform: `scaleX(${scale})` }}
      >
        {text}
      </span>
    </div>
  );
}
