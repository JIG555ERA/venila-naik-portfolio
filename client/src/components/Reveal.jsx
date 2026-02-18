import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    const childrenToAnimate = Array.from(ref.current.children).filter((node) => node.nodeType === 1);
    const targets = childrenToAnimate.length > 1 ? childrenToAnimate : ref.current;

    gsap.fromTo(
      targets,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        stagger: childrenToAnimate.length > 1 ? 0.11 : 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 84%",
          once: true,
        },
      },
    );
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default Reveal;
