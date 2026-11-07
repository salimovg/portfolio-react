import Card from "../components/Card.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s, i) => (
          <Card key={s.title} num={String(i + 1).padStart(2, "0")} title={s.title} text={s.text} />
        ))}
      </div>
    </section>
  );
}
