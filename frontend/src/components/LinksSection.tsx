import React from "react";
import FitTextRow from "./FitTextRow";

const links = [
  { text: "vanyok", href: "#" },
  { text: "shtibekov", href: "#" },
  { text: "tima", href: "#" },
  { text: "qruto", href: "#" },
  { text: "maratik", href: "ludka" },
  { text: "misha", href: "#" },
];

export default function LinksSection() {
  return (
    <div className="links-section">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="link-row">
          {/* <span className="link-text">{link.text}</span> */}
          <FitTextRow text={link.text} />
        </a>
      ))}
    </div>
  );
}