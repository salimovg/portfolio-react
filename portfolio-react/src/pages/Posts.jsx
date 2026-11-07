import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((res) => {
        if (!res.ok) throw new Error("Server xatosi");
        return res.json();
      })
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Posts</h2>
      {loading && <p className="muted">Yuklanmoqda...</p>}
      {error && <p className="muted">Xatolik: {error}</p>}
      <div className="grid">
        {posts.map((p) => (
          <Link key={p.id} to={`/posts/${p.id}`} className="card link-card">
            <span className="num">{p.id}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
