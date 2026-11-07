import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/posts", label: "Posts" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <nav className="container">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
