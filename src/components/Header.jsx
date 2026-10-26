import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useMenu } from "../menu.jsx";

export default function Header() {
  const { open, toggle } = useMenu();

  return (
    <header className="site-header">
      <span />
      <Link to="/" className="brand" aria-label="Forge home" onClick={() => open && toggle()}>
        <Logo />
      </Link>

      <button className="navigate" type="button" aria-expanded={open} aria-controls="site-menu" onClick={toggle}>
        <span>{open ? "Close" : "Navigate"}</span>
        <MenuIcon open={open} />
      </button>
    </header>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true" className={open ? "is-open" : ""}>
      <path d="M0 1h18M0 11h18" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
