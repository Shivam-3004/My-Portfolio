import { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12 + 5;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setHidden(true);
            document.body.style.overflow = "";
          }, 500);

          return 100;
        }

        return next;
      });
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground">
        SHIVAM
        <span className="text-primary">.</span>
      </h1>

      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Software Developer
      </p>

      {/* Progress */}
      <div className="w-64 md:w-80 mt-10">
        <div className="h-[2px] bg-border overflow-hidden rounded-full">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 18px hsl(var(--primary) / 0.8)",
            }}
          />
        </div>

        <div className="mt-4 flex justify-between font-mono text-xs text-muted-foreground">
          <span>LOADING</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
