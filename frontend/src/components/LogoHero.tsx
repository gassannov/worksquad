import React from "react";
import logo from "../assets/logo.png";

export default function LogoHero() {
  return (
    <div className="hero hero--fullscreen">
      {/* The stage is a perfect circle that scales to the short side */}
      <div
        className="stage"
        style={{ backgroundImage: `url(${logo})` }}
      >
        {/* Ring overlay that hugs the circle edge */}
        <svg className="stage__ring" viewBox="0 0 100 100" aria-hidden="true">
          {/* progress ring (fills once) */}
          <circle cx="50" cy="50" r="49.5" className="ring-progress" pathLength={100} />
        </svg>
      </div>
    </div>
  );
}
