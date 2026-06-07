import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      if (dot.current) {
        dot.current.style.transform = `
          translate(${x}px, ${y}px)
          translate(-50%, -50%)
        `;
      }
    };

    const animate = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;

      if (ring.current) {
        ring.current.style.transform = `
          translate(${rx}px, ${ry}px)
          translate(-50%, -50%)
        `;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, [data-magnetic], input, textarea, select, [role='button']"
        )
      ) {
        ring.current?.classList.add("is-hover");
      }
    };

    const handleLeave = () => {
      ring.current?.classList.remove("is-hover");
    };

    const hideCursor = () => {
      ring.current?.classList.add("opacity-0");
      dot.current?.classList.add("opacity-0");
    };

    const showCursor = () => {
      ring.current?.classList.remove("opacity-0");
      dot.current?.classList.remove("opacity-0");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseout", handleLeave);

    window.addEventListener("blur", hideCursor);
    window.addEventListener("focus", showCursor);

    return () => {
      cancelAnimationFrame(raf);

      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseout", handleLeave);

      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("focus", showCursor);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
};

export default CustomCursor;