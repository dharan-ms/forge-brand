import { Link } from "react-router-dom";
import { useMenu } from "../menu.jsx";

const links = [
  ["Home", "/"],
  ["Builds", "/builds"],
  ["Stock", "/stock"],
  ["Contact", "/contact"],
];

export default function Menu() {
  const { open, close } = useMenu();

  return (
    <div id="site-menu" className={open ? "menu open" : "menu"} aria-hidden={!open} inert={!open}>
      <nav aria-label="Menu">
        {links.map(([label, to], index) => (
          <Link key={to} to={to} onClick={close}>
            <em>0{index + 1}</em>
            {label}
          </Link>
        ))}
      </nav>
      <div className="menu-foot">
        <Link to="/cookies" onClick={close}>Cookies</Link>
        <Link to="/privacy" onClick={close}>Privacy</Link>
        <Link to="/terms" onClick={close}>Terms</Link>
        <Link to="/sitemap" onClick={close}>Sitemap</Link>
      </div>
    </div>
  );
}
