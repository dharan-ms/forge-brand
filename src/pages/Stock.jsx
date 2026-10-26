import { Link } from "react-router-dom";
import { buildImages, builds, media } from "../data.js";

const stock = [builds[0], builds[3], builds[5], builds[7]];

export default function Stock() {
  return (
    <main className="page">
      <header className="page-hero">
        <h1>Available Stock</h1>
        <p>Builds available for purchase, refined with intent, engineered with purpose, and ready to make a statement.</p>
      </header>
      <div className="grid">
        {stock.map(([code, name, copy], index) => (
          <Link className="card" to="/contact" key={code}>
            <img src={index === 0 ? media.stock : buildImages[(index + 3) % buildImages.length]} alt={name} />
            <span>#{code}</span>
            <strong>{name}</strong>
            <p>{copy}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
