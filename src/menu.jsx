import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext(null);

export function MenuProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const lenis = window.__forgeLenis;
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <MenuContext.Provider value={{ open, setOpen, toggle: () => setOpen((v) => !v), close: () => setOpen(false) }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
