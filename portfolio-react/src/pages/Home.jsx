import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <p className="hello">Salom, men</p>
      <h1>G'ayratbek</h1>
      <p className="role">Web developer  React o'rganuvchi</p>
      <p className="lead">
       Men chiroyli web saytlarni yaratishda yordam beraman va men hozirda reactni o'rganyapman.
      </p>
      <Link className="btn" to="/projects">
        Loyihalarimni ko'rish
      </Link>
    </section>
  );
}
