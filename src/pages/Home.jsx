import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cta from "../components/Cta.jsx";
import { floats, logos, media, pillars, services } from "../data.js";

export default function Home() {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const hero = root.current.querySelector(".hero");
      const headline = hero.querySelector(".hero-copy");
      const sub = hero.querySelector(".hero-sub");
      const cluster = hero.querySelector(".hero-cars");
      const left = hero.querySelector(".car-left");
      const right = hero.querySelector(".car-right");

      gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
        },
      })
        .to(headline, { opacity: 0, y: -50, filter: "blur(10px)", ease: "none" }, 0)
        .fromTo(sub, { opacity: 1, x: 0, xPercent: 0, y: 0 }, { opacity: 0, x: 0, xPercent: 0, y: 20, ease: "none" }, 0)
        .to(cluster, { scale: 2.15, y: 80, ease: "none" }, 0)
        .to(left, { xPercent: -55, ease: "none" }, 0)
        .to(right, { xPercent: 55, ease: "none" }, 0);

      gsap.to(".float-shot", {
        x: (index) => (index % 2 === 0 ? 180 : -200),
        y: (index) => (index % 3 === 0 ? -90 : 70),
        ease: "none",
        scrollTrigger: {
          trigger: ".manifesto",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      const track = root.current.querySelector(".pillar-track");
      const desktop = window.matchMedia("(min-width: 720px)").matches;
      if (desktop && track) {
        gsap.to(track, {
          xPercent: -66.666,
          ease: "none",
          scrollTrigger: {
            trigger: ".pillars",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 0.7,
            anticipatePin: 1,
          },
        });
      }

      const ends = root.current.querySelector(".ends");
      gsap.timeline({
        scrollTrigger: {
          trigger: ends,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      })
        .fromTo(".ordinary", { y: 40, opacity: 1 }, { y: -220, opacity: 0, ease: "none" }, 0)
        .fromTo(".ends-car", { yPercent: 70, scale: 1.05 }, { yPercent: -8, scale: 1.2, ease: "none" }, 0)
        .fromTo(".ends-copy", { y: 80, opacity: 0 }, { y: 0, opacity: 1, ease: "none" }, 0.35);
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root}>
      <section className="hero" aria-label="For Those Who Refuse Ordinary">
        <video
          className="hero-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-copy">
          <h1>
            For Those Who
            <br />
            Refuse Ordinary
          </h1>
        </div>
        <div className="hero-cars">
          <img className="car-left" src={media.gwagen} alt="Mercedes G-Wagen" />
          <img className="car-center" src={media.porsche} alt="Porsche 911 GT3 RS" />
          <img className="car-right" src={media.defender} alt="Land Rover Defender 110" />
        </div>
        <p className="hero-sub">
          A luxury automotive atelier for bespoke styling, performance and craftsmanship.
        </p>
      </section>

      <section className="manifesto">
        {floats.map((shot) => (
          <img
            key={shot.alt}
            className="float-shot"
            src={shot.src}
            alt={shot.alt}
            style={{ top: shot.top, left: shot.left, width: shot.w }}
          />
        ))}
        <h2>
          We Don’t Modify Vehicles
          <br />
          We Build Them For You
        </h2>
      </section>

      <section className="approach">
        <img src={media.stitch} alt="Hands stitching red thread into leather" />
        <div className="approach-shade" />
        <h2>
          Our Approach
          <br />
          To Every Build
        </h2>
        <div className="approach-bottom">
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...logos, ...logos].map((logo, index) => (
                <img key={`${logo.name}-${index}`} src={logo.src} alt="" />
              ))}
            </div>
          </div>
          <div className="approach-copy">
            <p>
              Every decision is intentional, every detail has purpose based on your taste, your lifestyle, and your standards.
            </p>
            <Cta>Start Your Project</Cta>
          </div>
        </div>
      </section>

      <section className="pillars" aria-label="Our approach">
        <div className="pillar-track">
          {pillars.map((pillar) => (
            <article className="pillar" key={pillar.title}>
              <img className="pillar-bg" src={pillar.image} alt="" />
              <div className="pillar-shade" />
              <div className="pillar-layout">
                <img className="pillar-shot" src={pillar.image} alt={pillar.alt} />
                <div>
                  <p className="kicker">{pillar.index}</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                  <Cta>Start Your Project</Cta>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <img className="statement-a" src={media.wheel} alt="" />
        <img className="statement-b" src={media.closeup} alt="" />
        <div className="statement-copy">
          <h2>
            A vehicle should say something before it moves.
            <span> Every line, material, and finish is considered.</span>
          </h2>
          <p>
            Our services are shaped with intent, from exterior styling and interior refinement to performance upgrades, detailing and bespoke finishes; each detail sharpens the vehicle’s character without overpowering it.
          </p>
          <Cta>Start Your Project</Cta>
        </div>
      </section>

      <section className="services" aria-label="Services">
        {services.map((service) => (
          <article className="service" key={service.title}>
            <div className="service-copy">
              <p className="kicker">Service</p>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Cta>Start Your Project</Cta>
            </div>
            <div className="service-media">
              <img src={service.image} alt={service.alt} />
            </div>
          </article>
        ))}
      </section>

      <section className="ends">
        <h2 className="ordinary">Ordinary</h2>
        <img className="ends-car" src={media.porsche} alt="" />
        <div className="ends-glow" style={{ backgroundImage: `url(${media.headlight})` }} />
        <div className="ends-copy">
          <h2>Ends Here</h2>
          <p>
            Complete expressions of taste, intent and individuality, shaped through detail, restraint and presence.
          </p>
        </div>
      </section>

      <section className="showcase previous">
        <img src={media.previous} alt="Previous Forge builds" />
        <div className="showcase-copy">
          <h2>Previous Builds</h2>
          <p>A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.</p>
          <Cta to="/builds">Explore Builds</Cta>
        </div>
      </section>

      <section className="showcase stock">
        <img src={media.stock} alt="Available Forge stock" />
        <div className="showcase-copy">
          <h2>Available Stock</h2>
          <p>Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.</p>
          <Cta to="/stock">Browse Stock</Cta>
        </div>
      </section>

      <Finale />

      <footer className="site-nav">
        <nav aria-label="Site">
          <a href="/">Home</a>
          <a href="/builds">Builds</a>
          <a href="/stock">Stock</a>
          <a href="/contact">Contact</a>
          <a href="/cookies">Cookies</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/sitemap">Sitemap</a>
        </nav>
      </footer>
    </main>
  );
}

function Finale() {
  const ref = useRef(null);

  const onMove = (event) => {
    const bounds = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${event.clientX - bounds.left}px`);
    ref.current.style.setProperty("--y", `${event.clientY - bounds.top}px`);
  };

  return (
    <section
      className="finale"
      ref={ref}
      onMouseMove={onMove}
      style={{ "--x": "50%", "--y": "62%" }}
    >
      <div className="finale-photo" style={{ backgroundImage: `url(${media.finale})` }} />
      <div className="finale-lit" style={{ backgroundImage: `url(${media.finale})` }} />
      <div className="finale-copy">
        <p className="kicker">Are you ready to</p>
        <h2>
          Refuse
          <br />
          Ordinary
        </h2>
        <Cta>Start Your Project</Cta>
        <button
          type="button"
          className="to-top"
          onClick={() => window.__forgeLenis?.scrollTo(0) || window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </div>
    </section>
  );
}
