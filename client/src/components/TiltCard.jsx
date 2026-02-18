import { useRef } from "react";

function TiltCard({ children, className = "" }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (!ref.current || window.matchMedia("(hover: none)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1050px) rotateX(${-(y * 9)}deg) rotateY(${x * 9}deg) translateY(-4px)`;
    ref.current.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    ref.current.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1050px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`group relative overflow-hidden transition-transform duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.3), transparent 42%)",
        }}
      />
      {children}
    </div>
  );
}

export default TiltCard;
