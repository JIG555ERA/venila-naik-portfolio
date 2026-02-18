import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    return () => mediaQuery.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    const cursor = cursorRef.current;
    document.body.classList.add("custom-cursor-on");

    const handleMove = (event) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const handleHover = (event) => {
      const interactive = event.target.closest(
        "a,button,input,textarea,select,label,[role='button'],.cursor-target",
      );
      cursor.classList.toggle("is-active", Boolean(interactive));
    };

    const handleDown = () => cursor.classList.add("is-down");
    const handleUp = () => cursor.classList.remove("is-down");

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);

    return () => {
      document.body.classList.remove("custom-cursor-on");
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <svg className="custom-cursor__arrow" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M9 7H17V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default CustomCursor;
