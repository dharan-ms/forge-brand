import { Link } from "react-router-dom";

const copy = {
  cookies: {
    title: "Cookies",
    body: "This site uses essential cookies to remember how the page is presented. Analytics cookies are only used to understand which builds people spend time with. You can refuse non-essential cookies in your browser.",
  },
  privacy: {
    title: "Privacy",
    body: "Enquiries sent through Start Your Project are used only to reply about a bespoke build. We do not sell personal details. To ask for a copy or deletion of an enquiry, email studio@example.com.",
  },
  terms: {
    title: "Terms",
    body: "Vehicle descriptions, photography and specifications are for presentation. A build is confirmed only in writing after consultation. Availability of stock changes as vehicles are commissioned.",
  },
  sitemap: {
    title: "Sitemap",
    body: null,
  },
};

const links = [
  ["Home", "/"],
  ["Builds", "/builds"],
  ["Stock", "/stock"],
  ["Contact", "/contact"],
  ["Cookies", "/cookies"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
];

export default function Legal({ kind }) {
  const page = copy[kind];
  return (
    <main className="page">
      <header className="page-hero">
        <h1>{page.title}</h1>
      </header>
      <div className="legal-copy">
        {page.body ? <p>{page.body}</p> : (
          <ul>
            {links.map(([label, to]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
