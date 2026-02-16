import { useEffect } from "react";

export default function WaterCursor() {
  useEffect(() => {
    const createDrop = (x, y) => {
      const drop = document.createElement("div");
      drop.className = "water-drop";
      drop.style.left = x + "px";
      drop.style.top = y + "px";
      document.body.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, 800);
    };

    const move = (e) => {
      createDrop(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return null;
}
