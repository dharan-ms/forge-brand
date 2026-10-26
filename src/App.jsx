import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import { MenuProvider } from "./menu.jsx";
import Home from "./pages/Home.jsx";
import Builds from "./pages/Builds.jsx";
import Stock from "./pages/Stock.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      syncTouch: false,
    });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    window.__forgeLenis = lenis;

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      window.__forgeLenis = null;
    };
  }, []);

  useEffect(() => {
    window.__forgeLenis?.scrollTo(0, { immediate: true });
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <MenuProvider>
      <SmoothScroll />
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cookies" element={<Legal kind="cookies" />} />
        <Route path="/privacy" element={<Legal kind="privacy" />} />
        <Route path="/terms" element={<Legal kind="terms" />} />
        <Route path="/sitemap" element={<Legal kind="sitemap" />} />
      </Routes>
    </MenuProvider>
  );
}
