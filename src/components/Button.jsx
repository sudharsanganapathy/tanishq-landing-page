import { ArrowRight } from "lucide-react";

export default function Button({
  children = "Explore Collection",
  light = false,
}) {
  return (
    <a
      className={`cta ${light ? "cta-light" : ""}`}
      href="#collection"
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}