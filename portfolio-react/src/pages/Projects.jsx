import Card from "../components/Card.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <Card key={p.title} num={String(i + 1).padStart(2, "0")} title={p.title} text={p.text} />
        ))}
      </div>
    </section>
  );
}
