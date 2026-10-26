import { useState } from "react";
import { email, phone, phoneHref } from "../data.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="page">
      <header className="page-hero">
        <h1>Start Your Project</h1>
        <p>Tell us the vehicle, the feeling you want from it, and how you want it to be read on the road.</p>
      </header>
      <div className="contact-grid">
        <div>
          <p className="kicker">Atelier</p>
          <p><a href={phoneHref}>{phone}</a></p>
          <p><a href={`mailto:${email}`}>{email}</a></p>
        </div>
        {sent ? (
          <p className="thanks">We’ll be in touch.</p>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Vehicle
              <input name="vehicle" placeholder="Defender, 911, G63…" />
            </label>
            <label>
              Project
              <textarea name="message" required />
            </label>
            <button className="cta" type="submit">Start Your Project</button>
          </form>
        )}
      </div>
    </main>
  );
}
