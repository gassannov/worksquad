import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  variant: "black" | "white";
  id?: string;
  className?: string;
}>;

export default function FullScreenSection({ variant, id, className, children }: Props) {
  const colorClass = variant === "black" ? "section--black" : "section--white";
  return (
    <section id={id} className={`section ${colorClass}${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
}
