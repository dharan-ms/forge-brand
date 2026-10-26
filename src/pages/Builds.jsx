import { Link } from "react-router-dom";
import { buildImages, builds } from "../data.js";

export default function Builds() {
  return (
    <main className="page">
      <header className="page-hero">
        <h1>Previous Builds</h1>
        <p>A collection of previous bespoke builds, shaped by craft, character and the people behind the wheel.</p>
      </header>
      <div className="grid">
        {builds.map(([code, name, copy], index) => (
          <Link className="card" to="/contact" key={code}>
            <img src={buildImages[index % buildImages.length]} alt={name} />
            <span>#{code}</span>
            <strong>{name}</strong>
            <p>{copy}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
