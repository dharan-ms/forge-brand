import { Link } from "react-router-dom";

export default function Cta({ to = "/contact", children, className = "cta" }) {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}
