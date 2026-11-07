import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>404 — Sahifa topilmadi</h2>
      <Link className="btn" to="/">Bosh sahifaga qaytish</Link>
    </section>
  );
}
